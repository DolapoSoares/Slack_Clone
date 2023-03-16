import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecordSharp'
import CreateIcon from '@mui/icons-material/Create'

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
            <CreateIcon />
        </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  max-width: 270px;
  margin-top: 60px;
`

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  border-top: 1px solid #49274b;
  padding: 13px;


  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`
const SidebarHead1 = styled.div`
    flex: 1;

    >  h2 {
      font-size: 15px;
      font-weight: 900;
      margin-bottom: 5px;
    }

    >  h3 {
      display: flex;
      font-size: 13px;
      font-weight: 400;
      align-items: center;
    }
`

