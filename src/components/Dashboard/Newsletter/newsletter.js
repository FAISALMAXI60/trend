import React from 'react';
import { Row, Col } from 'reactstrap';
import whatsapp from './images/whats-icon.png';
import fb from './images/fb-icon.png';
import './css/newsletter.css';
class NewsLetter extends React.Component {
    render() {
        return (
            <div>

                <div className="main-container">
                    <Row className="row" id="ro1">
                        <Col>
                            <h2 style={{color:'#0056b3', fontFamily:'Old Standard TT'}}>
                            Subscribe to our newsletter
                        <hr style={{width:'15%',backgroundColor:'#0056b3'}}/>

                        </h2>
                        </Col>
                    </Row>
                    <Row className="row" id="ro2" style={{color:'#0056b3', fontFamily:'Old Standard TT'}}>
                        <Col>Join Trend Synergy and get all the latest news, trends and offers</Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <form className="form-group" onSubmit={this.subscription}>
                                <input id="text-field" type="email" ref="myvalue" required />
                                <button id="sub-field" >join</button>
                            </form>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <a href="https://www.facebook.com/BrandClothingFactory/"> <img src={fb} id="fb" alt="fb" /> </a>
                            <a href="https://wa.me/923006600788">  <img src={whatsapp} id="whats" alt="whatsapp" /> </a>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default NewsLetter;