import React from 'react'
import { useHistory, Link } from 'react-router-dom'


const SecondaryHeader = (props) => {
    let history = useHistory()
    console.log(history)
    return (
        <div className="banner_top innerpage" id="home">
            <div className="wrapper_top_w3layouts">
                <div className="header_agileits">
                    <div className="logo inner_page_log">
                        {history.location.pathname !== '/user/dashboard' ?
                            <h1><Link className="navbar-brand"
                                to='/'><span>Downy</span> <i>Shoes</i></Link></h1> : null
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default SecondaryHeader
