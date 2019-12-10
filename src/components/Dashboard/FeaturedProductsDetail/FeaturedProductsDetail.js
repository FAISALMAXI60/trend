import React, { Component } from "react";
import "./css/FeaturedProductsDetail.css";
import { Radio, Button, Divider, Input, Tabs,Affix } from "antd";
import abstract01 from './Images/abstract01.png'
import abstract02 from './Images/abstract02.png'
// import CollectionMenu from "../Collections/collectionlist";
// import { connect } from "react-redux";
// import { baseUrl } from "../../shared";
const { TabPane } = Tabs;
class ItemDetail extends Component {
  state = {
    carousel_item: 1,
    max_length: 4,
    count: 1,
    mode: "left",
    item: { files: [], productName: "" }
  };

  // deleteItem = () => {
  //   alert("Item has been Deleted");
  // };

  // minusCount = () => {
  //   if (this.state.count === 1) {
  //     this.deleteItem();
  //   } else {
  //     this.setState({
  //       count: this.state.count - 1
  //     });
  //   }
  // };
  // plusCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };
  // onCange = event => {
  //   let val = event.target.value;
  //   console.log(val);
  // };

  // handleModeChange = e => {
  //   const mode = e.target.value;
  //   this.setState({ mode });
  // };
  // componentDidMount() {
  //   console.log(this.props.match.params._id);
  //   console.log(this.props.items);
  //   let items = this.props.items;
  //   let id = this.props.match.params._id;
  //   if (items.length !== 0) {
  //     items
  //       .filter(item => item._id.includes(id))
  //       .map(data => {
  //         this.setState({ item: data });
  //         console.log(data);
  //         console.log('import by redux store')

  //       });
  //   } else {
  //     var options = {
  //       method: "POST",
  //       body: JSON.stringify({ id }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     };

  //     fetch("/items/detailItem", options)
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data.success) {
  //           this.setState({
  //             item: data.item
  //           });
  //           console.log('import by server')
  //         }
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }

  render() {
    const { item } = this.state;
    let mode = "left";
    if (window.innerWidth <= 700) {
      mode = "bottom";
    } else {
      mode = "left";
    }

    return (
      <div>
        {/* <CollectionMenu />   */}
        <div className="grid_box">
          <div className=" item1">
            <div>
              <Tabs
                defaultActiveKey="1"
                tabPosition={mode}
                className="carousal"
              >
                {/* {item.files.map((item, i) => ( */}
                  <TabPane
                    tab={
                      <img
                        src={abstract01}
                        alt="asdasd"
                        width="50"
                      />
                    }
                    key={1}
                  >
                    
                    
                    <div
                      className="carousalimg"
                      style={{
                        backgroundImage: `url(${abstract01})`
                      }}
                    ></div>
                    
                  </TabPane>
                  <TabPane
                    tab={
                      <img
                        src={abstract02}
                        alt="qwew"
                        width="50"
                      />
                      
                    }
                    key={2}
                    // key={i}
                  >
                    
                    
                    <div
                      className="carousalimg"
                      style={{
                        backgroundImage: `url(${abstract02})`
                      }}
                    ></div>
                    
                  </TabPane>
                 {/* ))} */}
              </Tabs>
              <Divider />
            </div>
          </div>

          <div className="grid_items">
            <div className="item_pricing_details">
              <h1 className="item_Name">T-SHIRT</h1>
              <p className="item_Description">SIMPLE ROUND-NECK</p>
              <p className="item_Price">RS 500 ONLY</p>
              <Divider />
              <div>
                <h5>SIZE</h5>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button
                    value="1"
                    style={{ marginRight: "5px", marginTop: "5px" }}
                  >
                    S
                  </Radio.Button>
                  <Radio.Button
                    value="2"
                    style={{ marginRight: "5px", marginTop: "5px" }}
                  >
                    M
                  </Radio.Button>

                  <Radio.Button
                    value="3"
                    style={{ marginRight: "5px", marginTop: "5px" }}
                  >
                    L
                  </Radio.Button>
                  <Radio.Button
                    value="4"
                    style={{ marginRight: "5px", marginTop: "5px" }}
                  >
                    XL
                  </Radio.Button>
                </Radio.Group>
                <h5 style={{ marginTop: "10px" }}>Quantity</h5>

                <div className="items" style={{ margin: "10px" }}>
                  <Button className="btn-1" onClick={this.minusCount}>
                    -
                  </Button>
                  {/* <Button className="btn-2">{this.state.count}</Button> */}
                  <Input
                    type="text"
                    value={this.state.count}
                    onChange={this.onCange}
                    style={{
                      width: "30px",
                      padding: "0px",
                      textAlign: "center",
                      border: "0"
                    }}
                    size="default"
                  />
                  <Button className="btn-3" onClick={this.plusCount}>
                    +
                  </Button>
                </div>

                <Button
                  style={{
                    backgroundColor: "#182e49",
                    color: "white",
                    width: "100%",
                    height: "40px",
                    marginTop: "20px"
                  }}
                >
                  Add to cart
                </Button>
                <Divider />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
