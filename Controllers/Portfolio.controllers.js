import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export const mailController = async (request, response) => {
  try {
    const { name, email, company, message } = request.body;

    if (!name || !email || !company || !message) {
      return response.status(400).json({ message: "All fields are required." });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.APP_PASSWORD,
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL_ID,
      subject: "Job Message from Recruiter Through Your Portfolio",
      text: `Name: ${name}\nEmail: ${email}\nCompany Name: ${company}\nMessage: ${message}`,
    };

    // Send mail
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending mail:", error);
        return response.status(500).json({ message: "Failed to send mail", error: error.message });
      }
      console.log("Email sent:", info.response);
      response.status(200).json({message:"Mail Send Successful"}); // Send a simple success response
    });

  } catch (error) {
    console.log("Internal Server Error", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
