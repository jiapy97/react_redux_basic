import {INCREMENT,DECREMENT} from '../../redux/action_types'
let initState = 0;
export default function operatorCount(preState = initState, action) {
    // 规则：不能修改传递过来的preState
    console.log('reducer被调用了');
    const { type, data } = action;
    let newState;
    switch (type) {
        case INCREMENT:
            newState = preState + data;
            return newState;
        case DECREMENT:
            newState = preState - data;
            return newState;
        default:
            return preState;
    }

}