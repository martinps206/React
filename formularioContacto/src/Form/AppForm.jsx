import { Field, Form, Formik, ErrorMessage } from "formik";

function AppForm(){
    return(
        <Formik
            initialValues={{
                message: "Welcome..",
            }}
            validate = { values => {
                let errors = {}
                if(!values.name){
                    errors.name = "Required name";
                }else if(!values.email){
                    errors.email = "Required email";
                }else if( !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
                    errors.email = "not valid";
                }
                return errors;
            } }
            onSubmit = {
                (values, {setSubmitting}) => {
                    let url = "https://formspree.io/f/xoqbwqyz";
                    let formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("message", values.message);

                    fetch(url, {
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept": "application/json",
                        }
                    }).then(response => {
                        setSubmitting(false);
                        alert("Gracias por contactarme");
                    })
                }
            }
        >
            {
                ({isSubmitting, values}) => (
                    <Form className="form">
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <Field type="text" name="name"></Field>
                            <ErrorMessage name="name" className="error-message" component="p" />
                        </div>

                        <div>
                            <label autoComplete="off" htmlFor="email">Email:</label>
                            <Field type="email" name="email"></Field>
                            <ErrorMessage name="email" component="p" />
                        </div>

                        <div>
                            <label htmlFor="message">Message:</label>
                            <Field type="textarea" value={values.message} name="message"></Field>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando.." : "Enviar mensaje"}
                        </button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default AppForm;
