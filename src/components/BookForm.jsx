import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  isbn: Yup.string().required('Required'),
  publicationDate: Yup.date().required('Required'),
});

const BookForm = ({ onSubmit, initialValues = {} }) => {
  return (
    <Formik
      initialValues={initialValues || { title: '', author: '', isbn: '', publicationDate: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label>Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="form-group">
            <label>Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <Field name="isbn" type="text" />
            <ErrorMessage name="isbn" component="div" className="error" />
          </div>
          <div className="form-group">
            <label>Publication Date</label>
            <Field type="date" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" className="error" />
          </div>
          <button type="submit">
            {initialValues.id ? 'Update Book' : 'Add Book'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
