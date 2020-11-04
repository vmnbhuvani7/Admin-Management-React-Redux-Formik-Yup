import React from 'react'

import { ErrorMessage, Field, Form } from 'formik'
import '../css/login.css'

const Input = (props) => {
    const { label, name, ...rest } = props
    // console.log("rest value", rest.value);
    return (
        <div className="m-3 ">
            <div className="row">
                <div className="col-3">

                    <label className="form-label mt-2" >{label}: </label>
                </div>
                <div className="col-8">
                    {!rest.value &&
                        <Field id={name} name={name} {...rest}
                            className="rounded-pill form-control"
                            placeholder={rest.placeholder}
                            type={rest.type ? rest.type : "text"}
                        />
                    }

                    {rest.value &&
                        <Field id={name} name={name} {...rest}
                            className="rounded-pill form-control"
                            placeholder={rest.placeholder}
                            type={rest.type ? rest.type : "text"}
                            value={rest.value || ''}
                            onChange={rest.handlChange}
                        />
                    }

                    <ErrorMessage name={name} >
                        {(errorMsg) => <div className="mb-2 err-color" >{errorMsg}</div>}
                    </ErrorMessage>
                </div>
            </div>
        </div>
    )
}

export default Input
