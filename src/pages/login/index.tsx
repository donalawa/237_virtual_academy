import React from 'react';
import './login.css';
import Form from '../../components/auth/components/Form/Form';
import FormField from '../../components/auth/components/FormField/FormField';
import Button from '../../components/auth/components/Button/Button';
import * as Yup from 'yup';
import AuthLayout from '../../components/auth/components/Layout/AuthLayout';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/auth/components/ErrorMessage/ErrorMessage';

const initialValues= {
    email: '',
    password: ''
}

function index() {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Email field is required'),
        password: Yup.string().min(4, 'Password must be above 4 characters').required('Password Required')
    })

    const handleLogin = () => {

    }

    return (
        <AuthLayout title="Welcome Back">
            <form action="" className="auth-form">
                <p>Login</p>
                {/* <ErrorMessage error="Login Authentication Error" visible={true} /> */}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >

                        <FormField  name="email" type="email" placeholder="Email"/>

                        <FormField  name="password" type="password" placeholder="Password"/>

                        <Button title="Login"/>
                        </Form>
                </form>
                <p className="u-padding-bottom-small label-link">
                    Don't have an account? <Link to="/register" className="text-primary">Sign up</Link>
                </p>
            </AuthLayout>
    );
}

export default index;
