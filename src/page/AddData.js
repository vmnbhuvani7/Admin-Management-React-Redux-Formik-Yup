import React from 'react'

import { useHistory } from 'react-router-dom';
import '../css/login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormikControl from '../common/FormikControl';
import '../css/login.css'
const AddData = () => {
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
    // const registerHandler = () => {
    //     history.push({
    //         pathname: "/registration",
    //     })
    // }
    const obj = localStorage.getItem('token')
    return (
        <div>
            {/* {!obj && ( */}
            <div>
                <ToastContainer />
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {
                    formik => (
                        <Form className="container form-signin">
                            <FormikControl
                                control='input'
                                label='Pincode'
                                name='zip'
                            />
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-success mr-5 btn-style" onSubmit={() => onSubmit()}>Submit</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>
            {/* )} */}
            {/* {obj && (<Home />)} */}
        </div>
    )
}

export default AddData


