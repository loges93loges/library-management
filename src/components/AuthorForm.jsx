import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  birthDate: Yup.date().required('Required'),
  biography: Yup.string().required('Required'),
});

const AuthorForm = ({ onSubmit, initialValues = {} }) => {
  return (
    <Formik
      initialValues={initialValues || { name: '', birthDate: '', biography: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <Field type="date" name="birthDate" />
            <ErrorMessage name="birthDate" component="div" className="error" />
          </div>
          <div className="form-group">
            <label>Biography</label>
            <Field as="textarea" name="biography" />
            <ErrorMessage name="biography" component="div" className="error" />
          </div>
          <button type="submit">
            {initialValues.id ? 'Update Author' : 'Add Author'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
