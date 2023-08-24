import React, { useEffect, useState } from 'react'

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
import { useLocation } from 'react-router-dom'
import BaseInput from 'src/components/commons/BaseInput'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from 'src/reducer/demoSlice'


const ProductCategoriesDetail = (props) => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    const {state} = useLocation();

    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const count = useSelector(state => state.value);
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    const handleSubmit = (event) => {
        console.log("tet")
        console.log(categoryName);
        console.log(categoryDescription);
        event.preventDefault();
    }

    return (
        <CRow>
            <CCol xs>
                <CCard className="mb-4">
                    <CCardHeader>Supplier list</CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            <BaseInput name="categoryName" title="abcd!!!" onChange={(text) => {setCategoryName(text)}} />
                            <BaseInput name="categoryDescription" title="efgh!!!" onChange={(text) => {setCategoryDescription(text)}}/>
                            <CButton type="submit">Submit!</CButton>  
                        </CForm>
                        <CButton onClick={() => dispatch(increment())}>{count}</CButton>

                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ProductCategoriesDetail
