import sgMail from "@sendgrid/mail";

export const postEmail = async (req, res) => {
  const { to, from, subject, text, html } = req.body;
  let image;
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send("Peticion enviada exitosamente");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al enviar la peticion");
    });
};
