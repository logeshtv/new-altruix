// pages/api/profile.js

import ProfileModel from "@/models/ProfileModel";

import nodemailer from 'nodemailer';
import qr from 'qrcode';
import jwt from 'jwt-simple';
import puppeteer from 'puppeteer';
import connectDB from "@/utils/connectDB";

const fs = require('fs');
const path = require('path');

async function generateQRCode(data) {
  try {
    const qrCodeImage = await qr.toDataURL(data);
    return qrCodeImage;
  } catch (error) {
    throw error;
  }
}

export default async (req, res) => {
  await connectDB();

  const emailTemplatePath = path.join(process.cwd(), 'doc.html');
  const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');
  const AttachTemplatePath = path.join(process.cwd(), 'mail_doc_tem.html');
  const AttachTemplate = fs.readFileSync(AttachTemplatePath, 'utf-8');
    try {
      const { email, phoneNo } = req.body; const existingProfile = await ProfileModel.findOne({
      $or: [{ email }, { phoneNo }],
      });

      if (existingProfile) {
        return res
          .status(201)
          .json({ message: "Profile with the email or phone number already exists", data: existingProfile });
      }
      const newProfile = new ProfileModel({
        Name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        collegeName: req.body.collegeName,
        collegeRegistrationNumber: req.body.collegeRegistrationNumber,
        eventInterest: req.body.eventInterest,
      });
    const savedProfile = await newProfile.save();
    
    const jsonString = JSON.stringify(savedProfile._id);
    const payload = { data: jsonString };
    const token = jwt.encode(payload, process.env.JWT_KEY);
    
    // const decodedPayload = jwt.decode(token, process.env.JWT_KEY);
    // console.log('Decrypted (JWT):', decodedPayload.data);

    
      let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "aisymdes@gmail.com",
          pass: "ftxtonffuqwehszw"
        }
      });
   
    const emailData = {
      name: savedProfile.Name,
      profilePath: 'https://altruix2k23.tech/profile/'+savedProfile._id,
      email: savedProfile.email,
      phoneNo: savedProfile.phoneNo,
      collegeName: savedProfile.collegeName,
      collegeRegistrationNumber: savedProfile.collegeRegistrationNumber,
      eventInterest: savedProfile.eventInterest,
      token :"https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl="+token,
      _id:savedProfile._id,
      createdAt:savedProfile.createdAt
  };
  
  const compiledEmailTemplate = await emailTemplate.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return emailData[key] || match;
});



  // const EmailDocTemplate = AttachTemplate.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
  //   return emailData[key] || match;
  // });

  // try{
  //   const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.setContent(EmailDocTemplate);
  // const pdfBuffer = await page.pdf();
  // await browser.close();
  // } catch(err) {
  //   console.error('Synchronous error:', error);
  // }
    // Define the email content
    const mailDetails = {
      from: 'ALTRUIX <'+ process.env.MAIL_ID+'>',
      to: savedProfile.email, // Replace with the recipient's email address
      subject: 'Successfully register Altruix',
      text: 'ticket as been attached with the mail kindly download it.',
      html: compiledEmailTemplate,
      // attachments: [
      //   {
      //     filename: 'ticket.pdf',
      //     content: pdfBuffer,
      //   },
      // ]
    };
    await new Promise((resolve, reject) => {
      mailTransporter.sendMail(mailDetails, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log("err");
          resolve(info);
        }
      });
    });
    
    
      return res.status(201).json({ message: "Detail Added successfully!!" ,data :savedProfile});
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
};