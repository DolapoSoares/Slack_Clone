import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'

const SidebarLists = ({ Icon,title, addChannelOption }) => {

    const addChannel = () => {
        const channelName = prompt("Please enter a Channel name here")

        if(channelName){
            db.collection("rooms").add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {}
  return (

     <SidebarListContainer 
    onClick={addChannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon fontsize ="small"  style={{padding:10}} />}
        {Icon ? (
            <h3>{ title }</h3>
        ) : (
            <SidebarListChannel>
                <span>#</span>{title}
            </SidebarListChannel>
        )}
    </SidebarListContainer>
  )
}

export default SidebarLists

const SidebarListContainer = styled.div`
    display: flex;
    font-size: 13px;
    align-items: center;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {

    }
`

const SidebarListChannel = styled.div`

`