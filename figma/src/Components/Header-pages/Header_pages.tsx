import React from "react"
import './Header_pages.css'
type Component = {
    title:string;
    children: React.ReactNode;

}
const Header_pages: React.FC<Component> = ({ title, children }) => {
    return (
        <div className="header-pages">
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    )
}

export default Header_pages
