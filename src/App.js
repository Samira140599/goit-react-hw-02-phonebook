import { Component } from 'react';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '+38-099-12-15-567' },
        { id: 'id-2', name: 'Hermione Kline', number: '+48-050-04-98-001' },
        { id: 'id-3', name: 'Eden Clements', number: '+42-078-79-58-520' },
        { id: 'id-4', name: 'Annie Copeland', number: '+72-098-07-27-637' },
      ],
      filter: '',
    };
  }

  handlerFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmit = newContact => {
    const { contacts } = this.state;

    if (
      contacts.some(
        el => el.name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    if (
      contacts.some(
        el => el.number.toLowerCase() === newContact.number.toLowerCase(),
      )
    ) {
      return alert(`${newContact.number} is already in contacts`);
    }

    const innitialNewContact = contacts.concat(newContact);

    this.setState(prevState => {
      return { ...prevState, contacts: innitialNewContact };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <div className={s.container}>
          <h2 className={s.contacts__title}>Contacts</h2>
          <Filter handlerFilter={this.handlerFilter} filterValue={filter} />
          <ContactList
            contacts={contacts}
            filterValue={filter}
            deleteContact={this.onDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
