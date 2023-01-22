
import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import Form from '../../components/auth/components/Form/Form';
import FormField from '../../components/auth/components/FormField/FormField';
import Button from '../../components/auth/components/Button/Button';
import * as Yup from 'yup';
import AuthLayout from '../../components/auth/components/Layout/AuthLayout';

const initialValues= {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
}

function index() {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Name field is required'),
        email: Yup.string().email('Enter a valid email').required('Email field is required'),
        password: Yup.string().min(4, 'Password must be above 4 characters').required('Password Required'),
        confirm_password: Yup.string().min(4, 'Password must be above 4 characters').required('Confirm Password Required'),
    })

    const handleRegister = (values : any) => {
        console.log('VALUES: ', values);
    }

    return (
        <AuthLayout title="Create Account">
            <form action="" className="auth-form">
                <p>Register</p>
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleRegister}
                    validationSchema={validationSchema}
                >

                        <FormField  name="username" type="text" placeholder="Username"/>

                        <FormField  name="email" type="email" placeholder="Email"/>

                        <FormField  name="password" type="password" placeholder="Password"/>

                        <FormField  name="confirm_password" type="password" placeholder="Confirm password"/>

                        <Button title="Login"/>
                        </Form>
                </form>
                <p className="u-padding-bottom-small label-link">
                    Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
                </p>
            </AuthLayout>

    );
}

export default index;