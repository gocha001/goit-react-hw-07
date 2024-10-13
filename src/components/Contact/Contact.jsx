import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

const Contact = ({ id, name, number }) => {

  const dispatch = useDispatch();

  return (
    <>
        <div className={css.container}>
          <div className={css.contact}>
            <div className={css.item}>
              <RiUser3Fill className={css.icon} size="24" />
              <p>{name}</p>
            </div>
            <div className={css.item}>
              <PiPhoneFill className={css.icon} size="24" />
              <p>{number}</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={css.btn}
          >
            Delete
          </button>
        </div>
    </>
  );
};

export default Contact;
