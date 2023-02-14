 import React from 'react'
 import styled from "styled-components"
 import { Avatar } from "@mui/material"
 import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
 import SearchIcon from "@mui/icons-material/Search"
 
 function Header() {
   return (
     <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeadAvatar />
        <AccessTimeSharpIcon />
      </HeaderLeft>

      {/* Header Center */}
      <SearchHearder>
        <SearchIcon />
        <input placeholder='Search slack clone'/>
      </SearchHearder>
     </HeaderContainer>
   )
 }
 
 export default Header;

const SearchHearder = styled.div`
    color : white;
`

 const HeaderContainer = styled.div`
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
    color: white;

    > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 30px;
    }
 `

 const HeadAvatar = styled(Avatar)`

 `;