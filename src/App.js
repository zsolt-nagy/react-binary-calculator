import "./App.css";
import React, { useState } from "react";
import CalculatorForm from "./Components/CalculatorForm/CalculatorForm";
import NumericDisplay from "./Components/NumericDisplay/NumericDisplay";
import SavedResultList from "./Components/SavedResultList/SavedResultList";

function App() {
    const MAX_LENGTH = 12;
    const [memory, setMemory] = useState("0");

    const [current, setCurrent] = useState("0");
    const [currentSign, setCurrentSign] = useState("+");
    const [isCurrentUpdated, setCurrentIsUpdated] = useState(false);

    const [memorySign, setMemorySign] = useState("+");
    const [operator, setOperator] = useState("");
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

    function calculateResult() {
        alert("TODO calculate result and place it into mem and current");
    }

    function executeCommand(op) {
        if (op === "0") {
            if (current !== "0" && current.length < MAX_LENGTH) {
                setCurrent(current + "0");
            }
            setCurrentIsUpdated(true);
        } else if (op === "1") {
            if (current === "0") {
                setCurrent("1");
            } else if (current.length < MAX_LENGTH) {
                setCurrent(current + "1");
            }
            setCurrentIsUpdated(true);
        } else if (op === "+/-") {
            setCurrentSign(currentSign === "+" ? "-" : "+");
        } else if (op === "C") {
            setCurrent("0");
            setCurrentSign("+");
            setMemory("0");
            setMemorySign("+");
            setOperator("");
        } else if (op === "+" || op === "-" || op === "*") {
            setOperator(op);
            if (isCurrentUpdated) {
                calculateResult(); // TODO
                setCurrentIsUpdated(false);
            }
        }
    }

    return (
        <div className="App">
            <NumericDisplay
                current={current}
                currentSign={currentSign}
                operator={operator}
                memory={memory}
                memorySign={memorySign}
            />
            <CalculatorForm executeCommand={executeCommand} />
            <SavedResultList history={history} />
        </div>
    );
}

export default App;
