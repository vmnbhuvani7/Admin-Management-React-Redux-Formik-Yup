import React from 'react'

import { ErrorMessage, Field } from 'formik'


const Textarea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="d-flex align-items-center justify-content-between m-3 ">
            <label>{label}: </label>
            <div>
                <Field as='textarea' name={name} {...rest} autocomplete="address" className="formStyle"/>
                <ErrorMessage name={name}  />
            </div>
        </div>
    )
}



export default Textarea
