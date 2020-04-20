import { createStore, combineReducers } from "redux";
import CounterCakes from "./Reducers/CakesReducers";
import CounterIce from "./Reducers/IceReducers";

// export const rootReducers = combineReducers({ CounterCakes, CounterIce });

// export default createStore(rootReducers);

export default createStore(combineReducers({ CounterCakes, CounterIce }));
