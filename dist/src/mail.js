"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer = require("nodemailer");
let transporter;
transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'casamentomateuspatricia@gmail.com',
        pass: 'bksx gqxw uqlk ofnk'
    }
});
function getTemplate(link, gift, name) {
    return `
    <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif ;
        font-size: 16px;
      }
    </style>
  </head>
 <body>
    <h2>Link de Pagamento para o Presente de Casamento</h2>
    <p>Querido(a) ${name},</p>
    <p>Aqui está seu link de pagamento para o presente <strong style="color: #c88755">${gift}</strong> do casamento da Patrícia e do Mateus:</p>
    <a href="${link}" target="_blank">${link}</a>
    <br /><br />
    <p>Atenciosamente,</p>
    <p>Patrícia e Mateus</p>
  </body>
</html>

  `;
}
function getTemplate2(gift, name, email) {
    return `
    <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif ;
        font-size: 16px;
      }
    </style>
  </head>
 <body>
    <p>Presente <strong style="color: #c88755">${gift}</strong> comprado por <b>${name}</b> - <b>${email}</b></p>
  </body>
</html>

  `;
}
async function sendMail(to, gift, link, name, confirmation) {
    const temaplte = confirmation ? getTemplate2(gift, name, to) : getTemplate(link, gift, name);
    const mailInfo = {
        from: 'casamentomateuspatricia@gmail.com',
        to: confirmation ? 'mateusdreher88@gmail.com' : to,
        subject: confirmation ? 'Presente comprado' : 'Link de pagamento casamento Mateus e Patrícia',
        html: temaplte,
    };
    try {
        const res = await transporter.sendMail(mailInfo);
        console.log(`Email sent: ${res}`);
    }
    catch (e) {
        throw new Error(e);
    }
}
exports.sendMail = sendMail;
//# sourceMappingURL=mail.js.map