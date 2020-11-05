import React from 'react'

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'

import FormikControl from '../common/FormikControl';
import '../css/login.css'

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
        if (retrievedObject.email === value.email && retrievedObject.password === value.password) {
            toast.success("Login Successfull", { position: toast.POSITION.TOP_CENTER }, { autoClose: 15000 })
            setTimeout(function () {
                history.push({
                    pathname: "/maganerlist",
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
            .required('Email is Required !'),
        password: Yup.string().required('Password is Required !')
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
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    formik => (
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'>
                                <div>
                                    <Form className="container form-signin">
                                        <center> <h1> Login </h1> </center>
                                        <FormikControl
                                            control='input'
                                            label='Email'
                                            name='email'
                                            placeholder="Enter Email"
                                            value={formik.values.email}
                                        />
                                        <FormikControl
                                            control='input'
                                            label='Password'
                                            name='password'
                                            placeholder="Enter Password"
                                            type="password"
                                            value={formik.values.password}
                                        />
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary rounded-pill mr-4 btn-style">Submit</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                    )
                }
            </Formik>
        </div>
    )
}

export default Login

