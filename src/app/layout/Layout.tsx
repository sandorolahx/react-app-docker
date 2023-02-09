import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { useInjection } from 'inversify-react';
import IConfig from "../di/interfaces/IConfig";
import TYPES from "../di/types";

const Layout = () => {
    const config = useInjection<IConfig>(TYPES.Config);

    return (
        <>
            Site name: {config.SiteName}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
