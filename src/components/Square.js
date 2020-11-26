import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { setArr2 } from './../reducers/squareReducer';

let Square = (props) => {
    const [border, setB] = useState(null);
    const [isBord, setIsBord] = useState(false);
    const borderHandler = (e) => {
        if (!isBord) {
            setB('5px solid yellow');
            setIsBord(true);
            props.store.dispatch(setArr2(props.index, true))
        } else {
            setB('');
            setIsBord(false);
            props.store.dispatch(setArr2(props.index, false))
        }
    }
    return <a href="#" onClick={borderHandler}><div style={{ backgroundColor: props.color, width: 200, height: 200, border: border }}></div></a>
}

export default Square;