import React from 'react'

import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { addManager, updateData } from '../action/managerAction';
import FormikControl from '../common/FormikControl';
import ManagerList from './ManagerList';
import '../css/login.css'
import '../css/login.css'
import { useHistory } from 'react-router-dom';

const AddData = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let { update } = useSelector(state => {
        return state
    })
    const initialValues = {
        name: '',
        email: "",
        address: '',
        birthdate: '',
        gender: '',
        hobby: '',
    }

    const onSubmit = (value, { resetForm }) => {
        const data = {
            id: update.length === 0 ? Math.random().toString(36).substr(2, 9) : update[0].id,
            name: value.name,
            address: value.address,
            birthdate: moment(value.birthdate).format('l'),
            email: value.email,
            gender: value.gender,
            hobby: value.hobby,
            gender: value.gender,
        }
        { update.length === 0 ? dispatch(addManager(data)) : dispatch(updateData(data)) }
        toast.success("Add data Successfully", { position: toast.POSITION.TOP_CENTER }, { autoClose: 15000 })
        resetForm({})
        history.push({
            pathname: "/maganerlist",
        })
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

                                            {update && update[0] ?
                                                <FormikControl
                                                    control='input'
                                                    label='Name'
                                                    name='name'
                                                    placeholder="Enter Name"
                                                    value={formik.values.name ? formik.values.name : update[0].name}
                                                /> :
                                                <FormikControl
                                                    control='input'
                                                    label='Name'
                                                    name='name'
                                                    placeholder="Enter Name"
                                                    value={formik.values.name}
                                                />
                                            }

                                            {update && update[0] ?
                                                <FormikControl
                                                    control='textarea'
                                                    label='Address'
                                                    name='address'
                                                    value={formik.values.address ? formik.values.address : update[0].address}
                                                /> :
                                                <FormikControl
                                                    control='textarea'
                                                    label='Address'
                                                    name='address'
                                                    value={formik.values.address}
                                                />
                                            }

                                            {update && update[0] ?
                                                <FormikControl
                                                    control='input'
                                                    label='Email'
                                                    name='email'
                                                    placeholder="Enter Email"
                                                    value={formik.values.email ? formik.values.email : update[0].email}
                                                /> :
                                                <FormikControl
                                                    control='input'
                                                    label='Email'
                                                    name='email'
                                                    placeholder="Enter Email"
                                                    value={formik.values.email}
                                                />
                                            }
                                            {update && update[0] ?
                                                <FormikControl
                                                    control='date'
                                                    label='BirthDate'
                                                    name='birthdate'
                                                    value={formik.values.birthdate ? formik.values.birthdate : update[0].birthdate}
                                                /> :
                                                <FormikControl
                                                    control='date'
                                                    label='BirthDate'
                                                    name='birthdate'
                                                    value={formik.values.birthdate}
                                                />
                                            }
                                            {update && update[0] ?
                                                <FormikControl
                                                    control='radio'
                                                    label='Gender'
                                                    name='gender'
                                                    options={radioOptions}
                                                    value={formik.values.gender ? formik.values.gender : update[0].gender}
                                                /> :
                                                <FormikControl
                                                    control='radio'
                                                    label='Gender'
                                                    name='gender'
                                                    options={radioOptions}
                                                    value={formik.values.gender}
                                                />
                                            }
                                            {update && update[0] ?
                                                <FormikControl
                                                    control='checkbox'
                                                    label='Hobby'
                                                    name='hobby'
                                                    options={checkBoxOptions}
                                                    value={formik.values.hobby ? formik.values.hobby : update[0].hobby}
                                                /> :
                                                <FormikControl
                                                    control='checkbox'
                                                    label='Hobby'
                                                    name='hobby'
                                                    options={checkBoxOptions}
                                                    value={formik.values.hobby}
                                                />
                                            }
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
        </div>
    )
}

export default AddData


