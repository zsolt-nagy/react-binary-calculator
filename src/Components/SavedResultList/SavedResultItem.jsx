import React from 'react';
import './SavedResultItem.css';

export default function SavedResultItem({ time, value, loadFromHistory, deleteHistoryItem }) {

  function handleLoad() {
    loadFromHistory(value);
  }
  
  function handleDelete() {
    deleteHistoryItem(time);
  }

  return (
    <tr>
        <td className="history-cell">{ new Date(time).toLocaleDateString('en') }</td>
        <td className="history-cell value-field">{ value }</td>
        <td className="history-cell value-field">({ Number.parseInt(value, 2) })</td>
        <td className="saved-actions-container history-cell">
            <button className="btn btn-info" onClick={handleLoad}>L</button>
            <button className="btn btn-danger" onClick={handleDelete}>X</button>
        </td>
    </tr>
  )
}
