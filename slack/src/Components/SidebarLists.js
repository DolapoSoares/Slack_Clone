import React from 'react'
import styled from 'styled-components'

const SidebarLists = ({ Icon,title }) => {
  return (
    <SidebarListContainer>
        {Icon && <Icon fontZize ="small"  style={{padding:10}} />}
    </SidebarListContainer>
  )
}

export default SidebarLists

const SidebarListContainer = styled.div`

`