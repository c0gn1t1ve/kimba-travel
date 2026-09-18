"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { journeys } from "@/lib/journeys";

const styles = ["Guided small group", "Self-drive", "Not sure yet"] as const;
const regions = [
  "Karoo & Cape",
  "Namibia",
  "Zambezi / Victoria Falls",
  "Botswana & beyond",
  "A longer crossing",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  style: string;
  region: string;
  dates: string;
  guests: string;
  language: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  style: "",
  region: "",
  dates: "",
  guests: "",
  language: "English",
  message: "",
};

export function EnquireForm({
  defaultRegion = "",
  defaultJourney = "",
}: {
  defaultRegion?: string;
  defaultJourney?: string;
}) {
  const [values, setValues] = useState<FormState>({
    ...empty,
    region: defaultRegion,
    message: defaultJourney
      ? `I am interested in the ${defaultJourney} journey.`
      : "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [sent, setSent] = useState(false);

  const mailto = useMemo(() => {
    const subject = `Journey enquiry — ${values.name || "Kimba guest"}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "—"}`,
      `Travel style: ${values.style || "—"}`,
      `Region: ${values.region || "—"}`,
      `Dates: ${values.dates || "—"}`,
      `Guests: ${values.guests || "—"}`,
      `Language: ${values.language}`,
      "",
      values.message || "No additional notes.",
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [values]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please tell us your name.";
    if (!/[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) === false && !/^[^^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "A working email helps us reply.";
    }
    if (!values.style) next.style = "How would you like to travel?";
    if (!values.message.trim()) {
      next.message = "A few lines about your trip are enough.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setSent(true);
    window.location.href = mailto;
  }

  if (sent) {
    return (
      <div className="border border-gold/40 bg-cream-deep/60 px-6 py-10 text-center">
        <p className="kicker text-gold">Thank you</p>
        <h3 className="mt-3 font-serif text-3xl text-chocolate">
          Your enquiry is ready to send
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brown/80">
          If your mail app did not open, write to us directly at{" "}
          <a className="underline decoration-gold/60" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
        <a href={mailto} className="btn-gold mt-8">
          Open email again
        </a>
      </div>
    );
  }

  const fieldClass =
    "h-11 rounded-sm border-border bg-white/70 px-3 text-sm text-chocolate placeholder:text-brown/40";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <Input
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <Input
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass}
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)">
          <Input
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            autoComplete="tel"
          />
        </Field>
        <Field label="Language">
          <select
            value={values.language}
            onChange={(event) => update("language", event.target.value)}
            className={fieldClass + " w-full"}
          >
            <option>English</option>
            <option>German</option>
            <option>Either</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="How you like to travel" error={errors.style}>
          <select
            value={values.style}
            onChange={(event) => update("style", event.target.value)}
            className={fieldClass + " w-full"}
          >
            <option value="">Select</option>
            {styles.map((style) => (
              <option key={style}>{style}</option>
            ))}
          </select>
        </Field>
        <Field label="Region or journey">
          <select
            value={values.region}
            onChange={(event) => update("region", event.target.value)}
            className={fieldClass + " w-full"}
          >
            <option value="">Select</option>
            {regions.map((region) => (
              <option key={region}>{region}</option>
            ))}
            {journeys.map((journey) => (
              <option key={journey.slug} value={journey.title}>
                {journey.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Approximate dates">
          <Input
            value={values.dates}
            onChange={(event) => update("dates", event.target.value)}
            className={fieldClass}
            placeholder="e.g. late May, flexible"
          />
        </Field>
        <Field label="Number of guests">
          <Input
            value={values.guests}
            onChange={(event) => update("guests", event.target.value)}
            className={fieldClass}
            placeholder="e.g. 2"
          />
        </Field>
      </div>

      <Field label="Tell us how you like to travel" error={errors.message}>
        <Textarea
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="min-h-36 rounded-sm border-border bg-white/70 px-3 py-2 text-sm"
          placeholder="Pace, wildlife, walking, self-drive confidence, celebrations…"
        />
      </Field>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <Button type="submit" className="btn-gold h-12 rounded-sm px-8">
          Send enquiry
        </Button>
        <a href={mailto} className="text-xs tracking-wide text-brown/60 underline decoration-gold/50">
          Or open a pre-filled email
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <Label className="kicker text-[0.62rem] text-brown/70">{label}</Label>
      {children}
      {error ? <p className="text-xs text-red-800/80">{error}</p> : null}
    </label>
  );
}
