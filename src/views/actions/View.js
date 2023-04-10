import React from 'react'
import { useState } from 'react'
// import CIcon from '@coreui/icons-react'
// import { ArrowRight } from 'react-bootstrap-icons'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

function Delete() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>View</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>View</CModalTitle>
          {/* <ArrowRight /> */}
        </CModalHeader>
        <CModalBody>This is view</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Delete
