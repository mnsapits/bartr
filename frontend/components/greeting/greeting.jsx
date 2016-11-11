import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SearchBarContainer from '../search/search_bar_container';
import SessionFormContainer from './../session_form/session_form_container';
import NewProductFormContainer from '../products/new_product_form_container';
import CartIcon from '../cart/cart_icon';

const sessionLinks = (guestLogIn, onLoginClick, onSignUpClick) => (
  <nav className="login-signup">
    <button className="session-button" onClick={guestLogIn}>Guest Log In</button>
    <button className="session-button" onClick={onLoginClick}>Sign In</button>
    <button className="session-button" onClick={onSignUpClick}>Sign Up</button>
  </nav>
);

const capitalizeFirstLetter = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

const personalGreeting = (currentUser, logout, requestCart, cart) => (
  <hgroup className="header-group">
    <nav>
      <ul>
        <li><h2 className="header-name">Hi, {capitalizeFirstLetter(currentUser.username)}</h2>
          <ul>
            <li><NewProductFormContainer /></li>
            <li><button className="session-button" onClick={logout}>Log Out</button></li>
          </ul>
        </li>
        <li><CartIcon requestCart={requestCart} cart={cart}/></li>
      </ul>
    </nav>
  </hgroup>
);

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.router = props.router;
    this.login = props.login;
    this.state = { modalShown: false, formType: "login" };
    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length === 0) {
      this.closeModal();
    }
  }
  guestLogIn() {
    let user = {user: {username: "Guest", password:123456}};
    this.login(user);
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

  pushToProducts(url) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(url);
    };
  }



  render() {
    const {currentUser, logout, requestCart, cart} = this.props;
    return (
    <div className="greeting-nav">
        <button className="session-button" onClick={this.pushToProducts('/products').bind(this)}>All Products</button>
      {currentUser ? personalGreeting(currentUser, logout, requestCart, cart) : sessionLinks(this.guestLogIn, this.onLoginClick, this.onSignUpClick)}
      <Modal
        className="session-modal"
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
