import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../../routes/mainRoutes';

const HeaderList = () => {
    return (
        <div>
            <nav>
                <ul>
                    {mainRoutes.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderList;