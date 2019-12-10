import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';

class NormalLoginForm extends React.Component {
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

    adminSignin = (event) => {

      event.preventDefault();
      // store.dispatch({
      //   type: "USER_LOGIN_STARTED",
      // });
      fetch('/signin_adminpanel', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(this.state)
      }).then((resp) => {
        // store.dispatch({
        //   type: "USER_LOGIN_DONE"
        // });
        resp.json().then((data) => {
          console.log(data)
          // if (data._id) {
          //   store.dispatch({
          //     type: "USER_LOGIN_SUCCESS",
          //     payload: data
          //   })
          // } else {
          //   store.dispatch({
          //     type: "USER_LOGIN_FAILED",
          //     payload: data
          //   });
          // }
          if (data._id) {
            this.props.history.push('/adminpanel')
          }
          else{
            this.props.history.push('/admin-trendsynergy')
          }
        })
      });
  
    }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center">
        <Col span={12}>

          <Form onSubmit={this.handleSubmit} className="login-form" style={{
            maxWidth: '50vw'
          }}>
            <Form.Item>
              {getFieldDecorator('Email', {
                rules: [{ required: true, message: 'Please input your Email!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                  name='Email'
                 onChange={this.handleChange}
                
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                  name='Password'
                  onChange={this.handleChange}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="" style={{
                float: 'right'
              }}>
                Forgot password
          </a>
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.adminSignin} style={{
                width: '100%'
              }}>
                Log in
          </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;
