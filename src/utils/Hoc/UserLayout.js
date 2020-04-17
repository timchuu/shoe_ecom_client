import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { selectIsUserAuthenticated } from '../../redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { logout } from '../../redux/user/user_actions'


const UserLayout = (props) => {
    let history = useHistory()

    async function handleLogout() {

        await props.logout()

        history.push('/login')
    }

    return (
        <div>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a onClick={handleLogout}>Logout</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 col-md-2 sidebar">
                        <ul class="nav nav-sidebar">
                            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Export</a></li>
                        </ul>
                        <ul class="nav nav-sidebar">
                            <li><a href="">Nav item</a></li>
                            <li><a href="">Nav item again</a></li>
                            <li><a href="">One more nav</a></li>
                            <li><a href="">Another nav item</a></li>
                            <li><a href="">More navigation</a></li>
                        </ul>
                        <ul class="nav nav-sidebar">
                            <li><a href="">Nav item again</a></li>
                            <li><a href="">One more nav</a></li>
                            <li><a href="">Another nav item</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <h1 class="page-header">Dashboard</h1>

                        <div class="row placeholders">

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsUserAuthenticated
})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout)
