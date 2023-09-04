import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import demoSlice, { DemoSliceAction, increment } from 'src/reducer/demoSlice'
import ACTION_CONSTANT from 'src/reducer/actionConstants'
import { DemoAnotherSliceAction, incrementAsync } from 'src/reducer/demoAnotherSlice'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.demoAnotherSlice.isAuthenticated);
  const dispatch = useDispatch();
  const state = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("isAuthenticated changed! " + isAuthenticated)
    if (isAuthenticated == true) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleLogin = async () => {
    // dispatch()
    console.log("a");

    await axios.post("http://localhost:3000/admin/login", {
      AdminName: username,
      Password: password
    }).then((res) => {
    
      
      console.log(res.data);
      let t = ACTION_CONSTANT.ACTION_LOGIN_SUCCESS;
      console.log(t);
      dispatch(DemoAnotherSliceAction[t](res.data));
    })
    .catch(e => {
      console.log(e)
    })
    // console.log(DemoSliceAction)
    // dispatch(DemoSliceAction[ACTION_CONSTANT.ACTION_INCREMENT]())
    // dispatch(DemoSliceAction.setIsAuthenticated(true))
    // dispatch(DemoSliceAction.addItemToArray(4))
    // dispatch(incrementAsync(3))
    // navigate('/')

    // dispatch(DemoSliceAction.increment())

    /*
       login().then(() => {
      navigate(state?.path || "/dashboard");
    });
    */

  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <p className="text-medium-emphasis">{isAuthenticated ? isAuthenticated : "abcd"}</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" 
                      onChange={(text) => setUsername(text.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        onChange={(text) => setPassword(text.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => {handleLogin()}}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
