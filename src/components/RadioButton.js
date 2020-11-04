import React from 'react'

import { ErrorMessage, Field } from 'formik'


const RadioButton = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className="m-3 ">
            <div className="row">
                <div className="col-3">

                    <label className="form-label mt-2" >{label}: </label>
                </div>
                <div className="col-8 optionStyle">
                    <Field name={name} {...rest}
                        className="rounded-pill form-control"
                        placeholder={rest.placeholder}
                        type={rest.type ? rest.type : "text"}
                    >
                        {
                            ({ field }) => {
                                return options.map(option => {
                                    return (
                                        <div key={option.value} >
                                            <input
                                                className="m-1"
                                                type='radio'
                                                {...field}
                                                value={option.value}
                                                checked={field.value === option.value}
                                            />
                                            <label >{option.key}</label>
                                        </div>
                                    )
                                })
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

export default RadioButton
