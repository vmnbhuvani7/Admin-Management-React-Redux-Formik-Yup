import React from 'react'

import CheckBoxGroup from '../components/CheckBoxGroup'
import DatePiker from '../components/DatePiker'
import Input from '../components/Input'
import RadioButton from '../components/RadioButton'
import Textarea from '../components/Textarea'
import '../css/login.css'
const FormikControl = (props) => {

    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest  }  />
        case 'textarea':
            return <Textarea {...rest} />
        case 'radio':
            return <RadioButton {...rest} />
        case 'checkbox':
            return <CheckBoxGroup {...rest} />
        case 'date':
            return <DatePiker {...rest} />
        default: return null
    }
}

export default FormikControl
