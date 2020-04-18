import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart_selectors'
import { selectIsUserAuthenticated, selectCurrentUser } from '../../redux/user/user.selectors'
import { logout } from '../../redux/user/user_actions'
import CartIcon from '../cart_icon/CartIcon.component'
import CartDropdown from '../cart_dropdown/CartDropdown.component'






class Nav extends Component {





    render() {

        console.log(this.props)
        const { isAuthenticated, user } = this.props
        const AuthLinks = (

            <li class="dropdown">
                <Link to='/shop' class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{user ? `Welcome ${user.username}` : ''}<span class="caret"></span></Link>
                <ul class="dropdown-menu">
                    <li><Link to='/user/dashboard'>My Account</Link></li>
                    <li role="separator" class="divider"></li>
                    <li><a style={{ cursor: 'pointer' }} onClick={() => { this.props.onLogout(() => { this.props.history.push('/login'); console.log(this.props.history) }) }}>Log out</a></li>
                </ul>

            </li>
        )

        const unAuthLinks = (
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><Link to='/login'>Login</Link></li>
                    <li role="separator" class="divider"></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </li>
        )
        return (

            <nav className="navbar navbar-inverse navbar-fixed-top" style={{ marginBottom: '0px', borderRadius: '0px' }} >
                <div className='container-fluid'>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav  navbar-right">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            {user ? AuthLinks : unAuthLinks}
                            <li><CartIcon /></li>
                        </ul>

                    </div>

                </div>
                <div>
                    {
                        this.props.hidden ? null : <CartDropdown />
                    }
                </div>

            </nav>


        )
    }
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    isAuthenticated: selectIsUserAuthenticated,
    user: selectCurrentUser
})

// const mapDispatchToProps = dispatch => {
//     return {
//         logout: () => dispatch(logout())
//     }
// }


export default connect(mapStateToProps)(withRouter(Nav))
