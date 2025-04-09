import React from 'react'
import Mermaid from "react-mermaid2";

export const Cryptoeconomics = () => {
    const cryptoeconomics = `
        graph LR
            classDef green fill:#7fb366,stroke:#000,stroke-width:2px,color:#fff

            %%Crypto Economics%%
            msi(Money supply and Inflation) --> Cryptoeconomics --> Tokenomics
  `;
  return (
    <div>
      <h1 className="roadmap-heading">Cryptoeconomics</h1>
      <Mermaid chart={cryptoeconomics} />
    </div>
  );
}
