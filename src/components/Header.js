import React, {Fragment} from 'react'
import Logo from '../assets/images/Traveo_Logo.png'

const Header = props => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-sm ">
                <a className="navbar-brand" href="#">{Logo}</a>
            </nav>
        </Fragment>
    )
}

export default Header
