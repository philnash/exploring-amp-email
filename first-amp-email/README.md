# Send your first AMP email

This project will show you how to send an AMP email using the [Twilio SendGrid API](https://sendgrid.com/docs/api-reference/).

* [Sending and receiving AMP emails](#sending-and-receiving-amp-emails)
  * [Sending AMP email](#sending-amp-email)
  * [Receiving AMP emails](#receiving-amp-emails)
* [Usage](#usage)
* [Troubleshooting](#troubleshooting)

## Sending and receiving AMP emails

Before you try to send an AMP email, you will need to ensure you can send and receive them.

### Sending AMP email

To send an AMP email you must meet the [AMP for Email security requirements](https://developers.google.com/gmail/ampemail/security-requirements). Briefly, this means your sending domain must have implemeneted DKIM, SPF and DMARC.

Follow this guide to [set up domain authentication (for SPF and DKIM) with SendGrid](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication/) and follow this guide to [set up DMARC with SendGrid](https://sendgrid.com/docs/ui/sending-email/how-to-implement-dmarc/).

### Receiving AMP emails

You can receive AMP emails in a Gmail account by whitelisting the email address you are sending from. See [how to test your AMP emails in Gmail](https://developers.google.com/gmail/ampemail/testing-dynamic-email) for details.

## Usage

Download or clone this repo:

```bash
git clone https://github.com/philnash/exploring-amp-email.git
```

Change into the `first-amp-email` directory and install the dependencies:

```bash
cd exploring-amp-email/first-amp-email
npm install
```

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Fill in the `.env` file with your [SendGrid API Key](https://sendgrid.com/docs/ui/account-and-settings/api-keys/), the email address you want to send the test email from and the email address you want to send it to.

Run the script to send the email:

```bash
npm run send
```

If there is a success message, check your inbox and you should find the email.

## Troubleshooting

* Make sure your SendGrid API key is correct and has full access to send emails
* If the email doesn't arrive in your main inbox, check your spam folder
* For AMP emails, ensure that you have [SPF, DKIM](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication/) and [DMARC](https://sendgrid.com/docs/ui/sending-email/how-to-implement-dmarc/) setup correctly (check out details on [how to check if your email is authenticated](https://support.google.com/mail/answer/180707))
