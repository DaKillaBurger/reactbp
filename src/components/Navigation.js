import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {

    const nav = [
        {
            id: 1,
            label: "home",
            path: "/"
        },
        {
            id: 2,
            label: "about",
            path: "/about"
        },
        {
            id: 3,
            label: "other",
            path: "/other"
        }
    ]

  return (
    <div>
        {nav.map((navObj) => {
            return (
                <Link to={navObj.path} key={navObj.id}>
                    {navObj.label}
                </Link>
            )
        })}
    </div>
  )
}

export default Navigation