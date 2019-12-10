import React from 'react';
import './css/FeaturedCollection.css'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';



class FeaturedCollection extends React.Component {
    render() {
        return (
            <div className='FC_Most_Main_Div'>

                <div className='FC_title_div'>
                    <h1>
                        Featured Collection
                        <hr />
                    </h1>
                </div>

                <div className='Featured_collect_main_div'>
                    <Row>
                        {/* Men */}
                            <Col sm="6" className='Men_Column' style={{
                                padding: '0px'
                            }}>
                            <Link to='/FeaturedCollectionDetails'>
                                <div className='Men_title'>
                                    Men
                             </div>
                                <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/mens-large_720x.jpg?v=1429650542'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        padding: '5px'

                                    }} />
                        </Link>
                            </Col>
                        {/* women */}
                        <Col xs="6" className='Women_Column' style={{
                            padding: '0px'
                        }}>
                            <div className='Women_title'>
                                Women
                             </div>
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/womens.jpg?v=1426778710'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '5px'


                                }} />

                        </Col>

                        <Col xs="6" sm="4" style={{
                            padding: '0px'
                        }}>
                            {/* Bags */}
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/bags.jpg?v=1426781626'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '5px'

                                }} />

                        </Col>
                        {/* Outdoor */}
                        <Col xs="6" sm="4" style={{
                            padding: '0px'
                        }}>
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/outdoor.jpg?v=1426781944'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '5px'

                                }} />

                        </Col>
                        {/* Home */}
                        <Col xs="6" sm="4" style={{
                            padding: '0px'
                        }}>
                            <img src='https://cdn.shopify.com/s/files/1/0803/6591/collections/home.jpg?v=1426781528'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '5px'

                                }} />
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}
export default FeaturedCollection;