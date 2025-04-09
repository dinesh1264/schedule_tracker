import React from 'react'
import Mermaid from 'react-mermaid2'

export const Electronics = () => {
    const electronics = `
        graph LR
            classDef green fill:#7fb366,stroke:#000,stroke-width:2px,color:#fff

            %%Electronics%%
            de(Digital Electronics) --> CA(Computer Architecture) -->ae(Analog Electronics) --> cs(Control Systems) --> cd(Circuit Design) --> mp&mc(Microprocessors and Microcontrollers)
  `;
  
  return (
    <div>
      <h1 className="roadmap-heading">Electronics</h1>
      <Mermaid chart={electronics} />
    </div>
  );
}
