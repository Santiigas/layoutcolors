import React from "react"
import "./browserheader.css"

const BrowserHeader = () => {
    return(
        <div className="browserHeader">
            <div className="colors">
                <div className="primary_color"></div>
                <div className="secondary_color"></div>
                <div className="highlight_color"></div>
            </div>
            <input id="nameSiteUser" type="text" placeholder="www.layoutcolors.com.br" />
        </div>
    )
}

export default BrowserHeader;