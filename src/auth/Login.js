import React from 'react'

import { useHistory } from 'react-router-dom';
import '../css/login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const history = useHistory();

    var data = {
        email: 'vaman@gmail.com',
        password: 'zxcZXC1!'
    };
    localStorage.setItem('login', JSON.stringify(data));

    const initialValues = {
        email: '',
        password: '',
    }

    const onSubmit = (value) => {
        var retrievedObject = JSON.parse(localStorage.getItem('login'));
        console.log(value);
        if (retrievedObject.email === value.email && retrievedObject.password === value.password) {
            // toast.error("Login Successfull", {
            //     position: toast.POSITION.TOP_CENTER
            // });
            toast.success("Login Successfull", { position: toast.POSITION.TOP_CENTER }, { autoClose: 15000 })
            setTimeout(function () {
                history.push({
                    pathname: "/appdata",
                })
            }, 2000);
        }
        else {
            toast.error("Enter valid Email and Password", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format')
            .required('Required !'),
        password: Yup.string().required('Required !')
            .min(8, 'at least 8 chars')
            .matches(/[a-z]/, 'at least one lowercase char')
            .matches(/[A-Z]/, 'at least one uppercase char')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "One Number and one special case Character"
            ),
    })

    return (
        <div>
            <ToastContainer />
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div>
                            <Form className="container form-signin">
                                <center> <h1> Login </h1> </center>
                                <div className="form-group ">
                                    <label className="form-label" >Email: </label>
                                    <Field
                                        name="email"
                                        className="rounded-pill form-control"
                                        placeholder="Enter Email"
                                    />
                                    <ErrorMessage name="email" >
                                        {(errorMsg) => <div className="mb-2 err-color" >{errorMsg}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-group  ">
                                    <label className="form-label" >Password: </label>
                                    <Field
                                        name="password"
                                        type="password"
                                        className="rounded-pill form-control"
                                        placeholder="Enter Password"
                                    />
                                    <ErrorMessage name="password" >
                                        {(errorMsg) => <div className="mb-2 err-color" >{errorMsg}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary rounded-pill mr-4 btn-style">Submit</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                
            </Formik>
        </div>
    )
}

export default Login

