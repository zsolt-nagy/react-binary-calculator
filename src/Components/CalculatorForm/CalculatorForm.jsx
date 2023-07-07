import React from 'react';
import './CalculatorForm.css';

export default function CalculatorForm() {
    function handleClick(buttonText) {
        alert(buttonText);
    }

    /* 
        +    -    *
        0    1    =
        +/-  M+   C
    */
    return (
        <section className="calculator-form-container">
            <div className="calculator-form-cell">
                <button className="btn btn-secondary" onClick={() => handleClick('+')}>+</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-secondary" onClick={() => handleClick('-')}>-</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-secondary" onClick={() => handleClick('*')}>*</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-primary" onClick={() => handleClick('0')}>0</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-primary" onClick={() => handleClick('1')}>1</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-success" onClick={() => handleClick('=')}>=</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-warning" onClick={() => handleClick('+/-')}>+/-</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-info" onClick={() => handleClick('M+')}>M+</button>
            </div>
            <div className="calculator-form-cell">
                <button className="btn btn-danger" onClick={() => handleClick('C')}>C</button>
            </div>
        </section>
    );
}