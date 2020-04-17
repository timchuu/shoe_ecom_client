import React, { Component } from 'react'
import FormInput from '../../utils/form_input/FormInput.utils'
import { update, generateData, isFormValid } from '../../utils/form_input/form_actions.utils'
import { loginUser, loadUser } from '../../redux/user/user_actions'
import { selectIsUserAuthenticated } from '../../redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'

//css
import './register.css'


class Signin extends Component {


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

    updateForm = (element) => {
        const newFormData = update(element, this.state.formData, 'login')
        this.setState({
            formError: false,
            formData: newFormData
        })
    }

    submitForm = async (event) => {
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formData, 'login');
        let formIsValid = isFormValid(this.state.formData, 'login')

        if (formIsValid) {
            this.props.loginUser(dataToSubmit).then(response => {
                if (response.payload.token) {
                    this.props.history.push('/user/dashboard')
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
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }


        return (

            <div className='container contact__grid' >

                <form className="form-signin" onSubmit={this.submitForm}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <FormInput
                        className='form-control'
                        id={'username'}
                        formData={this.state.formData.username}
                        handleChange={(element) => this.updateForm(element)}
                    />
                    <FormInput
                        className=' form-control'
                        id={'password'}
                        formData={this.state.formData.password}
                        handleChange={(element) => this.updateForm(element)}
                    />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>

                <span>don't have an account yet? register <Link to='/register'>here</Link></span>

            </div>

        )
    }
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsUserAuthenticated
})


const mapDispatchToProps = dispatch => {
    return {
        loginUser: dataToSubmit => dispatch(loginUser(dataToSubmit))
    }


}









export default connect(mapStateToProps, mapDispatchToProps)(Signin)
