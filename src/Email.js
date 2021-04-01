import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'
import environment from './environment/environment'

export default function Email({ comics }) {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  useEffect(() => {
    if (!comics || comics.length === 0) {
      return;
    }

    setMessage(comics.reduce((acc, comic) => {
        return acc += `
          <h2>${comic.title}</h2> <br>
          <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" 
            width="200" height="250" alt="image" /> <br>
          <p>${comic.description}</p> <br>
        `;
      }, '')
    );
  }, [comics]);

  const onSubmit = (e) => {
    e.preventDefault()

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
    <form onSubmit={(e) => onSubmit(e)}>
      <h2>
        Enviar Quadrinhos por Email
      </h2>
      <input type="text" placeholder="Informe seu Nome" 
        onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Informe seu Email" 
        onChange={(e) => setEmail(e.target.value)} />
      <button type="submit" disabled={!name || !email}>Enviar</button>
    </form>
  );
}
