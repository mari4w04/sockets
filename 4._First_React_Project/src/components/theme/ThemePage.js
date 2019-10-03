import React from "react";
import ButtonWithProps from "../button/ButtonWithProps";

export default class ThemePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Theme Page</h1>
                <input type="color" onChange={event => console.log(event.target.value)}></input>
                <ButtonWithProps informButtonPage={(message) => console.log(message)}/>
            </div>
        );
    }
}

