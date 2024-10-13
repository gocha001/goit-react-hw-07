import "./App.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import { selectLoading, selectError, selectContacts } from "../../redux/contactsSlice.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
          <ContactForm />
          {loading && <Loader />}
          {error && <Error />}
        {contacts.length ? (
          <SearchBox />
        ) : (
          <p className="note" >You have no saved contacts yet.</p>
        )}
        <ContactList />
      </div>
    </>
  );
}

export default App;
