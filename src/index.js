import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { StrictMode } from "react/cjs/react.production.min";
import App from "./App";
import { initialState } from "./redux/reducers/reducer";
import { store } from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>,
    document.getElementById("root")
);
