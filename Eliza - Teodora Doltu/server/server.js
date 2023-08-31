const express = require("express");
const bodyParser = require("./body-parser");
const nodemailer = require("./nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service provider
    auth: {
      user: "elizadoltuofficial@gmail.com", // Your email address
      pass: "iztyekqpqaymipmk" // Your email password (use an app password if available)
    },
    debug: true,
  });

  // Email content
  const mailOptions = {
    from: "elizadoltuofficial@gmail.com",
    to: "everythingwithunknowninfo@gmail.com", // Destination email address
    subject: "New Message",
    text: `Email: ${email}\n\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
