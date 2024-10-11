import * as nodemailer from 'nodemailer';
//gfKSegS2F##xm6&n
//cqqj hjcg ezng wfnn

let transporter: nodemailer.Transporter;

transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'casamentomateuspatricia@gmail.com',
    pass: 'bksx gqxw uqlk ofnk' // Use the generated app password here
  }
});

function getTemplate(link: string, gift: string, name: string) {
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

  `
}

function getTemplate2(gift: string, name: string, email: string) {
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

  `
}



export async function sendMail(to: string, gift: string, link: string, name: string, confirmation?: boolean) {
  const temaplte = confirmation ? getTemplate2(gift, name, to) : getTemplate(link, gift, name);
  const mailInfo: nodemailer.SendMailOptions = {
    from: 'casamentomateuspatricia@gmail.com',
    to: confirmation ? 'mateusdreher88@gmail.com' : to,
    subject: confirmation ? 'Presente comprado' : 'Link de pagamento casamento Mateus e Patrícia',
    html: temaplte,

  };
  try {
    const res = await transporter.sendMail(mailInfo);
    console.log(`Email sent: ${res}`)
  } catch (e) {
    throw new Error(e);
  }

}
