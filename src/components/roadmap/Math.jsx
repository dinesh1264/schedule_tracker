import React from 'react'
import Mermaid from 'react-mermaid2'

export const Math = () => {
    const math = `
        graph LR
            classDef green fill:#7fb366,stroke:#000,stroke-width:2px,color:#fff

            %%Maths%%
            pa(Pre Algebra) --> ab(Algebra Basics) --> Algebra1 --> Algebra2 --> sg(High School Geometry) --> Trigonometry
            ss(High School Statistics) --> ps(Probability and Statistics)
            Precalculas --> dc(Differential Calculus) --> ic(Integral Calculus) --> Calculus1 --> Calculus2 --> mc(Multivariable Calculus) --> de(Differential Equations) --> la(Linear Algebra)
    `;

  return (
    <div>
      <h1 className="roadmap-heading">Maths</h1>
      <Mermaid chart={math} />
    </div>
  );
}
