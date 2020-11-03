import React from 'react'

import { ErrorMessage, Field, Form } from 'formik'
import '../css/login.css'

const Input = (props) => {
    const { label, name, ...rest } = props
    return (
        // <div className=" d-flex align-items-center justify-content-between m-3 ">
        <div className="row">
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div>
                    {/* <Form className="container form-signin"> */}
                        <div className="form-group ">
                            <label className="form-label" >{label}: </label>
                            <Field id={name} name={name} {...rest} 
                             className="rounded-pill form-control formStyle" 
                             />
                            <ErrorMessage name="email" >
                                {(errorMsg) => <div className="mb-2 err-color" >{errorMsg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary rounded-pill mr-4 btn-style">Submit</button>
                        </div>
                    {/* </Form> */}
                </div>
            </div>
            <div className='col-md-3'></div>
        </div>
    )
}

export default Input
