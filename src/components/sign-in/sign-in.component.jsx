import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-buttom/custom-buttom.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
}

handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
}
    render() {
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>

            <form onSubmit={this.handleSubmit}>

            <FormInput 
                name='email'
                type='email'
                onChange={this.handleChange}
                value={this.state.email}
                required
                />

            <FormInput
               name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              required 
            />

            <CustomButtom type='submit'> Sign in</CustomButtom>
            <CustomButtom onClick={signInWithGoogle}>
            {' '} Sign with Google {' '}
            </CustomButtom>

            </form>
            </div>
        )
    }
}