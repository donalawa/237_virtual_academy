import React from 'react';
import './Button.css'

interface Props {
    text: string,
    type: string
}
function Button({ text, type = 'primary' }: Props) {
    return (
        <div>
           {type == 'primary' && <a href="#" className="btn primary-btn">{text}</a>}
           {type == 'outline' && <a href="#" className="btn btn-outline-primary">{text}</a>}
        </div>
    );
}

export default Button;