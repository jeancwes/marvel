import React, { useEffect, useState } from 'react';

const axios = require('axios');

export default function Search({ onSearch }) {

  const [titleStartsWith, setTitleStartsWith] = useState('');

  useEffect(() => {
    if (!titleStartsWith) {
      return;
    }

    const timeoutId = setTimeout(() => {
      axios.get(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${titleStartsWith}&apikey=620ef48dd36a7a49cdb0868d5363b2b4`)
        .then((response) => {
          console.log(response);
          onSearch(response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [onSearch, titleStartsWith]);

  return (
    <>
      <form className="search-form">
        <h2>Buscar Quadrinho</h2>
        <input
          type='text'
          className='search-input'
          onChange={(e) => setTitleStartsWith(e.currentTarget.value)}
          value={titleStartsWith}
          placeholder="Digite para Buscar"
        />
      </form>
    </>
  );
}
