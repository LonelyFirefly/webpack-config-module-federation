import { Link, Outlet } from "react-router-dom";
import classes from "./app.module.scss";
import { useState } from "react";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Calendar from "@/assets/app-image.svg";

function todo() {
   throw new Error();
}

export const App = () => {
   const [counter, setCounter] = useState(0);

   todo();

   return (
      <div data-testid={"App.DataTestId"}>
         <h1>Platform={__PLATFORM__}</h1>
         fdsafsdafdsaffdsafsd
         <div
            style={{
               display: "flex",
               flexFlow: "row wrap",
            }}
         >
            <div>
               <img
                  src={avatarPng}
                  alt="fadss"
                  style={{
                     width: "400px",
                     color: "red",
                  }}
               />
            </div>
            <div>
               <img
                  src={avatarJpg}
                  alt="fadss"
                  style={{
                     width: "400px",
                  }}
               />
            </div>
            <div>
               {/* <img
                        src={calendar}
                        alt="fadss"
                        style={{
                            width: "400px",
                        }}
                    /> */}
               <Calendar
                  className={classes.icon}
                  width={500}
                  height={500}
                  color="green"
               />
            </div>
         </div>
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
