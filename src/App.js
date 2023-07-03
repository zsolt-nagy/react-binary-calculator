import "./App.css";
import React, { useState } from "react";
import CalculatorForm from "./Components/CalculatorForm/CalculatorForm";
import NumericDisplay from "./Components/NumericDisplay/NumericDisplay";
import SavedResultList from "./Components/SavedResultList/SavedResultList";

function App() {
    const [memory, setMemory] = useState("1011");
    const [current, setCurrent] = useState("-1");
    const [operator, setOperator] = useState("+");
    const [history, setHistory] = useState([
        {
            time: 1688426026176,
            value: "-1110",
        },
        {
            time: 1688426027777,
            value: "1000",
        },
    ]);

    return (
        <div className="App">
            <NumericDisplay current={current} operator={operator} memory={memory} />
            <CalculatorForm />
            <SavedResultList history={history} />
        </div>
    );
}

export default App;
