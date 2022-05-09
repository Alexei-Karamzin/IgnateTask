const initState = {
    isLoading: false
}

type actionType = {
    type: 'IS_LOADING'
}

type stateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: actionType): stateType => {
    switch (action.type) {
        case 'IS_LOADING': {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (): any => {
    return {type: 'IS_LOADING'}
} // fix any