import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from './../session_form/session_form_container';

const sessionLinks = (openModal) => (
  <nav className="login-signup">
    <button className="session-button" onClick={openModal}>Sign In</button>
    <button className="session-button" onClick={openModal}>Sign Up</button>
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
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      {currentUser ? personalGreeting(currentUser, logout) : sessionLinks(this.openModal)}
      <Modal
        isOpen={this.state.modalShown}
        onRequestClose={this.closeModal}>
        <SessionFormContainer formType={this.state.formType}/>
      </Modal>
    </div>
  );}
}

export default Greeting;
