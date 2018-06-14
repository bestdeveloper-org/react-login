import React, {Component} from 'react';

import { connect } from 'react-redux';
import { login, logout } from "./loginActions";

const styles = {
  button: {
    width:   100,
    margin:  8,
    padding: 8
  }
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.state = {
      isLoggedIn: false,
    }
  }

  onLogin() {
    this.setState({
        isLoggedIn: true,
    })
  }

  onLogout() {
    this.setState({
        isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    if (isLoggedIn) {
      button = <logoutButton onClick={this.onLogout}>logout</logoutButton>
    } else {
      button = <loginButton onClick={this.onLogin}>login</loginButton>
    }

    return (
      <button style={{...styles.button,
          ...this.props.style}}> {button}
      </button>
    );
  }
}

function loginButton(props) {
    return <Login onClick={props.onClick}>login</Login>
}

function logoutButton(props) {
    return <Login onClick={props.onClick}>logout</Login>
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = {
  onLogin: login, onLogout: logout
};


export default connect(mapStateToProps, mapDispatchToProps) (Login);
