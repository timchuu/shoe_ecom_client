import React from 'react'

const Newsletter = () => {
    return (
        <div className="newsletter_w3layouts_agile">
            <div className="col-sm-6 newsleft">
                <h3>Sign up for Newsletter !</h3>
            </div>
            <div className="col-sm-6 newsright">
                <form action="#" method="post">
                    <input type="email" placeholder="Enter your email..." name="email" required="" />
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div className="clearfix"></div>
        </div>
    )
}

export default Newsletter
