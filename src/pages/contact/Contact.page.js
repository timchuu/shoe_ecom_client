import React from 'react'
import Footer from '../../components/footer/Footer.component'

const ContactPage = () => {

    return (
        <>

            <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <h3 className="head">Contact Us</h3>
                    <p className="head_para">Add Some Description</p>
                    <div className="inner_section_w3ls">
                        <div className="col-md-7 contact_grid_right">
                            <h6>Please fill this form to contact with us.</h6>
                            <form action="#" method="post">
                                <div className="col-md-6 col-sm-6 contact_left_grid">
                                    <input type="text" name="Name" placeholder="Name" required="" />
                                    <input type="email" name="Email" placeholder="Email" required="" />
                                </div>
                                <div className="col-md-6 col-sm-6 contact_left_grid">
                                    <input type="text" name="Telephone" placeholder="Telephone" required="" />
                                    <input type="text" name="Subject" placeholder="Subject" required="" />
                                </div>
                                <div className="clearfix"> </div>
                                <textarea required="">Message...</textarea>
                                <input type="submit" value="Submit" />
                                <input type="reset" value="Clear" />
                            </form>
                        </div>
                        <div className="col-md-5 contact-left">
                            <h6>Contact Info</h6>
                            <div className="visit">
                                <div className="col-md-2 col-sm-2 col-xs-2 contact-icon">
                                    <span className="fa fa-home" aria-hidden="true"></span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10 contact-text">
                                    <h4>Visit us</h4>
                                    <p>Parma Via Modena,BO, Italy</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="mail-us">
                                <div className="col-md-2 col-sm-2 col-xs-2 contact-icon">
                                    <span className="fa fa-envelope" aria-hidden="true"></span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10 contact-text">
                                    <h4>Mail us</h4>
                                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="call">
                                <div className="col-md-2 col-sm-2 col-xs-2 contact-icon">
                                    <span className="fa fa-phone" aria-hidden="true"></span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10 contact-text">
                                    <h4>Call us</h4>
                                    <p>+18044261149</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="visit">
                                <div className="col-md-2 col-sm-2 col-xs-2 contact-icon">
                                    <span className="fa fa-fax" aria-hidden="true"></span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10 contact-text">
                                    <h4>Fax</h4>
                                    <p>+1804426349</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>

                    </div>

                    <div className="clearfix"></div>

                </div>
            </div>
            <div className="contact-map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783"
                    className="map" style={{ border: '0' }} allowfullscreen=""></iframe>
            </div>
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

            <Footer />
        </>
    )
}

export default ContactPage
