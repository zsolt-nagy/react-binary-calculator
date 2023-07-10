import "./App.css";
import React, { useState } from "react";
import CalculatorForm from "./Components/CalculatorForm/CalculatorForm";
import NumericDisplay from "./Components/NumericDisplay/NumericDisplay";
import SavedResultList from "./Components/SavedResultList/SavedResultList";

function App() {
    const MAX_LENGTH = 24;
    const MOD_LIMIT = 2 ** MAX_LENGTH;

    const [memory, setMemory] = useState("0");

    const [current, setCurrent] = useState("0");
    const [currentSign, setCurrentSign] = useState("+");
    const [isCurrentUpdated, setCurrentIsUpdated] = useState(true);

    const [memorySign, setMemorySign] = useState("+");
    const [operator, setOperator] = useState("");
    const [history, setHistory] = useState([
        /* // uncomment this data structure for testing if needed
        {
            time: 1688426026176,
            value: "-1110",
        },
        {
            time: 1688426027777,
            value: "1000",
        },
      */
    ]);

    function calculateResult(op = operator) {
        let leftOperand = Number.parseInt(memory, 2);
        if (memorySign === "-") {
            leftOperand *= -1;
        }
        let rightOperand = Number.parseInt(current, 2);
        if (currentSign === "-") {
            rightOperand *= -1;
        }
        let result = null;
        let resultSign = "+";

        if (op === "+") {
            result = leftOperand + rightOperand;
        } else if (op === "-") {
            result = leftOperand - rightOperand;
        } else if (op === "*") {
            result = leftOperand * rightOperand;
        } else {
            return;
        }
        result = result % MOD_LIMIT;

        if (result < 0) {
            resultSign = "-";
            result *= -1;
        }

        result = Number(result).toString(2);

        setCurrent(result);
        setMemory(result);
        setCurrentSign(resultSign);
        setMemorySign(resultSign);
        setCurrentIsUpdated(false);
    }

    function executeCommand(op) {
        if (op === "0") {
            if (!isCurrentUpdated) {
                setCurrent("0");
                setCurrentSign("+");
                setCurrentIsUpdated(true);
            } else if (current !== "0" && current.length < MAX_LENGTH) {
                setCurrent(current + "0");
            }
        } else if (op === "1") {
            if (!isCurrentUpdated) {
                setCurrent("1");
                setCurrentSign("+");
                setCurrentIsUpdated(true);
            } else if (current === "0") {
                setCurrent("1");
            } else if (current.length < MAX_LENGTH) {
                setCurrent(current + "1");
            }
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
                calculateResult(op);
            }
        } else if (op === "H+") {
            setHistory((oldHistory) => {
                let newItem = {
                    time: new Date().getTime(),
                    value: currentSign === "-" ? "-" + current : current,
                };
                let newHistory = [...oldHistory, newItem];
                return newHistory;
            });
        } else if (op === "=" && operator.length > 0) {
            calculateResult();
        }
    }

    function loadFromHistory(value) {
        if (value[0] === "-") {
            setCurrentSign("-");
            value = value.slice(1);
        } else {
            setCurrentSign("+");
        }
        setCurrent(value);
        setCurrentIsUpdated(true);
    }

    function deleteHistoryItem(timestamp) {
        /*  // easy solution with basic operations
        let newHistory = [];
        for (let item of history) {
            if (item.time !== timestamp) {
                newHistory.push(item);
            }
        }
        setHistory(newHistory);
      */

        // filter
        setHistory((oldHistory) => oldHistory.filter((item) => item.time !== timestamp));
    }

    return (
        <div className="App">
            <h1>Mod 2**24 binary calculator</h1>
            <NumericDisplay
                current={current}
                currentSign={currentSign}
                operator={operator}
                memory={memory}
                memorySign={memorySign}
            />
            <CalculatorForm executeCommand={executeCommand} />
            <SavedResultList
                history={history}
                loadFromHistory={loadFromHistory}
                deleteHistoryItem={deleteHistoryItem}
            />
        </div>
    );
}

export default App;
