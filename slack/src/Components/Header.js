 import React from 'react'
 import styled from "styled-components"
 import { Avatar } from "@mui/material"
 import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
 import SearchIcon from "@mui/icons-material/Search"
 import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
 
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

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
     </HeaderContainer>
   )
 }
 
 export default Header;

const SearchHearder = styled.div`
    color : white;
    flex: 0.4;
    opacity: 1;
    border-radius: 5px;
    text-align: center;
    display: flex;
    padding: 0 50px;
    background-color: #421f44;
    color: gray;
    border: 1px gray solid; 

    > input {
      background-color: transparent ;
      border: none;
      text-align: center;
      min-width: 30vw;
      outline: none;
      color: white;
    }
`

 const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    padding: 10px 0;
    justify-content: space-between;
    background-color: var(--slack-color);
    color: white;

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

 const HeaderRight = styled.div`
    flex:0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 25px;
    }
 `

 const HeadAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
 `;