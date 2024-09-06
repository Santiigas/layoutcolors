// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import ColorPicker from "./main-screen/components/ColorPicker/colorpicker";
import BrowserHeader from "./main-screen/components/BrowserHeader/browserheader";
import BrowserBody from "./main-screen/components/BrowserBody/browserbody";
import { ColorProvider } from './main-screen/components/ColorPicker/colorcontext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./index.css";
import logo from "../images/LogoLayoutCollors.png"

const Home = () => {
    const browserBodyRef = useRef();

    const downloadPDF = async () => {
        const canvas = await html2canvas(browserBodyRef.current, {
        scale: 2, // Aumenta a resolução
        useCORS: true, // Caso tenha imagens externas
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape', 'px', [canvas.width, canvas.height]);
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('layout.pdf');
    };
        
    return (
        <div className="layoutColors">
            <div className='header_layout_geral'>
                <img className='logo_layout_colors' src={logo} alt="" />
                <div className="headerlayoutColors">
                    <h1 id="mainTitle_layoutColors">LayoutColors</h1>
                    <h2 id="subtitle_layoutColors">Construa seu loyout</h2>
                </div>
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
            <div className="smallBrowseruser" ref={browserBodyRef}>
                <div className="browserUser">
                    <BrowserHeader/>
                    <BrowserBody/>
                </div>
                <h1 className='credits'>Modelo de site e cores desenvolvido
                    layoutColors
                </h1>
            </div>
            <div className="download">
                <button className="downloadBrowser" onClick={downloadPDF} >DOWNLOAD</button>
            </div>
        </div>
    )
}

export default Home