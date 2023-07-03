import React from 'react';
import SavedResultItem from './SavedResultItem';

export default function SavedResultList({ history }) {
    const Rows = history.map(item => <SavedResultItem time={item.time} value={item.value} key={item.time} />);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Binary Value</th>
                    <th>Decimal Value</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { Rows}
            </tbody>
        </table>
    );
}

