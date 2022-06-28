import { createReducer } from "@reduxjs/toolkit";
import { setEUR, setUSD } from "./currencyActions";

const currencyReducer = createReducer({ eur: [], usd: [] }, {
    [setEUR]: (state, action) => ({...state, eur: action.payload}),
    [setUSD]: (state, action) => ({...state, usd: action.payload}),
});

export default currencyReducer;