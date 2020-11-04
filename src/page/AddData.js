import React, { useEffect, useState } from 'react'

import '../css/login.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormikControl from '../common/FormikControl';
import '../css/login.css'
import { useDispatch, useSelector } from 'react-redux';
import { addManager } from '../action/managerAction';
import ManagerList from './ManagerList';
import moment from 'moment';
const AddData = (props) => {
    const dispatch = useDispatch();
    let { update } = useSelector(state => {
        return state
    }
    )
    const initialValues = {
        name: '',
        email: "",
        address: '',
        birthdate: '',
        gender: '',
        hobby: '',
    }

    const onSubmit = (value) => {
        const data = {
            id: Math.random().toString(36).substr(2, 9),
            name: value.name,
            address: value.address,
            birthdate: moment(value.birthdate).format('l'),
            email: value.email,
            gender: value.gender,
            hobby: value.hobby,
            gender: value.gender,
        }
        dispatch(addManager(data))

    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required !'),
        email: Yup.string().email('Invalid email format')
            .required('Required !'),
        address: Yup.string().required('Required !'),
        birthdate: Yup.date().required('Required !').nullable(),
        gender: Yup.string().required('Required !'),
        hobby: Yup.array().required('Required !'),

    })
    const radioOptions = [
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' },
        { key: 'Other', value: 'other' },
    ]
    const checkBoxOptions = [
        { key: 'Cricket', value: 'Cricket' },
        { key: 'Game', value: 'Game' },
        { key: 'Travel', value: 'Travel' },
    ]
    // console.log("update value", update);
    // { update[0] && (console.log("not update", update[0].name)) }
    const [aaa, setaaa] = useState('')
    const handleChange = (e) => {
        console.log("e", e.target.value);
        setaaa(...aaa, e.target.value)
    }
    // useEffect({
    //     aaa: aaa
    // }, [aaa])
    return (
        <div>
            <div>
                <ToastContainer />
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
                                            {!update[0] &&
                                                <FormikControl
                                                    control='input'
                                                    label='Name'
                                                    name='name'
                                                    placeholder="Enter Name"
                                                    handleChange={e=>handleChange}
                                                />
                                            }
                                            {update[0] &&
                                                <FormikControl
                                                    control='input'
                                                    label='Name'
                                                    name='name'
                                                    placeholder="Enter Name"
                                                    // value={update[0].name }
                                                    value={aaa ? aaa : update[0].name}
                                                    handleChange={handleChange}
                                                />
                                            }
                                            <FormikControl
                                                control='textarea'
                                                label='Address'
                                                name='address'
                                            />
                                            <FormikControl
                                                control='input'
                                                label='Email'
                                                name='email'
                                                placeholder="Enter Email"
                                            // value={update.email && update.email}
                                            />
                                            <FormikControl
                                                control='date'
                                                label='BirthDate'
                                                name='birthdate'
                                            />
                                            <FormikControl
                                                control='radio'
                                                label='Gender'
                                                name='gender'
                                                options={radioOptions}
                                            />
                                            <FormikControl
                                                control='checkbox'
                                                label='Hobby'
                                                name='hobby'
                                                options={checkBoxOptions}
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
            <ManagerList />
        </div>
    )
}

export default AddData


