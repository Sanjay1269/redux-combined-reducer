
const intialState = {
    count: 0
}

const CountReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }


        case 'DECREMENT':
            return { count: state.count - 1 }



        case 'RESET':
            return intialState

        default: return state

    }
}

export default CountReducer