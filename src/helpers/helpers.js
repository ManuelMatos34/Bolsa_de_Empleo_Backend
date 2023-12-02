import nodemailer from "nodemailer";

export const sendEmail = (user, to, message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.HOST_PORT,
    secure: false,
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_EMAIL_PASSWORD,
    },
  });

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  
  <body>
      <div style="overflow: hidden; background-color: green; padding: 20px 10px">
          <h2 style="color: white; margin: 0;">Bolsa de empleo - UNPHU</h2>
      </div>
      <div style="padding-left: 20px;">
          <h3 style="color: #333;">Hola ${user}</h3>
          <p>${message}</p>
      </div>
      <footer style="text-align: center; padding: 10px; background-color: green; color: white; display: flex; justify-content: space-between; align-items: center;">
          <img src="https://b1148942.smushcdn.com/1148942/wp-content/uploads/2022/11/logo-unphu-blanco.png?lossy=1&strip=1&webp=1"
              alt="UNPHU Logo" style="width: 150px; margin-right: 10px;">
          <div style="text-align: left;">
              <p>www.unphu.edu.do</p>
              <p>Tel.: 809-562-6601 ext. 2213</p>
              <p>Av. John F. Kennedy, Km 7 1/2, Santo Domingo, Rep. Dom.</p>
          </div>
      </footer>
  </body>
  
  </html>
  `;

  const options = {
    from: process.env.FROM_EMAIL,
    to: to,
    subject: "Bolsa de empleo",
    html: htmlContent,
  };

  transporter.sendMail(options);
};
