import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';
import {Button} from './Button/Button';
import {Display} from './Display/Display';
import {StartInput} from "./Input/StartInput";
import {MaxInput} from "./Input/MaxInput";

const App = () => {
    const [startCount, setStartCount] = useState(0)

    const [displayValue, setDisplayValue] = useState(0)
//==================================================================================================================
    // const [value, setValue] = useState(0)// localStorage
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value])
    //================================================================================================================
    const [maxCount, setMaxCount] = useState(0) // для кнопки в баттен
    const getMaxCount = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(+e.currentTarget.value)
    }

    const getStartCount = (e: ChangeEvent<HTMLInputElement>) => {
        setStartCount(+e.currentTarget.value)
    }

    const addValue = () => {
        setDisplayValue(startCount)
    }

    let incCount = () => {
        setDisplayValue(displayValue + 1)
        if (startCount >= maxCount) {
            setDisplayValue(maxCount)
        }
    }

    let resCount = () => {
        setDisplayValue(startCount)
    }

    return (

        <div className="App">
            <div className="Block">
                <div className="display">
                    <StartInput
                        text={'start value:'}
                        startCount={startCount}
                        getStartCount={getStartCount}
                    />
                    <MaxInput
                        text={'max value:'}
                        getMaxCount={getMaxCount}
                    />
                </div>
                <div className="counter">
                    <Button
                        text={'set'}
                        callback={addValue}
                        disabled={maxCount <= 0 && startCount === maxCount}
                    />
                </div>
            </div>
            {/*-------------------------------------------------------------------------------------------------------*/}
            <div className="Block">
                <div className="display">
                    <Display displayValue={displayValue} maxCount={maxCount}/>
                </div>
                <div className="counter">
                    <Button
                        text={'inc'}
                        disabled={maxCount === displayValue}
                        callback={incCount}
                    />
                    <Button
                        text={'res'}
                        callback={resCount}
                        disabled={startCount === displayValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
