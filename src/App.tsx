import './App.css';
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";
import {useEffect, useState} from "react";


function App() {

    const [currentCount, setCurrentCount] = useState<number>(0);
    const [maxLimit, setMaxLimit] = useState<number>(5);
    const [startLimit, setStartLimit] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [message, setMessage] = useState<string | null>(null);
    const [onSet, setOnSet] = useState<string | null>(null);

    useEffect(() => {
        const storedMaxValue = localStorage.getItem("maxValue");
        if (storedMaxValue) {
            setMaxLimit(JSON.parse(storedMaxValue));
        }

        const storedStartValue = localStorage.getItem("startValue");
        if (storedStartValue) {
            setStartLimit(JSON.parse(storedStartValue));
            setCurrentCount(JSON.parse(storedStartValue));
        }
    }, []);

    const incrementCount = () => {
        if (currentCount < maxLimit) {
            setCurrentCount(prev => prev + 1);
        }
    };

    const resetCount = () => {
        setCurrentCount(startLimit);
    };

    const applySettings = (newMaxLimit: number, newStartLimit: number) => {
        setCurrentCount(newStartLimit);
        setMaxLimit(newMaxLimit);
        setStartLimit(newStartLimit);
        setDisabled(true);
        setMessage(null);
        setOnSet(null);
        localStorage.setItem('maxValue', JSON.stringify(newMaxLimit));
        localStorage.setItem('startValue', JSON.stringify(newStartLimit));
    };

    const handleStartValueChange = (newStartLimit: number) => {
        if (newStartLimit < 0 || newStartLimit >= maxLimit) {
            setDisabled(true);
            setMessage("Incorrect Value")
        } else {
            setDisabled(false);
            setMessage("Enter values and press 'Set'")
        }
        setStartLimit(newStartLimit);
    };

    const handleMaxValueChange = (newMaxLimit: number) => {
        if (newMaxLimit <= startLimit) {
            setMessage("Incorrect Value")
            setDisabled(true);
        } else {
            setMessage("Enter values and press 'Set'")
            setDisabled(false);
        }
        setMaxLimit(newMaxLimit);
    };

    const handleOnSet = () => {
        setOnSet("On")
    }


    return (
        <div>
            {onSet ? ( // Если onSet имеет значение, рендерим Settings, иначе Counter
                <Settings
                    handleStartValueChange={handleStartValueChange}
                    handleMaxValueChange={handleMaxValueChange}
                    maxLimit={maxLimit}
                    startLimit={startLimit}
                    applySettings={applySettings}
                    disabled={disabled}
                />
            ) : (
                <Counter
                    currentCount={currentCount}
                    incrementCount={incrementCount}
                    resetCount={resetCount}
                    disabled={disabled}
                    maxLimit={maxLimit}
                    message={message}
                    setOnSet={handleOnSet} // Передаём функцию для смены экрана
                />
            )}
        </div>
    );
}

export default App;
