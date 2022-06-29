import React from 'react';
import HeaderList from './headerList/HeaderList';
import { HeaderContainer } from './HeaderStyled';

const Header = () => {
    return (
        <HeaderContainer>
             <HeaderList/>
        </HeaderContainer>
    );
};

export default Header;