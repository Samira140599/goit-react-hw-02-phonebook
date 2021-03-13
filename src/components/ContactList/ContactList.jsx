import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, filterValue, deleteContact }) {
  return (
    <ul className={s.contacts__list}>
      {contacts
        .filter(({ name }) => {
          const findContact = name
            .toLowerCase()
            .indexOf(filterValue.toLowerCase());
          return findContact === -1 ? false : true;
        })
        .map(({ name, number, id }) => (
          <li key={id} className={s.contact__info}>
            <p className={s.contact}>
              <span className={s.contact__name}>{name}:</span>
              <span className={s.contact__number}>{number}</span>
            </p>
            <button
              className={s.contact__button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),

  filterValue: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
