import React from 'react';
import './css/AddFeatureProduct.css';
import { Upload, Icon, Modal } from 'antd';






function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
class AddFeatureProduct extends React.Component {

    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <div className='FP_upload_main_div'>
                    <div className='FP_title_div'>
                        <h3 className='Crousel_img_upload_title'>
                            Please Uplaod A Feature Product</h3>
                    </div>

                    <div className='FP_uplaod_description_price_div'>

                        <form>
                            <label for="EnterDesc">Enter Description</label>
                            <input type="text" id="fname" name="firstname" placeholder="Enter Description.." />
                            <label for="lname">Enter Price</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Price.." />
                            {/* <label for="country">Country</label> */}
                            {/* <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select> */}
                            <input type="submit" value="Submit" />
                        </form>

                    </div>




                    <div className='FP_upload_button_div'>
                        <div className="clearfix">
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
export default AddFeatureProduct;