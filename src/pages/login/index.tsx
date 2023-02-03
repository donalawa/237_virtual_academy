import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import './login.css';
import Form from '../../components/form/components/Form/Form';
import FormField from '../../components/form/components/FormField/FormField';
import Button from '../../components/form/components/Button/Button';
import * as Yup from 'yup';
import AuthLayout from '../../components/form/components/Layout/AuthLayout';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/form/components/ErrorMessage/ErrorMessage';
import { loginUser } from '../../services/auth';
import { storeToken, getToken,isTeacher, isStudent } from '../../utils/storage';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const initialValues= {
    email: '',
    password: ''
}

function Index() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const [error, setError] = useState<any>(null);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email(`${t('email_valid_error')}`).required(`${t('email_required_error')}`),
        password: Yup.string().min(4, `${t('password_length_error')}`).required(`${t('password_required_error')}`)
    })

    const handleLogin = (values: any) => {
        loginUser(values).then((res: any) => {
            setError(null);
            if(res.ok) {
                console.log(res);
                storeToken(res.data.accessToken);
                if(isTeacher()) {
                    navigate('/dashboard');
                }else if(isStudent()) {
                    navigate('/students/home')
                } else {
                    // SCHOOL
                    navigate('/school/home')
                }
            
                toast.success(`${t('login_success_text')}`, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                
            }else {
                console.log(res);
                toast.error(`${t('login_error_text')}`, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                setError(`${t('login_error_text')}`);
            }
        }).catch(err => {
            console.log(err);
        })
    }


    if(getToken() != null) {
        return <Navigate to="/dashboard" replace/>
    }

    return (
        <AuthLayout title={t('welcome_back_text')} subTitle={t('welcome_back_sub')}>
            <form action="" className="auth-form">
                <p>{t('login_title')}</p>
                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >

                        <FormField  name="email" type="email" placeholder="Email"/>

                        <FormField  name="password" type="password" placeholder={t('password_label')}/>

                        <Button title={t('login_text')}/>
                        </Form>
                </form>
                <p className="u-padding-bottom-small label-link">
                    {t('welcome_back_text')} <Link to="/register" className="text-primary">{t('register_text')}</Link>
                </p>
            </AuthLayout>
    );
}

export default Index;
