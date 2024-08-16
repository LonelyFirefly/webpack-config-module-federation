import Login from "../Login";
import "./App.scss";
import { useState } from "react";

export const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            {counter}
            <button onClick={() => setCounter((prev) => prev + 1)}>
                <span>increment</span>
                <Login />
            </button>
        </div>
    );
};
