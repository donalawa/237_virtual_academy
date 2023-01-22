import React from 'react';


interface Props {
    type: string,
    name: string,
    placeholder: string,
    onChange: any,
    onBlur?: any,
    value?: string
}

function TextInput({type, name, placeholder, value, onChange, onBlur}: Props) {
    return (
        <div className="input-with-icon-form-group">
           {type == 'text' && <i className="fas fa-user text-primary"></i>}
           {type == 'password' && <i className="fas fa-lock text-primary"></i>}
           {type == 'email' && <i className="fas fa-envelope text-primary"></i>}
            <input onBlur={onBlur} value={value} name={name} onChange={onChange} type={type} placeholder={placeholder} />
      </div>
    );
}

export default TextInput;