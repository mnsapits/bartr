import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul className="session-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  title(){
    if (this.props.formType === 'login') {
      return "Sign In";
    } else {
      return "Sign Up";
    }
  }

  render() {
    return (
        <div className="login-form-container">
          <form
            onSubmit={this.handleSubmit} className="login-form-box">
            <h3>{this.title()}</h3>
            {this.renderErrors()}
            <div className="login-form">
              <label className="session-label"> Username
                <input type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input" />
              </label>
              <br/>
              <label className="session-label"> Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input" />
              </label>
              <br/>
              <input className="session-submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>
    );
  }

}

export default withRouter(SessionForm);
