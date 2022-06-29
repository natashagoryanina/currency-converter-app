import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../../routes/mainRoutes';
import { HeaderListContainer } from './HeaderListStyled';

const HeaderList = () => {
    return (
        <HeaderListContainer>
            <nav className='header-nav'>
                <ul className='header-list'>
                    {mainRoutes.map((item) => (
                        <li className='header-list_item' key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => (isActive ? "header-list_link-active" : "header-list_link")}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </HeaderListContainer>
    );
};

export default HeaderList;