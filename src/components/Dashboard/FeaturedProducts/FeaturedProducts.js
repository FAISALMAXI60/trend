import React from 'react';
import Slider from "react-slick";
import './css/FeaturedProducts.css';
import { Link } from 'react-router-dom';

class FeaturedProducts extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <div className='FeaturedProducts_title_div'>
                    <h1>
                        Featured Products
                        <hr />
                    </h1>
                </div>

                <div>
                    <Slider {...settings} style={{
                        width: '100%',
                        boxsizing: 'border-box',
                        overflow: 'hidden',
                    }}>
                        <div>
                            <Link to='/FeaturedProductsDetail'>
                                <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/bags.jpg?v=1426781626'
                                    style={{
                                        width: '100%',
                                        // height: '100%',
                                        padding: '5px'

                                    }} />
                            </Link>
                        </div>
                        <div>
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/outdoor.jpg?v=1426781944'
                                style={{
                                    width: '100%',
                                    // height: '100%',
                                    padding: '5px'

                                }} />
                        </div>
                        <div>
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/home.jpg?v=1426781528'
                                style={{
                                    width: '100%',
                                    // height: '100%',
                                    padding: '5px'

                                }} />
                        </div>
                        <div>
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/bags.jpg?v=1426781626'
                                style={{
                                    width: '100%',
                                    // height: '100%',
                                    padding: '5px'

                                }} />
                        </div>
                        <div>
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/outdoor.jpg?v=1426781944'
                                style={{
                                    width: '100%',
                                    // height: '100%',
                                    padding: '5px'

                                }} />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
export default FeaturedProducts;