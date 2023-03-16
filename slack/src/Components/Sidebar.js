import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarHead1>
                <h2>SHAMUKE</h2>
                <h3>
                  <FiberManualRecordIcon />
                    Soares Dolapo
                </h3>
            </SidebarHead1>
        </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
`

const SidebarHeader = styled.div`

`
const SidebarHead1 = styled.div`

`

