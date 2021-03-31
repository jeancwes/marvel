import React, { useEffect, useState } from 'react';
import ComicsTable from './comics-table/ComicsTable';

const axios = require('axios');

export default function Comics() {

  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=620ef48dd36a7a49cdb0868d5363b2b4')
      .then((response) => {
        console.log(response);
        setComics(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <header className="comics-header">
        <h1>Marvel</h1>
      </header>
      <main className="comics-main">
        <section>
          <ComicsTable comics={comics} />
        </section>
      </main>
      <footer className="comics-footer">

      </footer>
    </>
  );
}
