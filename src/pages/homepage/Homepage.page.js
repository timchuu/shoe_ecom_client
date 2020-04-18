import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from '../../components/header/MainHeader.component'
import Footer from '../../components/footer/Footer.component'
import HomeGridOne from '../../components/home_grid_1/HomeGridOne.component'
import HomeGridTwo from '../../components/home_grid_two/HomeGridTwo.component'
import MoreShoes from '../../components/more_shoes/MoreShoes.component'
import Newsletter from '../../components/newsletter/Newsletter.component'



const Homepage = () => {

    const gridData = {

        title: 'Nike DOWNSHIFTER',
        imageOne: 'images/b1.jpg',
        imageTwo: 'images/b2.jpg',
        text: 'Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius moditempora incidunt ut labore et dolore .',
        subtitle: 'Air force'

    }

    const gridData2 = {
        title: 'Sneakers',
        imageOne: 'images/b4.jpg',
        imageTwo: 'images/b3.jpg',
        text: 'Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius moditempora incidunt ut labore et dolore .',
        subtitle: 'Air force'
    }





    return (

        <React.Fragment>
            <div className='banner_top' id='home' style={{ marginTop: '50px' }}>
                <div className="wrapper_top_w3layouts">
                    <div className='logo'>
                        <h1>
                            <Link className='navbar-brand' to='/'>
                                <span>Downy</span>
                                <i>Shoes</i>
                            </Link>
                        </h1>
                    </div>

                </div>
                <MainHeader />
            </div>
            <HomeGridOne myTitle={gridData.title} mySrcOne={gridData.imageOne} myText={gridData.text} subtitle={gridData.subtitle} mySrcTwo={gridData.imageTwo} />
            <HomeGridTwo myTitle={gridData2.title} mySrcOne={gridData2.imageOne} myText={gridData2.text} subtitle={gridData2.subtitle} mySrcTwo={gridData2.imageTwo} />
            <MoreShoes />
            <Newsletter />
            <Footer />
        </React.Fragment>

    )

}

export default Homepage
