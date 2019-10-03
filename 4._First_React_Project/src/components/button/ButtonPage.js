import React from 'react';
import ButtonWithProps from './ButtonWithProps';
import "./ButtonPage.css"

export default class ButtonPage extends React.Component {
  render() {
    return (
        <div>
            This is the button page.
            <ButtonWithProps />
            <ButtonWithProps buttonText="This is my custom button text" customStyle={{backgroundColor: "red"}}/>
            <ButtonWithProps buttonText="This is another button" customStyle={{backgroundColor: "blue"}}/>
        </div>
    );
  }
}
