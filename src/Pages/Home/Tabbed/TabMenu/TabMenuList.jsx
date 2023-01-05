import React from 'react';
import styled from 'styled-components';

import TabMenuItem from './TabMenuItem.jsx';

const TabMenuList = ({curTab, curTabUpdate, tabbedData}) => {
    return (
        <TabMenuListStyled className='TabMenuList'>
            {
                tabbedData.map((item) => {
                    return <TabMenuItem key={ item.id } item={ item } curTab={ curTab } curTabUpdate={ curTabUpdate } />
                })
            }
        </TabMenuListStyled>
    );
}

export default TabMenuList;

const TabMenuListStyled = styled.div`
    display: flex;
`;