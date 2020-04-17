import React, { Component } from 'react'
import FormInput from '../../utils/form_input/FormInput.utils'
import { update, generateData, isFormValid } from '../../utils/form_input/form_actions.utils'
import { registerUser } from '../../redux/user/user_actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


//css
import './register.css'

class Register extends Component {


    state = {
        formError: false,
        formSuccess: false,
        formData: {
            username: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Your username'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''

            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true

                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },


        }

    }

    //update data to form
    updateForm = (element) => {
        const newFormData = update(element, this.state.formData, 'register')
        this.setState({
            formError: false,
            formData: newFormData
        })

    }

    //submit form
    submitForm = (event) => {
        event.preventDefault()

        let dataToSubmit = generateData(this.state.formData, 'register')
        let formIsValid = isFormValid(this.state.formData, 'register')

        //check if form is valid
        if (formIsValid) {

            this.props.registerUser(dataToSubmit).then(response => {

                if (response.payload.token) {
                    this.setState({
                        formError: false,
                        formSuccess: true
                    });
                    setTimeout(() => {
                        this.props.history.push('/');
                    }, 3000)
                } else {
                    this.setState({
                        formError: true

                    })
                }
            });

        } else {
            this.setState({
                formError: true
            })
        }

    }



    render() {

        return (

            <div className='container contact__grid' >
                <div className='ads-grid_shop'>
                    <div className='shop_inner_inf'>
                        <div className='inner_inf'>
                            <div className='col-md-7 contact_grid_right'>
                                <form className="form-signin" onSubmit={this.submitForm}>
                                    <h2 className='form-signin-heading text-center'>Register Here</h2>
                                    <FormInput
                                        className='form-control'
                                        id={'username'}
                                        formData={this.state.formData.username}
                                        handleChange={(element) => this.updateForm(element)}
                                    />
                                    <FormInput
                                        className='form-control'
                                        id={'email'}
                                        formData={this.state.formData.email}
                                        handleChange={(element) => this.updateForm(element)}
                                    />
                                    <FormInput
                                        className=' form-control'
                                        id={'password'}
                                        formData={this.state.formData.password}
                                        handleChange={(element) => this.updateForm(element)}
                                    />


                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                                </form>

                                <span>already have an account? sign in  <Link to='/login'>here</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: dataToSubmit => dispatch(registerUser(dataToSubmit))
    }
}

export default connect(null, mapDispatchToProps)(Register)
