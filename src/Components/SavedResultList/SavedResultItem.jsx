import React from 'react';

export default function SavedResultItem({ time, value }) {
  return (
    <tr>
        <td>{ new Date(time).toLocaleDateString('en') }</td>
        <td>{ value }</td>
        <td>({ Number.parseInt(value, 2) })</td>
        <td>
            <button>L</button>
            <button>X</button>
        </td>
    </tr>
  )
}
