import React, { useEffect, useState } from 'react';
import ComicsTableRow from './ComicsTableRow';

export default function ComicsTable({ comics }) {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    if(!comics) {
      return;
    }

    setRows(
      comics.map((comic) => {
        return (
          <ComicsTableRow
            comic={comic}
            key={comic.id}
          />
        );
      })
    );
  }, [comics])

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
                <th>Descrição</th>
                <th>Páginas</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        )}
      </div>
      <div>
        {(comics && comics.length === 0) && (
          <span>Nenhum Quadrinho</span>
        )}
      </div>
    </>
  );
}
