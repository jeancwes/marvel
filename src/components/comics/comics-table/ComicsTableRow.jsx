import React from 'react';

export default function ComicsTableRow({ comic }) {
  return (
    <tr role="row">
      <td>{comic.id}</td>
      <td>{comic.title}</td>
      <td>{comic.description}</td>
      <td>{comic.pageCount}</td>
    </tr>
  );
}
