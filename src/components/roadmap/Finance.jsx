import React from 'react'
import Mermaid from 'react-mermaid2'

export const Finance = () => {
    const finance = `
        graph LR
            classDef green fill:#7fb366,stroke:#000,stroke-width:2px,color:#fff

            %%Finance%%
            cf(Corporate Finance) --> is(Investment Stratagies) --> defi(Decentralized Finance)
  `;

  return (
    <div>
      <h1 className="roadmap-heading">Finance</h1>
      <Mermaid chart={finance} />
    </div>
  );
}
