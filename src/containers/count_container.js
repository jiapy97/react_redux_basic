import Counter from '../components/counter';
import {connect} from 'react-redux';
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../redux/actions/Count_action'

// 下面的state是react-redux从redux中的reducer中取出来的
// let mapStateToProps = state => ({count: state});

// let mapDispatchToProps = dispatch => {
//     return {
//         increment: (value) => {dispatch(createIncrementAction(value))},
//         decrement: (value) => {dispatch(createDecrementAction(value))}
//     }
// }


export default connect(
    state => ({count: state.count}),  //这里的state包含所有的状态
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)
(Counter);