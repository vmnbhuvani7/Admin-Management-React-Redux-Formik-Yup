import React from 'react'

import { ErrorMessage, Field } from 'formik'

const Textarea = (props) => {
    const { label, name, value, ...rest } = props
    return (
        <div className="m-3 ">
            <div className="row">
                <div className="col-3">

                    <label className="form-label mt-2" >{label}: </label>
                </div>
                <div className="col-8">

                    {!value &&
                        <Field as='textarea' id={name} name={name} autoComplete="address" {...rest}
                            className="rounded-pill form-control"
                            placeholder={rest.placeholder}
                            type={rest.type ? rest.type : "text"}
                            value={value ? value : ''}
                        />
                    }

                    {value &&
                        <Field as='textarea' id={name} name={name} autoComplete="address" {...rest}
                            className="rounded-pill form-control"
                            placeholder={rest.placeholder}
                            type={rest.type ? rest.type : "text"}
                            value={value}
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



export default Textarea
