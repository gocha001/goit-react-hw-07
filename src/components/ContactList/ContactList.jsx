import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.container}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
