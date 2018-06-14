import React, {Component} from 'react';

const styles = {
    button: {
        width:   100,
        margin:  8,
        padding: 8
    }
};
class SignUp extends Component {
    render() {
        return (
            <button style={{...styles.button, ...this.props.style}}>
            </button>
        );
    }
}

export default SignUp;

