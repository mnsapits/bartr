import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from './../session_form/session_form_container';

const sessionLinks = (onLoginClick, onSignUpClick) => (
  <nav className="login-signup">
    <button className="session-button" onClick={onLoginClick}>Sign In</button>
    <button className="session-button" onClick={onSignUpClick}>Sign Up</button>
  </nav>
);
const capitalizeFirstLetter = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {capitalizeFirstLetter(currentUser.username)}</h2>
    <button className="session-button" onClick={logout}>Log Out</button>
  </hgroup>
);

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalShown: false, formType: "login" };
    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length === 0) {
      this.closeModal();
    }
  }

  onSignUpClick () {
    this.openModal();
    this.formTypeSignUp();
  }

  onLoginClick () {
    this.openModal();
    this.formTypeLogin();
  }

  formTypeLogin() {
    this.setState({ formType: "login" });
  }

  formTypeSignUp() {
    this.setState({ formType: "signup" });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalShown: true});
  }

  closeModal() {
    this.setState({modalShown: false});
  }

  render() {
    const {currentUser, logout} = this.props;
    return (
    <div>
      {currentUser ? personalGreeting(currentUser, logout) : sessionLinks(this.onLoginClick, this.onSignUpClick)}
      <Modal
        isOpen={this.state.modalShown}
        onRequestClose={this.closeModal}>
        <SessionFormContainer
          closeModal={this.closeModal}
          formType={this.state.formType}/>
      </Modal>
    </div>
  );}
}

export default Greeting;
