
import {INCREMENT, DECREMENT, RESET} from '../actions/counter';



/*
* 初始化state
 */

const initState = {
    count: 0
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {count: 0};
        default:
            return state
    }
}

/**
 * 
 * 到这里要说一下，action创建函数，主要是返回一个action类，
 * action类有个type属性，来决定执行哪一个reducer。
 * reducer是一个纯函数（只接受和返回参数，不引入其他变量或做其他功能），
 * 主要接受旧的state和action，根据action的type来判断执行，
 * 然后返回一个新的state。

 */