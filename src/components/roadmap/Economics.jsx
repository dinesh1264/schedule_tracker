import React from 'react'
import Mermaid from 'react-mermaid2'

export const Economics = () => {
    const economics = `
        graph LR
            classDef green fill:#7fb366,stroke:#000,stroke-width:2px,color:#fff

            %%Economics%%
            Macroeconomics --> Microeconomics --> mt(Monetary Theory)
  `;

  return (
    <div>
      <h1 className="roadmap-heading">Economics</h1>
      <Mermaid chart={economics} />
    </div>
  );
}
