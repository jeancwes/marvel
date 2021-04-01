import React from 'react';
import './Comic.css'

import ComicTable from './comic-table/ComicTable';

export default function Comic({ comic }) {
  return (
    <>
      {(comic) && (
        <section className="comic">
          <header className="comic-header">
            <h2>{comic.title}</h2>
          </header>
          <section className="comic-thumbnail">
            <img className="comic-thumbnail-image" 
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
              alt="thumbnail" />
          </section>
          <section className="comic-info">
            <ComicTable comic={comic} />
          </section>
        </section>
      )};
    </>
  );
}
