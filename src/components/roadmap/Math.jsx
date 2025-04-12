import React from 'react'
import Mermaid from 'react-mermaid2'

export const Math = () => {
    const math = `
        graph TB
            classDef green fill:#7fb366,stroke:#000,stroke-width:2px,color:#fff

            %%Maths%%
            pa(Pre Algebra) --> ab(Algebra Basics) --> Algebra1 --> Algebra2 --> sg(High School Geometry) --> Trigonometry
            ss(High School Statistics) --> ps(Probability and Statistics)
            Precalculas --> dc(Differential Calculus) --> ic(Integral Calculus) --> Calculus1 --> Calculus2 --> mc(Multivariable Calculus) --> de(Differential Equations) --> la(Linear Algebra)
    `;

  return (
    <div>
      <h1 className="roadmap-heading">Maths</h1>
      <div className="flex gap-[13rem] roadmap-div">
        <Mermaid chart={math} />
        <div>
          <h1 className="link-title">Links:</h1>
          <ul>
            <li>
              <a
                href="http://khanacademy.org/math"
                target="_blank"
                className="links"
              >
                Khan Acadmey
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@FacultyofKhan"
                target="_blank"
                className="links"
              >
                Advanced Calculus
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Eigensteve"
                target="_blank"
                className="links"
              >
                Engineering Math applied in real life
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@mitocw"
                target="_blank"
                className="links"
              >
                MIT course on youTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
