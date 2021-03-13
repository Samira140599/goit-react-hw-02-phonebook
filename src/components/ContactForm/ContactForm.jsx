import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: '',
    };
  }

  contactInfo = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const contactId = uuidv4();

    const newContacts = { id: contactId, name, number };

    this.props.onSubmit(newContacts);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={s.container}>
        <form onSubmit={this.handelSubmit} className={s.form}>
          <label className={s.label__name}>
            Name
            <input
              type="text"
              name="name"
              className={s.label__input}
              pattern="[A-Za-z]{1,}\s[A-Za-z]{1,}"
              placeholder="Format: Tomy Brait"
              required
              value={name}
              onChange={this.contactInfo}
            ></input>
          </label>
          <label className={s.label__number}>
            Number
            <input
              type="tel"
              name="number"
              className={s.label__input}
              pattern="[+][0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
              placeholder=" Format number: +38-050-12-34-567"
              required
              value={number}
              onChange={this.contactInfo}
            ></input>
          </label>
          <button type="submit" className={s.button__submitForm}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
