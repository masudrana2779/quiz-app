import React from 'react'
import { Link } from 'react-router-dom'
import illustrationSvg from '../../assets/images/login.svg'
import classes from '../../styles/Login.module.css'
import Button from '../Button'
import CheckBox from '../CheckBox'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'
const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration illustrationSvg={illustrationSvg} />
                <Form className={`${classes.login}`}>
                    <TextInput type='email' placeholder="Enter email" icon={'alternate_email'} />
                    <TextInput type='password' placeholder="Enter password" icon={'lock'} />
                    <CheckBox lable={` I agree to the Terms & Conditions`} />
                    <Button type='submit' >
                        <span>Submit now</span>
                    </Button>
                    <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    )
}

export default Login