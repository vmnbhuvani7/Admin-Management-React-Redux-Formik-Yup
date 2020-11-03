import React from 'react'

import { ErrorMessage, Field } from 'formik'
// import DateView from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

const DatePiker = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="d-flex align-items-center justify-content-between m-3">
            <label>{label}: </label>
            <div >
                <Field name={name} className="formStyle">
                    {
                        ({ form, field }) => {
                            const { setFieldValue } = form
                            const { value } = field
                            return (
                                // <DateView
                                //     {...field}
                                //     {...rest}
                                //     className="formStyle"
                                //     selected={value}
                                //     onChange={val => setFieldValue(name, val)}
                                // />
                                <p>insert date</p>
                            )
                        }
                    }
                </Field>
                <ErrorMessage name={name}  />
            </div>
        </div>
    )
}

export default DatePiker
