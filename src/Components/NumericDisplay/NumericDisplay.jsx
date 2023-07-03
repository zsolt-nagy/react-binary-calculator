import React from 'react';
import './NumericDisplay.css';

export default function NumericDisplay({ current, operator, memory }) {
    return (
        <div className="numeric-display">
            <div className='numeric-display-row'>
                <div className='numeric-display-label'>M</div>
                <div className='numeric-display-field'>{ memory ?? '' }</div>
                <div className='numeric-display-operator'>{ operator ?? '' }</div>
            </div>
            <div className='numeric-display-row'>
                <div className='numeric-display-label'>C</div>
                <div className='numeric-display-field'>{ current }</div>
                <div className='numeric-display-placeholder'></div>
            </div>
        </div>
    );
}