import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <a href="https://www.youtube.com/watch?v=6n3pFFPSlW4"><strong>Egan</strong> <span>Schedules</span></a>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
