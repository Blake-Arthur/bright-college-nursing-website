require("dotenv").config();
import express from "express";
const app = express();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function sendTemplateMessage() {
  const response = await axios({
    url: "https://graph.facebook.com/v20.0/1067713486418109/messages",
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      messaging_product: "whatsapp",
      to: "918658202812",
      type: "template",
      template: {
        name: "admissions",
        language: {
          code: "en_US",
        },
      },
    }),
  });

  console.log(response.data);
}

async function sendTextMessage() {
  const response = await axios({
    url: "https://graph.facebook.com/v20.0/phone_number_id/messages",
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      messaging_product: "whatsapp",
      to: "phone_number",
      type: "text",
      text: {
        body: "This is a text message",
      },
    }),
  });

  console.log(response.data);
}

async function sendMediaMessage() {
  const response = await axios({
    url: "https://graph.facebook.com/v20.0/phone_number_id/messages",
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      messaging_product: "whatsapp",
      to: "phone_number",
      type: "image",
      image: {
        //link: 'https://dummyimage.com/600x400/000/fff.png&text=manfra.io',
        id: "512126264622813",
        caption: "This is a media message",
      },
    }),
  });

  console.log(response.data);
}

async function uploadImage() {
  const data = new FormData();
  data.append("messaging_product", "whatsapp");
  data.append("file", fs.createReadStream(process.cwd() + "/logo.png"), {
    contentType: "image/png",
  });
  data.append("type", "image/png");

  const response = await axios({
    url: "https://graph.facebook.com/v20.0/phone_number_id/media",
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
    },
    data: data,
  });

  console.log(response.data);
}

sendTemplateMessage();

// sendTextMessage()

// sendMediaMessage()

// uploadImage()

app.use(express.json());
app.post("/webhook/whatsapp", async (req, res) => {
  const entry = req.body.entry?.[0];
  const change = entry?.changes?.[0];
  const message = change?.value?.messages?.[0];

  if (!message) return res.sendStatus(200);

  const from = message.from;
  const buttonText = message.button?.text;

  if (buttonText === "Download Brochure") {
    await sendBrochure(from);
  }
  if (buttonText === "Book Counselling Call") {
    await sendCounsellingCall(from);
  }
});

async function sendBrochure(to) {
  await fetch("https://graph.facebook.com/v20.0/1067713486418109/messages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "document",
      document: {
        link: "https://github.com/Blake-Arthur/bright-college-nursing-website/blob/main/src/brochure.pdf",
        filename: "Bright Nursing Brochure 2026.pdf",
        caption: "Official College Brochure",
      },
    }),
  });
}

async function sendCounsellingCall(to) {
  const response = await axios({
    url: "https://graph.facebook.com/v20.0/1067713486418109/messages",
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: {
        body: "Thank you for showing interest\nYou will be soon matched up with a counsellor for one-on-one counselling call",
      },
    }),
  });

  // Optional follow-up
  await sendText(to, "Would you like details on eligibility, fees, or admission process?");
}
