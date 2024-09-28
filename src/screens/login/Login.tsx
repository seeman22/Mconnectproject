import React, { useState } from 'react';
import { Row, Col, Input, Button, Form, Image, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import classes from '../../screens/login/Login.module.css';
import companyimg from '../../assests/Screenshot_2024-09-23_214405-removebg-preview.png';
import leftsideimg from '../../assests/Screenshot_2024-09-23_215030-removebg-preview.png';
import { logingateway } from '../../axios/Services';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate=useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [datalist, setDatalist] = useState([]);
  var sha1 = require("sha1");

  // Validation schema using Yup
  const validationSchema = Yup.object({
    OrganizationCode: Yup.string()
      .required('Organization Code is required'),
    userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  // Using Formik for form handling
  const formik = useFormik({
    initialValues: {
      OrganizationCode: '',
      userName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handlelogin(values);
    },
  });

  // Handle login submission
  const handlelogin = (values:any) => {
    let formdata = new FormData();
    formdata.append('userName', values.userName);
    formdata.append('password', values.password);
    formdata.append('device_type', '3');
    formdata.append('authcode', sha1('A0322A@B&H@R!!akLLo012VSzXycAA1' + values.userName));

    logingateway(formdata)
      .then((res) => {
        localStorage.setItem("token",res.data.token)
        setDatalist(res.data.token);
        console.log(res.data.token);
       
        if(res.data.status){
          message.success("congrats you the have account");
        navigate('/dashboard');
        }
      })
      .catch((err) => {
        console.error('API call failed', err);
      });
  };

  return (
    <div>
      <Row className={classes.divider}>
        <Col span={12} className={classes.loginrightpart}>
          <Image src={leftsideimg} height={350} />
        </Col>

        <Col span={12} className={classes.formSection}>
          <div className={classes.formContainer}>
            <Image src={companyimg} height={50} />
            <h2 className={classes.title} style={{ color: 'rgb(107, 181, 176)' }}>Login</h2>

            {/* Use Formik's handleSubmit */}
            <Form onFinish={formik.handleSubmit}>
              <Col>
                <label className={classes.label}>
                  <span>Organization Code <span style={{ color: 'red' }}>*</span></span>
                </label>
              </Col>
              <Col>
                <Input
                  className={classes.inputFullWidth}
                  name="OrganizationCode"
                  type="text"
                  value={formik.values.OrganizationCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.OrganizationCode && formik.errors.OrganizationCode ? (
                  <div className={classes.error}>{formik.errors.OrganizationCode}</div>
                ) : null}
              </Col>

              <Col>
                <label className={classes.label}>
                  <span>User name <span style={{ color: 'red' }}>*</span></span>
                </label>
              </Col>
              <Col>
                <Input
                  className={classes.inputFullWidth}
                  prefix={<UserOutlined />}
                  name="userName"
                  type="text"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div className={classes.error}>{formik.errors.userName}</div>
                ) : null}
              </Col>

              <Col>
                <label className={classes.label}>
                  <span>Password <span style={{ color: 'red' }}>*</span></span>
                </label>
              </Col>
              <Col>
                <Input.Password
                  className={classes.inputFullWidth}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  prefix={<LockOutlined />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  visibilityToggle={passwordVisible}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={classes.error}>{formik.errors.password}</div>
                ) : null}
              </Col>

              <div className={classes.extraOptions}>
                <a href="#" className={classes.forgotPassword}>
                  Forgot Password?
                </a>
              </div>

              <Button className={classes.loginButton} htmlType="submit">
                Login
              </Button>

              <div className={classes.signup}>
                Don't have an account? <a href="#">Signup</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
