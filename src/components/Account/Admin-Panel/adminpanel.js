import React from 'react';
import './css/adminpanel.css';
import store from '../../../store/store'
// import { Upload, Button, Icon } from 'antd';
import AddFeatureProduct from './AddFeatureProduct/AddFeatureProduct'
import AddCategories from './AddCategories/AddCategories'

class AdminPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            image: '',
        };
    }

    handleimg = (event) => {
        this.setState({ image: event.target.files[0] });
        console.log(event.target.files[0])
    }
    saveData = (event) => {
        event.preventDefault();
        let formdata = new FormData();
        formdata.append('file', this.state.image)
        // this.setState({ open: false });


        fetch('/uploads', {
            method: "POST",
            body: formdata
        }).then((resp) => {
            store.dispatch({
                type: "Carousel_info",
                payload: {
                    image: URL.createObjectURL(this.state.image),
                },
            });
            if (resp) {

                alert('DATA SAVED')
            }
        });
        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <div className='adminPanel_main_div'>




                    <hr style={{ backgroundColor: '#182e49' }} />
                    <div className='FC_upload_main_div'>
                        <div className='Crousel_img_upload_title_div'>
                            <h3 className='Crousel_img_upload_title' > Please Uplaod A Front Crousel Image</h3>
                        </div>

                        <div className='Crousel_img_upload_button_div'>
                            <input type='file' name='file' onChange={this.handleimg} />

                            <button onClick={this.saveData}> Add Crousel Item </button>
                        </div>
                    </div>

                    <hr style={{ backgroundColor: '#182e49' }} />
                    <div>
                        < AddFeatureProduct />
                    </div>
                    <hr style={{
                        backgroundColor: '#182e49'
                    }} />
                    <div>
                        <AddCategories />
                    </div>
                    <hr style={{
                        backgroundColor: '#182e49'
                    }} />

                </div>
            </div>
        )
    }
}
export default AdminPanel