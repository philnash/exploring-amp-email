const sendgrid = require("@sendgrid/mail");

const { from, to, sendGridAPIKey } = require("./lib/config");

const { readFile } = require("fs/promises");
const { join, resolve } = require("path");

sendgrid.setApiKey(sendGridAPIKey);

const send = async (from, to) => {
  const text = await readFile(resolve(join("emails", `email.txt`)), {
    encoding: "utf-8",
  });
  const html = await readFile(resolve(join("emails", `email.html`)), {
    encoding: "utf-8",
  });

  try {
    await sendgrid.send({
      to: to,
      from: from,
      subject: "Sending Emails",
      content: [
        {
          type: "text/plain",
          value: text,
        },
        {
          type: "text/html",
          value: html,
        },
      ],
      trackingSettings: {
        clickTracking: {
          enable: false,
          enableText: false,
        },
        openTracking: {
          enable: false,
        },
      },
    });
    console.log("Email sent!");
  } catch (error) {
    console.log("Email failed to send. ", error);
  }
};

send(from, to);
