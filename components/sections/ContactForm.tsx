"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
  honeypot: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  service: "Managed SOC",
  message: "",
  honeypot: "",
};

const inputClass =
  "w-full rounded-xl border border-default bg-base px-4 py-3 text-sm text-primary placeholder:text-muted transition focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setMailtoHref("");

    if (form.honeypot) return;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete your name, work email, and message.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid work email address.");
      return;
    }

    const subject = encodeURIComponent(
      `Website enquiry from ${form.name.trim()}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name.trim()}`,
        `Company: ${form.company.trim() || "Not provided"}`,
        `Email: ${form.email.trim()}`,
        `Service Interest: ${form.service}`,
        "",
        form.message.trim(),
      ].join("\n"),
    );
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setMailtoHref(mailto);
    setSuccess("Thank you — your message is ready to send.");
    window.location.assign(mailto);
  }

  return (
    <form
      className="rounded-2xl border border-default bg-surface p-6 md:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
        value={form.honeypot}
        onChange={(event) => update("honeypot", event.target.value)}
      />
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-semibold text-primary">
          Full Name<span className="ml-0.5 text-gold">*</span>
          <input
            className={`${inputClass} mt-1.5`}
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-semibold text-primary">
          Company
          <input
            className={`${inputClass} mt-1.5`}
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            placeholder="Company name"
          />
        </label>
        <label className="block text-sm font-semibold text-primary">
          Work Email<span className="ml-0.5 text-gold">*</span>
          <input
            className={`${inputClass} mt-1.5`}
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-sm font-semibold text-primary">
          Service Interest
          <select
            className={`${inputClass} mt-1.5 appearance-none`}
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
          >
            <option>Managed SOC</option>
            <option>Managed AIDR</option>
            <option>AI Upskilling</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold text-primary">
        Message<span className="ml-0.5 text-gold">*</span>
        <textarea
          className={`${inputClass} mt-1.5 min-h-36 resize-y`}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Tell us about your goals, risks, or immediate priorities."
        />
      </label>
      {error ? <p className="mt-3 text-xs text-error">{error}</p> : null}
      {success ? (
        <p className="mt-3 text-xs text-success">
          {success}{" "}
          {mailtoHref ? (
            <a className="font-semibold underline" href={mailtoHref}>
              Open email
            </a>
          ) : null}
        </p>
      ) : null}
      <button
        className="mt-6 w-full rounded bg-gold px-6 py-3 text-sm font-semibold text-navy transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        type="submit"
      >
        Contact Me
      </button>
    </form>
  );
}
