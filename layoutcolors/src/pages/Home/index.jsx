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

                    <div className="color">
                        <h1 id="mainTitleColor">Cor principal</h1>
                        <div className="outsideCircle">
                            <div className="insideCircle">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="colorCode">
                            <p>#00000</p>
                        </div>
                    </div>

                    <div className="color">
                        <h1 id="mainTitleColor">Cor principal</h1>
                        <div className="outsideCircle">
                            <div className="insideCircle">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="colorCode">
                            <p>#00000</p>
                        </div>
                    </div>

                    <div className="color">
                        <h1 id="mainTitleColor">Cor principal</h1>
                        <div className="outsideCircle">
                            <div className="insideCircle">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="colorCode">
                            <p>#00000</p>
                        </div>
                    </div>

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