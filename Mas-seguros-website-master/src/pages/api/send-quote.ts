import type { APIRoute } from "astro";
import { buildSmtpTransport, resolveMailAddresses } from "../../lib/email/smtp";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const nombre = String(formData.get("nombre") ?? "").trim();
    const apellido = String(formData.get("apellido") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const telefono = String(formData.get("telefono") ?? "").trim();
    const empresa = String(formData.get("empresa") ?? "").trim();

    if (!nombre || !apellido || !email || !telefono) {
      return new Response("Missing required fields.", { status: 400 });
    }

    const transporter = buildSmtpTransport();
    const { from, to } = resolveMailAddresses();

    await transporter.sendMail({
      from,
      to,
      subject: "Nueva solicitud de cotización",
      text: [
        `Nombre: ${nombre}`,
        `Apellido completo: ${apellido}`,
        `Email: ${email}`,
        `Teléfono: ${telefono}`,
        `Empresa: ${empresa || "No especificada"}`
      ].join("\n")
    });

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/"
      }
    });
  } catch (error) {
    console.error(error);
    return new Response("Error sending message.", { status: 500 });
  }
};
