import React from 'react';

export default class ButtonWithProps extends React.Component {
    render() {
        const { buttonText, customStyle } = this.props;

        return (
            <button style={customStyle}>{buttonText ? buttonText : "Submit"}</button>
            // <button className="btn pink">{buttonText}</button>
        );
    }
}