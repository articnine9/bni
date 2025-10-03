import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, businessName, email, phone, message } = await req.json();

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
      from: `"BNI Visitors Form" <${process.env.EMAIL_USER}>`,
      to: "bnikanyamc@gmail.com", // recipient email(s)
      subject: "New Visitor Enquiry",
      html: `
        <h3>New Visitor Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message || "N/A"}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ message: "Email send failed" }), {
      status: 500,
    });
  }
}
