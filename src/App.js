//REACT IMPORTS
import React, { Component } from 'react';

//REACT ROUTER DOM IMPORTS
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//REDUX IMPORTS
import { connect } from 'react-redux'
import { authCheckState, logout } from './redux/user/user_actions'

//APP IMPORTS
import Homepage from './pages/homepage/Homepage.page'
import Shoppage from './pages/shop/Shop.page'
import SinglePage from './pages/single/Single.page'
import CheckoutPage from './pages/checkout/Checkout.page'
import ContactPage from './pages/contact/Contact.page'
import UserDashboard from './pages/user/UserDashboard.page'
import Signin from './pages/signin_register/Signin.component'
import Register from './pages/signin_register/Register.component'
import Header from './components/header/MainHeader.component'
import SecondaryHeader from './components/secondary_header/SecondaryHeader.component'
import Nav from './components/nav/Nav.component'
//STYLE IMPORT
// import './App.css';
//CSS THIRD-PARTY
import 'tachyons'
//TO DO: set breadcrumbs through probs
//TO DO: fix /user_dash.. to /user/dash...


const HeaderLayout = ({ children }) => (
  <div>
    <SecondaryHeader />
    {children}
  </div>
)





class App extends Component {

  // componentDidMount() {
  //   this.props.authCheckState()
  // }

  handleLogout = (callback) => {
    this.props.logout().then(() => {
      callback()
    }).catch(error => console.log(error))
  }

  render() {

    return (
      <div>

        <Nav onLogout={this.handleLogout} />
        <Switch>

          <Route exact path='/' component={Homepage} />
          <HeaderLayout>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Signin} />
            <Route path='/shop' component={Shoppage} />
            <Route path='/single' component={SinglePage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/user/dashboard' component={UserDashboard} />
          </HeaderLayout>

        </Switch>
      </div>

    );
  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.user.token !== null
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    // authCheckState: () => dispatch(authCheckState())
    logout: () => dispatch(logout())
  }
}


export default connect(null, mapDispatchToProps)(withRouter(App));
