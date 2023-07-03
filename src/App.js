import "./App.css";
import CalculatorForm from "./Components/CalculatorForm/CalculatorForm";
import NumericDisplay from "./Components/NumericDisplay/NumericDisplay";
import SavedResultList from "./Components/SavedResultList/SavedResultList";

function App() {
    return (
        <div className="App">
            <NumericDisplay />
            <CalculatorForm />
            <SavedResultList />
        </div>
    );
}

export default App;
