import React from 'react'

import { ErrorMessage, Field } from 'formik'

const CheckBoxGroup = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className="m-3 ">
            <div className="row">
                <div className="col-3">

                    <label className="form-label mt-2 " >{label}: </label>
                </div>
                <div className="col-8 ">
                    <Field name={name} {...rest} className="rounded-pill form-control"
                        placeholder={rest.placeholder}
                        type={rest.type ? rest.type : "text"}>
                        {
                            ({ field }) => {
                                return options.map((option, key) => {
                                    return (
                                        <div key={option.value}>
                                            <input
                                                className="m-1"
                                                type='checkbox'
                                                {...field}
                                                value={option.value}
                                                // checked={field.value.includes(option.value)}
                                                checked={option.value === rest.value[0] ||option.value === rest.value[1]||option.value === rest.value[2]|| field.value.includes(option.value)}
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

export default CheckBoxGroup
