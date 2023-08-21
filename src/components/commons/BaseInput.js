import React, { useState } from 'react'

import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
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


const BaseInput = (props) => {
    const [content, setContent] = useState("");


    return (
        <>
            <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">{props.title}</CFormLabel>
                <CFormInput type="input" placeholder="Tên loại hàng"
                    value={content}
                    onChange={(text) => {
                       setContent(text.target.value);
                       props.onChange(text.target.value);
                    }}
                >
                </CFormInput>
            </div>
        </>
    )
}

export default BaseInput
