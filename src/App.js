import React from "react";
import './App.css';
import AsyncRealization from "./components/async-cards/async-realization/async-realization"

import {createStore} from "redux"
import {Provider} from "react-redux"
import {rootReducer} from "./common/reducers/root-reducer"

const store = createStore(rootReducer)

function App() {
    return (
        // Mapping elements form mock-data
        <Provider store={store}>
            <div className="App">
                <AsyncRealization/>
            </div>
        </Provider>
    );
}

export default App;
