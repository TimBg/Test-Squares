import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';
import { Provider } from 'react-redux';
import { setArr } from './reducers/squareReducer';
import store from './redux/store';

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function App(props) {
    const colors = ['blue', 'red', 'brown', 'green'];
    const [blueSquaresCount, setBlueSquaresCount] = useState(randomInteger(1, 3))
    let activeColors = new Array(6).fill(null);
    const [flag, setFlag] = useState(null);
    const [r, setR] = useState(new Array(6).fill('').map(item => randomInteger(0, 5)));
    const [cr, setCR] = useState(new Array(6).fill('').map(item => randomInteger(1, 3)))
    for (let i = 0; i < blueSquaresCount; ++i) {
        activeColors[r[i]] = 'blue';
        props.store.dispatch(setArr(r));
        activeColors.forEach((item, i, arr) => { if (!item) arr[i] = colors[cr[i]] });
    }
    props.store.dispatch(setArr(activeColors.map(x => { if (x === 'blue') { return 1 } else { return 0 } })));

    const buttonHandler = (e) => {
        for (let i = 0; i < 6; ++i) {
            console.log(store.getState().brunch1.arr[i], store.getState().brunch1.arr2[i])
            if (store.getState().brunch1.arr[i] !== store.getState().brunch1.arr2[i]) {
                setFlag(false);
                return
            }
        }
        let flag2 = [];
        for (let i = 0; i < 6; ++i) {

            if (store.getState().brunch1.arr[i] === store.getState().brunch1.arr2[i]) {
                flag2.push(1);
            }
            console.log(store.getState().brunch1.arr[i], store.getState().brunch1.arr2[i])
            if (flag2.length === 6) {
                setFlag(true);
                setR(new Array(6).fill('').map(item => randomInteger(0, 5)));
                setCR(new Array(6).fill('').map(item => randomInteger(1, 3)));
            }
        }
    }
    return (
        <div className="app-wrapper">
            <Provider store={props.store}>
                {new Array(6).fill('').map((item, i) => <Square store={props.store} index={i} color={activeColors[i]} />)}
                <button onClick={buttonHandler}>Submit</button>
            </Provider>
            {flag ? <div>Success</div> : <div>Wrong</div>}
        </div>
    );
}

export default App;
