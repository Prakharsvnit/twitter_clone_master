import { createStore } from "redux";

const initialState = {
    userId: ""
};

export const reducer = (state, {type, payload})=>{
    switch(type){
        case "user":
            return {
                userId : payload
            }
        default:
            return {
                ...state,
            }
    }
};

export const store = new createStore(reducer, initialState);


console.log(store.getState());

store.dispatch({
    type: "user",
    payload: 123
});


console.log(store.getState());