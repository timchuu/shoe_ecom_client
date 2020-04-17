import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShopItem = () => {

    // function renderCardImage(images){
    //     if(images.length > 0) {
    //         return images[0].url
    //     } else {
    //         return "image not available"
    //     }
    // }
    const [imageData, setImageData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/items')
            .then(res => res.json())
            .then(data => {

                setImageData({ ...imageData, data: data })
            })
    }, [])

    console.log(imageData.data)
    return (
        <>




            {
                imageData.data ?

                    imageData.data.map((item, i) => {
                        return (
                            <div className="col-md-4 product-men" key={i}>
                                <div className="product-shoe-info shoe">
                                    <div className="men-pro-item">
                                        <div className='men-thumb-item'>
                                            <img src={item.image} alt='myPic' />
                                            <div className='men-cart-pro'>
                                                <div className='inner-men-cart-pro'></div>
                                            </div>
                                            <span class='product-new-top'>New</span>
                                            <div className='item-info-product'>{item.name}</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : <div>loading...</div>
            }



        </>
    )
}

export default ShopItem
