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
    CForm,
    CFormInput,
    CFormLabel,
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


const SupplierDetail = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)


    const supplier = [
        {
            "id": 1,
            "supplierName": "Thien An",
            "supplierLocation": "dkmf St" 
        },
        {
            "id": 2,
            "supplierName": "Thien An",
            "supplierLocation": "dkmf St" 
        },
        {
            "id": 3,
            "supplierName": "Thien An",
            "supplierLocation": "dkmf St" 
        }
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
                        <CForm onSubmit={() => console.log("Test")}>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Category name</CFormLabel>
                                <CFormInput type="input" id="categoryName" placeholder="Tên loại hàng" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Description</CFormLabel>
                                <CFormInput type="input" id="categoryDescription" placeholder="Đây là mẫu mô tả..." />
                            </div>
                            {/* <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                                <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                            </div> */}
                            <CButton color="primary" type="submit">
                                Submit form
                            </CButton>
                        </CForm>

                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default SupplierDetail
