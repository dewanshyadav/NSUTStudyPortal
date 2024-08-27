exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Password Update Confirmation</title>
    </head>
    
    <body style="background-color: #ffffff; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.4; color: #333333; margin: 0; padding: 0;">
      <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; text-align: center;">
        <a href="http://localhost:3000/"><img class="logo" src="" alt="NSUTStudy Logo" style="max-width: 200px; margin-bottom: 20px;"></a>
        <div class="message" style="font-size: 18px; font-weight: bold; margin-bottom: 20px;">Password Update Confirmation</div>
        <div class="body" style="font-size: 16px; margin-bottom: 20px;">
          <p>Hey ${name},</p>
          <p>Your password has been successfully updated for the email <span class="highlight" style="font-weight: bold;">${email}</span>.</p>
          <p>If you did not request this password change, please contact us immediately to secure your account.</p>
        </div>
        <div class="support" style="font-size: 14px; color: #999999; margin-top: 20px;">
          If you have any questions or need further assistance, please feel free to reach out to us at
          <a href="mailto:info@nsutstudy.com">info@nsutstudy.com</a>. We are here to help!
        </div>
      </div>
    </body>
    
    </html>`;
  };
  