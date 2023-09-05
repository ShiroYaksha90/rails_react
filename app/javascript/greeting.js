import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRandomGreeting } from "./redux/reducers/greetingSlice";

function Greeting() {
    const dispatch = useDispatch();
    const  {greeting} = useSelector(state => state.greeting);
    useEffect(() => {
        dispatch(getRandomGreeting());
    }, []);

    return (
        <div>
            <h2 style={{color: "yellow",backgroundColor: "green"}}>{ greeting }</h2>
        </div>
    )
}

export default Greeting;