import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NotesContext, NotesProvider } from "../contexts/NotesContext";
import { useContext } from "react";

function NotesForm(){
    const { add } = useContext(NotesContext);
    return (
        <Formik
            initialValues={{ title: "", message: "" }}
            validate={ values => {
                const errors = {};
                if (!values.title) {
                    errors.title = "Required title";
                }else if(!values.message){
                    errors.message = "Required message";
                }
                return errors;
            }}
            onSubmit={
                (values, { setSubmitting }) => {
                    add(values.title, values.message);
                    setSubmitting(false);
                    values.title = "";
                    values.message = "";
                }
            }
        >
            {
                ({ isSubmitting }) => (
                    <Form className='form'>
                        <div>
                            <label htmlFor='title'>Name</label>
                            <Field id='title' name='title' type='text' />
                            <ErrorMessage name='title' component="p" />
                        </div>

                        <div>
                            <label htmlFor='message'>Profession</label>
                            <Field as="textarea" name='message' />
                            <ErrorMessage name='message' component="p" />
                        </div>
                        <button type='submit' disabled={isSubmitting} >
                            { isSubmitting ? "Guardando tu nota..." : "Save notes" }
                        </button>
                    </Form>        
                )
            }
        </Formik>
    )
}

export default NotesForm;
