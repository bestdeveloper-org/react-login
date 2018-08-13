import React, { Component } from "react";

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    let name='Rares'

    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button  = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <h2>This is {name}'s app</h2>
        {/* <Greeting isLoggedIn={isLoggedIn} /> */}
        {button}
      </div>
    );
  }
}

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

function LoginButton(props) {
  return <button type="button" class="btn btn-primary btn-lg" onClick={props.onClick} >Login</button>
}

function LogoutButton(props) {
  return <button type="button" class="btn btn-danger btn-lg" onClick={props.onClick} >Logout</button> 
}
