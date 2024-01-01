import React from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

export default function Sidebar() {
    function toggle() {
        console.log('toggled')
    }
    return (
        <div className="sidebar">
            <header>
                <h2>bba_Co-operative</h2>
                <FaBars id="menu-bar-show" onClick={toggle} />
            </header>
            <nav className="">
                <Link to="/">
                    Dashboard
                </Link>
            </nav>
        </div>
    )
}