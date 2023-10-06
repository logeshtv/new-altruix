import { PDFDocument, StandardFonts,rgb } from 'pdf-lib';
import fs from 'fs';
import nodemailer from 'nodemailer';

const templatePdfBuffer = fs.readFileSync('certificate.pdf');

const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'Gmail' or use SMTP configuration
  auth: {
    user: 'logeshtv21@gmail.com', // your email
    pass: 'ptakvhadznetikug', // your password
  },
});

export default async (req, res) => {
  const recipients = [
    {
      name: 'logesh t v',
      email: 'logeshtv.home@gmail.com',
    },
  ];
 

  for (const recipient of recipients) {
    // Create a new PDF document based on the template
    const pdfDoc = await PDFDocument.load(templatePdfBuffer);
    const page = pdfDoc.getPages()[0];
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const name = recipient.name.toUpperCase(); // Capitalize the name
    const fontSize = 25;

    // Calculate the text width
    const nameWidth = name.length * (fontSize * 0.6);

    // Calculate the center of the page
    const centerX = page.getWidth() / 2;
    const centerY = 360;

    // Manually position the text
    page.drawText(name, {
      x: centerX - nameWidth / 2,
      y: centerY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    const modifiedPdfBuffer = await pdfDoc.save();

    const mailOptions = {
      from: 'logeshtv21@gmail.com',
      to: recipient.email,
      subject: 'Certificate of Completion',
      text: `Dear ${recipient.name},\n\nAttached is your certificate of completion.`,
      attachments: [
        {
          filename: 'certificate.pdf',
          content: modifiedPdfBuffer,
        },
      ],
    };
    console.log('helo')
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Error sending email to ${recipient.email}: ${error}`);
        res.status(500).json({ error: `Error sending email to ${recipient.email}: ${error}` });
      } else {
        console.log(`Email sent to ${recipient.email}: ${info.response}`);
        res.status(200).json({ message: `Email sent to ${recipient.email}: ${info.response}` });
      }
    });
  }
};
