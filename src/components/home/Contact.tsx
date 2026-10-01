"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { Button, Eyebrow, Reveal, Section } from "@/ui/components";
import { localePath, type Locale } from "@/lib/i18n";
import styles from "./Contact.module.scss";

interface ContactProps {
  content: {
    eyebrow: string;
    title: string;
    lead: string;
    altPrefix: string;
    fields: Record<string, string>;
    stages: string[];
    needs: string[];
    budgets: string[];
    submit: string;
    status: { sending: string; success: string; error: string; rateLimited: string };
    fine: string;
  };
  contact: { email: string; endpoint: string };
  locale: Locale;
  title?: string;
  lead?: string;
}

type Status = "idle" | "sending" | "success" | "error" | "rateLimited";

export function Contact({ content: c, contact, locale, title, lead }: ContactProps) {
  const displayTitle = title ?? c.title;
  const displayLead = lead ?? c.lead;
  const [status, setStatus] = useState<Status>("idle");
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(contact.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        router.push(localePath("obrigado", locale));
      } else {
        setStatus(res.status === 429 ? "rateLimited" : "error");
      }
    } catch {
      setStatus("error");
    }
  };

  const message =
    status === "sending" ? c.status.sending
    : status === "success" ? c.status.success
    : status === "error" ? c.status.error
    : status === "rateLimited" ? c.status.rateLimited
    : c.fine;

  return (
    <Section id="contato">
      <div className={styles.grid}>
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className={styles.title}>{displayTitle}</h2>
          <p className={styles.lead}>{displayLead}</p>
          <p className={styles.alt}>
            {c.altPrefix}{" "}
            <a className="link-underline" href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </Reveal>

        <Reveal>
          <form onSubmit={onSubmit} className={styles.form} noValidate={false}>
            <div className={styles.hp} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className={styles.row}>
              <Field id="name" label={c.fields.name} required autoComplete="name" />
              <Field id="email" label={c.fields.email} type="email" required autoComplete="email" />
            </div>
            <div className={styles.row}>
              <Field id="company" label={c.fields.company} required autoComplete="organization" />
              <Field id="source" label={c.fields.source} />
            </div>
            <div className={styles.row}>
              <Select id="stage" label={c.fields.stage} options={c.stages} placeholder={c.fields.placeholder} required />
              <Select id="need" label={c.fields.need} options={c.needs} placeholder={c.fields.placeholder} required />
            </div>
            <Select id="budget" label={c.fields.budget} options={c.budgets} placeholder={c.fields.placeholder} required />
            <div className={styles.field}>
              <label htmlFor="message">{c.fields.message}</label>
              <textarea id="message" name="message" required maxLength={5000} />
            </div>
            <Button type="submit" className={styles.submit} disabled={status === "sending"}>
              {status === "sending" ? c.status.sending : c.submit}
            </Button>
            <p
              className={classNames(styles.fine, {
                [styles.ok]: status === "success",
                [styles.err]: status === "error" || status === "rateLimited",
              })}
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id, label, type = "text", required, autoComplete,
}: { id: string; label: string; type?: string; required?: boolean; autoComplete?: string }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required={required} autoComplete={autoComplete} />
    </div>
  );
}

function Select({ id, label, options, placeholder, required }: { id: string; label: string; options: string[]; placeholder: string; required?: boolean }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} required={required} defaultValue="">
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
