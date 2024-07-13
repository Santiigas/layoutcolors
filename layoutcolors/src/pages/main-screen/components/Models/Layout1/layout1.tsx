import React from "react";
import { useColors } from '../../ColorPicker/colorcontext';

const Layout1 = () => {
  const { colors } = useColors();

  return (
    <div style={{ backgroundColor: colors.color1, color: colors.color2 }}>
      <h1 style={{ color: colors.color3 }}>Layout 1</h1>
      <p>Este é o primeiro layout.</p>
    </div>
  );
};

export default Layout1;