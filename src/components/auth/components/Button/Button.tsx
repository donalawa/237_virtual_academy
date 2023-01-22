import React from 'react';
import { useFormikContext } from 'formik';

interface Props {
    title: string
}
function Button({ title }: Props) {
    const { handleSubmit } : any  = useFormikContext();

    return (
        <button onClick={handleSubmit}   type="submit" className="u-margin-bottom-small btn-auth">{title}</button>
    );
}

export default Button;