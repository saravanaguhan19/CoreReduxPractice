import { createStore } from "redux";

const initalState = {
  post: 0,
  name: "Saravna",
  age: 27,
};

const postCountElement = document.querySelector(".post-count");

function reducer(state = initalState, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  } else if (action.type === "post/incrementBy") {
    return { ...state, post: state.post + action.payload };
  } else if (action.type === "post/decrementBy") {
    return { ...state, post: state.post - action.payload };
  }

  return state;
}

//what redux will do

// console.log(reduxState);

console.dir(createStore);

console.log(createStore(reducer));

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  postCountElement.innerHTML = store.getState().post;
});

postCountElement.innerHTML = store.getState().post;

store.dispatch({ type: "post/increment" });

store.dispatch({ type: "post/decrement" });

store.dispatch({ type: "post/incrementBy", payload: 5 });

store.dispatch({ type: "post/increment" });

store.dispatch({ type: "post/incrementBy", payload: 21 });
store.dispatch({ type: "post/decrementBy", payload: 10 });

unsubscribe()

document.querySelector(".increase").addEventListener("click", () => {
  store.dispatch({ type: "post/increment" });
});

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "fdjhfjdhf" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 5 });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 5 });
// console.log(reduxState);
