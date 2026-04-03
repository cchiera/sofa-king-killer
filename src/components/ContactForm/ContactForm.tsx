"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";
import styles from "./ContactForm.module.css";

const initialState = { status: "idle" as const, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.submit} disabled={pending}>
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className={styles.form}>
      {/* Honeypot — hidden from real users, traps bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Leave this blank</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">First Name</label>
          <input
            className={styles.input}
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">Last Name</label>
          <input
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="subject">Subject</label>
        <input
          className={styles.input}
          type="text"
          id="subject"
          name="subject"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          required
        />
      </div>

      {state.status === "success" && (
        <p className={styles.successMsg}>{state.message}</p>
      )}
      {state.status === "error" && (
        <p className={styles.errorMsg}>{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
