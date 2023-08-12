import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilXCircle,
  cilUser,
  cilUserFemale,
  cilChevronCircleRightAlt,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { useNavigate } from 'react-router-dom';


const ProductCategoriesManagement = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const navigate = useNavigate();

  const employee = [
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: "Ngô Văn Trung",
      role: "Admin"
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: "Nguyễn Thiên An",
      role: "User"
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: "Phạm Huy Cường Thịnh",
      role: "Super Admin"
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: "Một thằng nào đó tên dài vcl mà chưa kịp căn",
      role: "Admin"
    },

  ]

  const product_category_example = [
    {
        "name": "Loại hàng 1",
        "description": "Đây là mô tả mặt hàng 1"
    },
    {
        "name": "Loại hàng 2",
        "description": "Đây là mô tả mặt hàng 2"
    },
    {
        "name": "Loại hàng 3",
        "description": "Đây là mô tả mặt hàng 3"
    },
    {
        "name": "Loại hàng 4 121 124 543 54 3543 55543 543 35",
        "description": "Đây là mô tả mặt hàng 4, nó rất dài nên chỗ này cần phải có dấu ba chấm, nó cần dài a efwef wf weg wg wg re get h eth rthhwhhw ......"
    },
]




  return (
    <CRow>
    <CCol xs>
      <CCard className="mb-4">
        <CCardHeader>Supplier list</CCardHeader>
        <CCardBody>
          <CRow className="justify-content-end mb-1">
            <CCol xs={6} className="" >
              <CButton color="success" className="float-end text-white" >
                <CIcon icon={cilPeople} className="me-2" style={{ '--ci-primary-color': 'white' }} />
                Add a supplier
              </CButton>
            </CCol>
          </CRow>

          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                {/* <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell> */}
                <CTableHeaderCell className='text-center'>STT</CTableHeaderCell>
                {/* <CTableHeaderCell className="text-center">Country</CTableHeaderCell> */}
                <CTableHeaderCell className='text-center'>Name</CTableHeaderCell>
                {/* <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell> */}
                <CTableHeaderCell className='text-center'>Description</CTableHeaderCell>
                <CTableHeaderCell className='text-center'>Activity</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {product_category_example.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  {/* <CTableDataCell className="text-center">
                    <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                  </CTableDataCell> */}
                  <CTableDataCell className="textCenter">
                    {/* <div>{item.user.name}</div> */}
                    <div>{index + 1}</div>
                    {/* <div className="small text-medium-emphasis"> */}
                    {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '} */}
                    {/* {item.user.registered} */}
                    {/* </div> */}
                  </CTableDataCell>
                  <CTableDataCell className="textCenter">
                    <div>{item.name}</div>
                  </CTableDataCell>
                  <CTableDataCell className="textCenter">
                    <div>{item.description}</div>
                  </CTableDataCell>
                  
                  {/* <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                  </CTableDataCell> */}
                  {/* <CTableDataCell>
                    <div className="clearfix">
                      <div className="float-start">
                        <strong>{item.usage.value}%</strong>
                      </div>
                      <div className="float-end">
                        <small className="text-medium-emphasis">{item.usage.period}</small>
                      </div>
                    </div>
                    <CProgress thin color={item.usage.color} value={item.usage.value} />
                  </CTableDataCell> */}
                  {/* <CTableDataCell className='text-center'>
                    {
                      <text className={` ${item.role === 'User' ? "text-success" : (item.role === 'Admin' ? "text-danger" : "text-info")}`}>
                        {item.role}
                      </text>
                    }
                  </CTableDataCell> */}
                  <CTableDataCell className='text-center' >
                    <CButtonGroup role="group">
                    <CButton color="danger" className="text-white" >
                      <CIcon icon={cilXCircle} className="me-1" style={{ '--ci-primary-color': 'white' }} />
                      Pay acc
                    </CButton>
                    <CButton color="primary"  onClick={() => {navigate('/pages/product_categories_detail')}}>
                        Register Now!
                      </CButton>
                    
                      
                    
                    <CButton color="success" className="text-white" >
                      <CIcon icon={cilChevronCircleRightAlt} className="me-1" style={{ '--ci-primary-color': 'white' }} />
                      Xem chi tiết
                    </CButton>
                      {/* <CButton color="warning">Middle</CButton> */}
                      {/* <CButton color="success">Right</CButton> */}
                    </CButtonGroup>
                  </CTableDataCell>
                  {/* <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.payment.icon} />
                  </CTableDataCell> */}
                  {/* <CTableDataCell>
                    <div className="small text-medium-emphasis">Last login</div>
                    <strong>{item.activity}</strong>
                  </CTableDataCell> */}
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default ProductCategoriesManagement
