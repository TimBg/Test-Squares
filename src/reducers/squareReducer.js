let _ = require('lodash');

let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    arr: [0, 0, 0, 0, 0, 0],
    arr2: [0, 0, 0, 0, 0, 0]
};

let squareReducer = (state = initialState, action) => {
    let st;
    switch (action.type) {
        case 'SET_ARR':
            {
                let newState = _.cloneDeep(state);
                newState.arr = action.arr;
                st = newState
            }; return st; break;
        case 'SET_ARR2':
            {
                console.log(action)
                let newState = _.cloneDeep(state);
                if (action.isTrue) {
                    newState.arr2[action.index] = 1;
                } else {
                    newState.arr2[action.index] = 0;
                }
                st = newState
            }; return st;
        default: {
            return state;
        }
    }
}

export const setArr = arr => {
    return {
        type: 'SET_ARR',
        arr: arr
    }
}

export const setArr2 = (index, isTrue) => {
    return {
        type: 'SET_ARR2',
        index: index,
        isTrue: isTrue
    }
}
export default squareReducer;