import React from 'react';
import { useFormikContext } from 'formik'
import TextInput from '../../Textinput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function FormField({name, type = "text", placeholder} : any) {
    const {setFieldTouched, setFieldValue, errors, touched, values} : any = useFormikContext();

    return (
        <>
            <TextInput 
                onBlur={() => setFieldTouched(name)}
                onChange={(e:any) => setFieldValue(name,e.target.value)}
                value={values[name]}
                placeholder={placeholder}
                type={type}
                name={name}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default FormField;