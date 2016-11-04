import React from 'react';
import Modal from 'react-modal';

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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    const product = this.state;
    this.props.addProduct({product});
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

  render() {
    console.log(this.state);
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
