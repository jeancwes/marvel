import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import environment from './environment/environment'

export default function EmailJS() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()

    var templateParams = {
      to_name: name,
      to_email: email,
      from_name: 'Marvel Assessment',
      message: `Olá ${name}!`
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
