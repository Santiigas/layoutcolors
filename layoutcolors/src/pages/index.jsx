import "./index.css";
import ColorPicker from "./main-screen/components/ColorPicker/colorpicker";

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
                    <ColorPicker/>
                </div>

            </div>

            <div className="smallBrowseruser">
                <div className="layoutArrow">
                </div>
                <div className="browserUser">
                    <div className="browserHeader"></div>
                    <div className="browserBody"></div>
                </div>
                <div className="layoutArrow">
                </div>
            </div>
        </div>
    )
}

export default Home