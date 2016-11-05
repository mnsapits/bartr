import React from 'react';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShown: false,
      name: "",
      details: "",
      image_url: "",
      location: "",
      price: "",
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNothing = this.renderNothing.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalShown: true});
  }

  closeModal() {
    this.setState({modalShown: false});
    this.props.clearProductErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.errors.length === 0) {
  //     this.closeModal();
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearProductErrors();
    this.props.addProduct(this.state);
  }

  renderErrors() {
    return(
      <ul className="new-product-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderNothing() {
    return (
      <div>
        <button
          className="new-product-button"
          onClick={this.openModal}
        >Add Product
        </button>
      </div>
    );
  }

  render() {
    if (this.state.modalShown) {
      return this.renderModal();
    } else {
      return this.renderNothing();
    }
  }

  renderModal() {
    return (
      <div>
        <button
          className="new-product-button"
          onClick={this.openModal}
        >Add Product
        </button>
        <Modal
          className="new-product-modal"
          isOpen={this.state.modalShown}
          onRequestClose={this.closeModal}
        >
          <form
            className="new-product-form"
            onSubmit={this.handleSubmit}>
            <h3>New Product</h3>
            {this.renderErrors()}
            <label> Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
              />
            </label>
            <label> Details
              <textarea rows="4" cols="80"
                value={this.state.details}
                onChange={this.update("details")}
              ></textarea>
            </label>
            <label> Price
              <input
                type="text"
                value={this.state.price}
                onChange={this.update("price")}
              />
            </label>
            <label> Location
              <input
                type="text"
                value={this.state.location}
                onChange={this.update("location")}
              />
            </label>
            <label> Image URL
              <input
                type="text"
                value={this.state.image_url}
                onChange={this.update("image_url")}
              />
            </label>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default NewProductForm;
