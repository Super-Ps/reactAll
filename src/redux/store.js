import {createStore} from 'redux';
import {combineReducers} from "redux";
import counter  from 'reducers/counter';

// let store = createStore(counter);
/*
我们开发中会有很多的reducer，
redux提供了一个combineReducers函数来合并reducer，
使用起来非常简单。在store.js中引入combineReducers并使用它。
*/
let store = createStore(combineReducers({counter}));

export default store;

/* 

store的具体功能介绍：

维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 触发reducers方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。

作者：涔芒果🐷
链接：https://juejin.im/post/5c9d88ea6fb9a070c6189d69
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/


/* 

梳理一下redux的工作流：

1.调用store.dispatch(action)提交action。
2.redux store调用传入的reducer函数。把当前的state和action传进去。
3.根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
4.Redux store 保存了根 reducer 返回的完整 state 树。



*/