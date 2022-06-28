import { createAction } from "@reduxjs/toolkit";
import { SETEUR, SETUSD } from "./currencyTypes";

const setEUR = createAction(SETEUR);
const setUSD = createAction(SETUSD);

export { setEUR, setUSD}
