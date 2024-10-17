import React from 'react'
import "./Sidebar.css"
import { sidebar } from '../../static/sidebar'
import { FaChevronRight } from "react-icons/fa"

function Sidebar({ show, setShow }) {
    return (
        <>
            {
                show ? <div onClick={() => setShow(false)} className="sidebar__shadow"></div>
                    : <></>
            }

            <div className={`sidebar ${show ? "show" : ""}`}>
                <h1>Katalog</h1>
                <ul>
                    {
                        sidebar?.map((item, id) =>
                            <li key={id}>
                                <span>{item.logo}</span>
                                <p>{item.text}</p>
                                <FaChevronRight className='svg' />
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar