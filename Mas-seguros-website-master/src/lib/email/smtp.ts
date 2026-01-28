import nodemailer from "nodemailer";

export const buildSmtpTransport = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is missing.");
  }

  return nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    }
  });
};

export const resolveMailAddresses = () => {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const to = process.env.SMTP_TO ?? process.env.SMTP_USER;

  if (!from || !to) {
    throw new Error("SMTP_FROM and SMTP_TO must be configured.");
  }

  return { from, to };
};
