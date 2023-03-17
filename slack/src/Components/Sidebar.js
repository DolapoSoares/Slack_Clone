import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecordSharp'
import CreateIcon from '@mui/icons-material/Create'
import SidebarLists from './SidebarLists'
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import PeopleALTIcon from "@mui/icons-material/PeopleAlt"
import AppsIcon from "@mui/icons-material/Apps"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

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

      <SidebarLists Icon={InsertCommentIcon} title="Threads"/>
      <SidebarLists Icon={InboxIcon} title="Mentions & Reactions"/>
      <SidebarLists Icon={DraftsIcon} title="SavedItems"/>
      <SidebarLists Icon={BookmarkBorderIcon} title="Channel Browser"/>
      <SidebarLists Icon={PeopleALTIcon} title="People & User's group"/>
      <SidebarLists Icon={AppsIcon} title="Apps"/>
      <SidebarLists Icon={FileCopyIcon} title="File Browser"/>
      <SidebarLists Icon={ExpandLessIcon} title="Show less"/>

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

    > h3 > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
`

