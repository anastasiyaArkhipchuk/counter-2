import React, {useState} from 'react';
import s from './App.module.css';
import {Settings} from "./components/Settings";
import {Counter} from "./components/Counter";

function App() {
    const [count, setCount] = useState("0")
    const [disableInc, setDisableInc] = useState(false)
    const [disableReset, setDisableReset] = useState(false)
    const [disableSet, setDisableSet] = useState(false)
    const [maxValue, setMaxValue] = useState("5")
    const [startValue, setStartValue] = useState("0")

    const changeCount = () => {
        let countNew = Number(count)
        let countMax = Number(maxValue)
        countNew++
        setCount(countNew.toString())
        if (countNew >= countMax) {
            setDisableInc(true)
        }
        setDisableReset(false)
    }
    const resetCount = () => {
        setCount(startValue)
        setDisableReset(true)
        setDisableInc(false)
        setDisableSet(false)
    }

    const changeNumberMax = (valueMax: string) => {
        setCount("enter values and press\"set\"")
        let maxValue = Number(valueMax)
        let valueStart = Number(startValue)
        if (maxValue <= valueStart) {
            setCount("incorrect value")
        }
        setMaxValue(valueMax)
    }
    const changeNumberStart = (valueStart: string) => {
        setCount("enter values and press\"set\"")
        let startValue = Number(valueStart)
        if (startValue<0) {
            setCount("incorrect value")
        }
        setStartValue(valueStart)
    }
    const changeSet = () => {
        setCount(startValue)
        setDisableInc(false)
        setDisableReset(true)
        setDisableSet(true)
    }
    return (
        <div className={s.body}>
            <Settings
                changeNumberMax={changeNumberMax}
                changeNumberStart={changeNumberStart}
                changeSet={changeSet}
                disable={disableSet}
            />
            <Counter
                count={count}
                changeCount={changeCount}
                resetCount={resetCount}
                disableReset={disableReset}
                disableInc={disableInc}
            />
        </div>
    );
}

export default App;
