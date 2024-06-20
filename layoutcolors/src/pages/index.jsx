import "./index.css";
import ColorPicker from "./main-screen/components/ColorPicker/colorpicker";
import BrowserHeader from "./main-screen/components/BrowserHeader/browserheader";
import BrowserBody from "./main-screen/components/BrowserBody/browserbody";

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
                    <ColorPicker title="Cor principal"/>
                    <ColorPicker title="Cor secundaria"/>
                    <ColorPicker title="Cor terciária"/>
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