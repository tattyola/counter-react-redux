// import React from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {decrement, increment} from "./actions";
//
// // hooks, useSelector, useDispatch
//
// function Counter (){
//
//     const count = useSelector((state) => state.count)
//     const dispatch = useDispatch()
//
//     return (
//         <div>
//             <h1>Redux Counter</h1>
//             <p>Count: {count}</p>
//             <button onClick={() => dispatch(increment())}>Increment</button>
//             <button onClick={() => dispatch(decrement())}>Decrement</button>
//         </div>
//     );
// };
//
// export default Counter;



// mapStateToProps, mapDispatchToProps
import {connect} from "react-redux";
import {decrement, increment} from "./actions";

function Counter({count, increment, decrement}) {
    return (
        <div>
            <h1>Counter Redux</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

const mapDispatchToProps = {
    decrement,
    increment,
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(null, mapDispatchToProps)(Counter);
