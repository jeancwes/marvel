import React from 'react';

export default function ComicTable({ comic }) {
  return (
    <section>
      <table className="table table-striped">
        <caption>Detalhes do Quadrinho</caption>
        <tbody>
          <tr>
            <td>Id</td>
            <td>{comic.id}</td>
          </tr>
          <tr>
            <td>Páginas</td>
            <td>{comic.pageCount}</td>
          </tr>
          <tr>
            <td>Descrição</td>
            <td>{comic.description}</td>
          </tr>
          <tr>
            <td>Formato</td>
            <td>{comic.format}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
