import React, {useState} from 'react';

import './App.css';
import {Button} from './Button/Button';
import {Display} from './Display/Display';

const App = () => {

    const [count, setCount] = useState(0)

    let incCount = () => {
        setCount(count + 1)
        if (count >= 5) {
            setCount(5)
        }
    }

    let resCount = () => {
        setCount(0)
    }


    return (

        <div className="App">
            <div className="Block">
                <div className="display">
                    <Display count={count}/>
                </div>
                <div className="counter">
                    <Button
                        text={'inc'}
                        disabled={count === 5}
                        callback={incCount}
                    />

                    <Button
                        text={'res'}
                        callback={resCount}
                        disabled={count === 0}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
