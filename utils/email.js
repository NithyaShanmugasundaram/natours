const nodemailer = require('nodemailer');

const sendEmail=async(options)=>{
  console.log(options)
  //1. create the transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAILHOST,
    port: process.env.EMAILPORT,
    auth: {
      user: process.env.EMAILUSERNAME,
      pass: process.env.EMAILPASSWORD
    }
  });
  //2.Create the options to send th email
  const mailOptions = {
        from: 'nithya <na.89@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
        // html:
      };
      // 3) Actually send the email
     try {
      await transporter.sendMail(mailOptions);
     } catch (error) {
      console.log("ERROR",error)
     }
 
}

// const sendEmail = async options => {
//   // 1) Create a transporter
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   });

//   // 2) Define the email options
//   const mailOptions = {
//     from: 'Jonas Schmedtmann <hello@jonas.io>',
//     to: options.email,
//     subject: options.subject,
//     text: options.message
//     // html:
//   };

//   // 3) Actually send the email
//   await transporter.sendMail(mailOptions);
// };

module.exports = sendEmail;
