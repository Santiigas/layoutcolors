import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style';
import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';
import { color } from 'html2canvas/dist/types/css/types/color';
import logo from '../ScreenSizeWarning/logo.png'
import React, { useState, useEffect } from 'react';

const ScreenSizeWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const hasSeenWarning = sessionStorage.getItem('hasSeenWarning'); // Verifica se o usuário já viu o aviso

    const checkScreenSize = () => {
      if (window.innerWidth < 940 && !hasSeenWarning) {
        // Se for uma tela pequena e o usuário não viu o aviso ainda, exibe o aviso
        setShowWarning(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleCloseWarning = () => {
    localStorage.setItem('hasSeenWarning', 'true'); // Salva no localStorage que o aviso foi visto
    setShowWarning(false); // Esconde o aviso
  };

  if (!showWarning) return null; // Se o aviso não precisar ser mostrado, retorna null

  return (
    <div style={styles.overlay}>
      <div style={styles.warningBox}>
        <img style={styles.image} src={logo} alt="" />
        <p style={styles.warningText}>Acesse pelo modo horizontal ou ative a versão para computadores para uma melhor experiência.</p>
        <button style={styles.closebutton} onClick={handleCloseWarning}>Fechar</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escurecido
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)', // Efeito de desfoque
  },
  warningBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '26px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '280px',
    height: '330px',
  },
  warningText:{
    fontSize: '20px',
    fontWeight: '500',
    color: '#00AE9C',
  },
  closebutton:{
    backgroundColor: '#00AE9C',
    borderRadius: '10px',
    textAlign: 'center',
    width: '170px',
    height: '40px',
    fontSize: '20px',
    fontWeight: '800',
    color: '#fff',
    cursor: 'pointer'
  },
  image:{
    width: '200px',
  }

};

export default ScreenSizeWarning;
