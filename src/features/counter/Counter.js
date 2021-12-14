import React, { useState } from "react";
import store from "../../app/store";
// import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function useSelector(callback) {
  const [state, setState] = useState(store.getState());
  store.subscribe(() => setState(store.getState()));
  return callback(state);
}

function useDispatch() {
  return store.dispatch;
}

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
