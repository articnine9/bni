import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "articnineweb@gmail.com",
        pass: "rqiqmuwfolbiujch",
      },
    });

    await transporter.sendMail({
      from: `"BNI Contact Form" <${process.env.EMAIL_USER}>`,
      to: "bnikanyamc@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(JSON.stringify({ message: "Email send failed" }), {
      status: 500,
    });
  }
}
