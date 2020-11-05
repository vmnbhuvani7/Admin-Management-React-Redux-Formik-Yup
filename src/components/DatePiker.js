import React from 'react'

import { ErrorMessage, Field } from 'formik'
import DateView from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePiker = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="m-3 ">
            <div className="row">
                <div className="col-3">

                    <label className="form-label mt-2" >{label}: </label>
                </div>
                <div className="col-8">
                    <Field name={name} {...rest}
                        className="rounded-pill form-control"
                        placeholder={rest.placeholder}
                        type={rest.type ? rest.type : "text"}
                    >
                        {
                            ({ form, field }) => {
                                const { setFieldValue } = form
                                const { value } = field
                                return (
                                    <DateView
                                        {...field}
                                        {...rest}
                                        className="rounded-pill form-control"
                                        selected={value}
                                        value={rest.value ? rest.value : ''}
                                        onChange={val => setFieldValue(name, val)}
                                    />
                                )
                            }
                        }
                    </Field>

                    <ErrorMessage name={name} >
                        {(errorMsg) => <div className="mb-2 err-color" >{errorMsg}</div>}
                    </ErrorMessage>
                </div>
            </div>
        </div>
    )
}

export default DatePiker
