"use server";

import nodemailer from "nodemailer";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendEmail(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot check — bots fill this hidden field, humans don't
  if (formData.get("website")) {
    return { status: "success", message: "Message sent!" };
  }

  const firstName = (formData.get("firstName") as string)?.trim();
  const lastName = (formData.get("lastName") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!firstName || !lastName || !subject || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: "sofakingkillerakron@gmail.com",
      subject: `[SKK Contact] ${subject}`,
      text: message,
      html: `<p><strong>From:</strong> ${firstName} ${lastName}</p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return { status: "success", message: "Message sent! We'll be in touch." };
  } catch {
    return {
      status: "error",
      message: "Failed to send. Please try again later.",
    };
  }
}
