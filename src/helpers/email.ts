const nodemailer = require("nodemailer");


const sendEmail = (options:any) => {
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: "Rakesh",
      pass: "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",
    },
  });

  const mailOptions = {
    from: "alen@lilacinfotech.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err:any, info:any) {
    if (err) {
      console.log(err.message)
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;