"use client";

import { type FormEvent, useState } from "react";
import { Button, Eyebrow, Reveal, Section } from "@/ui/components";
import { contact, contactSection as c } from "@/app/resources";
import styles from "./Contact.module.scss";

interface ContactProps {
  title?: string;
  lead?: string;
}

export function Contact({ title = c.title, lead = c.lead }: ContactProps = {}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!contact.formAction) {
      e.preventDefault();
      setSent(true);
    }
  };

  return (
    <Section id="contato">
      <div className={styles.grid}>
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.lead}>{lead}</p>
          <p className={styles.alt}>
            {c.altPrefix}{" "}
            <a className="link-underline" href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </Reveal>

        <Reveal>
          <form action={contact.formAction || undefined} method="post" onSubmit={onSubmit} className={styles.form}>
            <div className={styles.row}>
              <Field id="name" label={c.fields.name} required />
              <Field id="email" label={c.fields.email} type="email" required />
            </div>
            <div className={styles.row}>
              <Field id="company" label={c.fields.company} required />
              <Field id="source" label={c.fields.source} />
            </div>
            <div className={styles.row}>
              <Select id="stage" label={c.fields.stage} options={c.stages} placeholder={c.fields.placeholder} required />
              <Select id="need" label={c.fields.need} options={c.needs} placeholder={c.fields.placeholder} required />
            </div>
            <Select id="budget" label={c.fields.budget} options={c.budgets} placeholder={c.fields.placeholder} required />
            <div className={styles.field}>
              <label htmlFor="message">{c.fields.message}</label>
              <textarea id="message" name="message" required />
            </div>
            <Button type="submit" className={styles.submit}>{c.submit}</Button>
            <p className={styles.fine}>{sent ? "Recebido! (demo — configure contact.formAction em config.ts)" : c.fine}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required={required} />
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
