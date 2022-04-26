import {UserType} from "../HW8";

export type actionType = {
    type: 'sort' | 'check'
    payload: string
}

export const homeWorkReducer = (state: UserType, action: actionType): UserType => {
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]
            if (action.payload === 'up') {
                return copyState.sort(function (a,b){
                    if (a.age > b.age) {
                        return 1;
                    }
                    if (a.age < b.age) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                })
            } else {
                return copyState.sort(function (a,b){
                    if (a.age < b.age) {
                        return 1;
                    }
                    if (a.age > b.age) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                })
            }
        }
        case 'check': {
            return state.filter(e => e.age > 18)
        }
        default:
            return state
    }
}