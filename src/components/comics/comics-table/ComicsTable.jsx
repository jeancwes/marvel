import React, { useState } from 'react';

import Comic from '../../comic/Comic';
import Dialog from '../../dialog/Dialog';

export default function ComicsTable({ comics }) {

  const [opened, setOpened] = useState(false);
  const [comic, setComic] = useState(undefined);

  return (
    <>
      <div className="table-responsive">
        {(comics && comics.length > 0) && (
          <table className="table table-striped" role="table">
            <caption role="caption">
              {comics.length} Quadrinhos
            </caption>
            <thead>
              <tr role="row">
                <th>Id</th>
                <th>Título</th>
                <th>Páginas</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {(comics) && comics.map((comic) => {
                return (
                  <tr role="row" key={comic.id}>
                    <td>{comic.id}</td>
                    <td>{comic.title}</td>
                    <td>{comic.pageCount}</td>
                    <td>
                      <button type="button" className="link" 
                        onClick={() => {
                          setComic(comic);
                          setOpened(!opened);
                        }}>
                          Ver Quadrinho
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {(comics && comics.length === 0) && (
          <table className="table table-striped" role="table">
            <caption role="caption">
              Nenhum Quadrinho
            </caption>
          </table>
        )}
      </div>

      <Dialog 
        opened={opened} 
        onClose={() => setOpened(!opened)}
        content={<Comic comic={comic} />}
      />
    </>
  );
}
