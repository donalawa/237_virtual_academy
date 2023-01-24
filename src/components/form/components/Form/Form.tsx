import React from 'react';
import { Formik } from 'formik';

function Form({ initialValues, onSubmit, validationSchema, children} : any) {
    return (
        <Formik 
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              enableReinitialize
            >
                {() => (
                    <>
                        { children }
                    </>
                )}
        </Formik>
    );
}

export default Form;