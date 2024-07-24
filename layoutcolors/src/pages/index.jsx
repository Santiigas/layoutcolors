// eslint-disable-next-line no-unused-vars
import React from 'react';
import ColorPicker from "./main-screen/components/ColorPicker/colorpicker";
import BrowserHeader from "./main-screen/components/BrowserHeader/browserheader";
import BrowserBody from "./main-screen/components/BrowserBody/browserbody";
import { ColorProvider } from './main-screen/components/ColorPicker/colorcontext';
import "./index.css";

function Home(){
    
    return (
        <div className="layoutColors">
            <div className="headerlayoutColors">
                <h1 id="mainTitle_layoutColors">LayoutColors</h1>
                <h2 id="subtitle_layoutColors">Construa seu loyout</h2>
            </div>
            <div className="colorSettingUser">
                <h1 id="subtitle_colorSettingUser">Selecione as cores:</h1>
                <div className="chosenColors">
                <ColorProvider>
                    <ColorPicker title="Cor principal" colorKey="color1"/>
                    <ColorPicker title="Cor secundaria" colorKey="color2"/>
                    <ColorPicker title="Cor terciária" colorKey="color3" />
                </ColorProvider>
                </div>
            </div>
            <div className="smallBrowseruser">
                <div className="layoutArrow"></div>
                <div className="browserUser">
                    <BrowserHeader/>
                    <BrowserBody/>
                </div>
                <div className="layoutArrow"></div>
            </div>
            <div className="download">
                <button className="downloadBrowser">DOWNLOAD</button>
            </div>
        </div>
    )
}

export default Home