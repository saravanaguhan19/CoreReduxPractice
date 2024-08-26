let reduxState = {
    post: 0,
    name: "Saravna",
    age: 27
};
function reducer(state, action) {
    if (action.type === "post/increment") return {
        ...state,
        post: state.post + 1
    };
    else if (action.type === "post/decrement") return {
        ...state,
        post: state.post - 1
    };
    else if (action.type === "post/incrementBy") return {
        ...state,
        post: state.post + action.payload
    };
    return state;
}
//what redux will do
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/increment"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/increment"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/decrement"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "fdjhfjdhf"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/increment"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/incrementBy",
    payload: 5
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/incrementBy",
    payload: 5
});
console.log(reduxState);

//# sourceMappingURL=index.672d4772.js.map
