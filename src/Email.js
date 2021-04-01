import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'
import environment from './environment/environment'

export default function Email({ comics, selectedComics }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!name || !email || !selectedComics.some((sc) => sc === true)) {
      return setValid(false);
    }
    return setValid(true);
  }, [email, name, selectedComics]);

  const onSubmit = (e) => {
    e.preventDefault();

    setMessage(comics.reduce((accumulator, comic, index) => {
      if (selectedComics[index] === false) {
        return accumulator;
      }
      return accumulator + `
          <h2>${comic.title}</h2> <br>
          <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" 
            width="200" height="250" alt="image" /> <br>
          <p>${comic.description}</p> <br>
        `;
      }, '')
    );

    var templateParams = {
      to_name: name,
      to_email: email,
      from_name: 'Marvel Assessment',
      message: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Marvel Assessment</title>
        </head>
            <body>
              ${message}
            </body>
        </html>
      `
    };

    emailjs.send(
      environment.SERVICE_ID,
      environment.TEMPLATE_ID,
      templateParams,
      environment.USER_ID)
      .then((response) => {
        alert('Email Enviado', response.text);
      }, (error) => {
        alert('Ocorreu um Erro', error.text);
      });
  }

  return (
    <>
      <form className="email-form" onSubmit={(e) => onSubmit(e)}>
        <h2>
          Enviar Quadrinhos por Email
        </h2>
        <input type="text" placeholder="Informe seu Nome"
          onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Informe seu Email"
          onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" disabled={!valid}>Enviar</button>
      </form>
    </>
  );
}
