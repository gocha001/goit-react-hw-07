import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={orderSchema}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field className={css.field} name="name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label>
            <span>Number</span>
            <Field className={css.field} name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
