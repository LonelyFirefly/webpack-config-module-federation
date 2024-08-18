import { Link, Outlet } from "react-router-dom";
import classes from "./app.module.scss";

import { useState } from "react";

export const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <Link to={"/about"}>about</Link>
            <br />
            <Link to={"/shop"}>shop</Link>
            <br />
            <p className={classes.value}>Заголовок</p>
            {counter}
            <button
                className={classes.button}
                onClick={() => setCounter((prev) => prev + 1)}
            >
                <span>increment</span>
                <Outlet />
            </button>
        </div>
    );
};
