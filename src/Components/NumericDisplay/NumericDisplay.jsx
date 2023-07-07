import React from 'react';
import './NumericDisplay.css';

export default function NumericDisplay({ current, currentSign, operator, memory, memorySign }) {
    if ( memorySign === '-' ) memory = '-' + memory;
    if ( currentSign === '-' ) current = '-' + current;
    return (
        <div className="numeric-display">
            <div className='numeric-display-row'>
                <div className='numeric-display-label'>Memory</div>
                <div className='numeric-display-field'>{ memory ?? '' }</div>
                <div className='numeric-display-operator'>{ operator ?? '' }</div>
            </div>
            <div className='numeric-display-row'>
                <div className='numeric-display-label'>Current</div>
                <div className='numeric-display-field'>{ current }</div>
                <div className='numeric-display-placeholder'></div>
            </div>
        </div>
    );
}