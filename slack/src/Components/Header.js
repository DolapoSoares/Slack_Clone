 import React from 'react'
 import styled from "styled-components"
 import { Avatar } from "@mui/material"
 import AccessTimeIcon from "@mui/icons-material/AccessTime"
 
 function Header() {
   return (
     <HeaderStyle>
      {/* Header Left */}
      <HeaderLeft>
        <HeadAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
     </HeaderStyle>
   )
 }
 
 export default Header;

 const HeaderStyle = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    padding: 10px 0;
    justify-content: space-between;
    background-color: var(--slack-color);

 `
 const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 25px;

    > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 30px;
    }
 `

 const HeadAvatar = styled(Avatar)`

 `;