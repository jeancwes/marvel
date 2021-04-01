import React, { useState } from 'react';

import ComicsTable from './comics-table/ComicsTable';
import Search from '../search/Search';
import EmailJS from '../../EmailJS';

export default function Comics() {

  const [comics, setComics] = useState([]);

  return (
    <>
      <header className="comics-header">
        <h1>Marvel</h1>
      </header>
      <main className="comics-main">
        <section>
          <Search onSearch={setComics} />
          <ComicsTable comics={comics} />
        </section>
      </main>
      <footer className="comics-footer">
        <EmailJS></EmailJS>
      </footer>
    </>
  );
}
