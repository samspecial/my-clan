import React, { useState } from 'react';
import { Nav } from './style';
import { Link } from 'react-router-dom'

const Navigation = () => {

    const [mobile, toggleMenu] = useState(true)
    return (
        <Nav>
            <a className="logo" href="/">{"Clan"}</a>
            <div className="harmburger" onClick={() => toggleMenu(!mobile)}>
                {mobile ? (<div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>) : (<div>
                    <div className="cross"></div>
                    <div className="cross"></div>
                </div>)
                }
            </div>

            <ul className={mobile ? "nav-links" : "nav-links open"}>

                <li>
                    <Link to='/dashboard'>{'Cooperative'}</Link>
                </li>
                <li>
                    <Link to='/dashboard/thrift'>{'Thrift'}</Link>
                </li>
                <li>
                    <Link to='/dashboard/support'>{'Support'}</Link>
                </li>
            </ul>
        </Nav>
    )
}


export default Navigation;