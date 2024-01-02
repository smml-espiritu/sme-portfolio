// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mailOption, transporter } from "../../../config/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.emailAddress || !data.name || !data.message || !data.subject) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOption,
        subject: data.subject,
        text: "test string",
        html: `
        <h1>${data.subject}</h1>
        <p><strong>Email:</strong> ${data.emailAddress}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Message:</strong> ${data.message}</p> `,
      });

      return res.status(200).json({ success: true });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return res
          .status(400)
          .json({ message: error.message || "An unknown error occurred" });
      } else {
        console.error("An unexpected error occurred:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  return res.status(400).json({ message: "Bad request" });
};
export default handler;
