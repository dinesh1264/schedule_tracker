import React from "react";
import Mermaid from "react-mermaid2";

export const Electronics = () => {
  const electronics = `
        graph TB
            classDef green fill:#7fb366,stroke:#000,stroke-width:2px,color:#fff

            %%Electronics%%
            ae(Analog Electronics) --> cd(Circuit Design) --> cs(Control Systems) --> CA(Computer Architecture) --> mp&mc(Microprocessors and Microcontrollers)
            de(Digital Electronics) --> cd
            `;

  return (
    <div>
      <h1 className="roadmap-heading">Electronics</h1>
      <div className="flex gap-[11rem] roadmap-div">
        <Mermaid chart={electronics} />
        <div>
          <h1 className="link-title">Links:</h1>
          <ul>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm&si=2nlAjq1VsCpyxDim"
                target="_blank"
                className="links"
              >
                Digital Electronics
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS&si=b_E1FfZEIaX594P1"
                target="_blank"
                className="links"
              >
                Analog Electronics
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo&si=wjC7i5oRl9ZaEcyy"
                target="_blank"
                className="links"
              >
                Control Systems
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&si=oa0TLxLLHXj8551-"
                target="_blank"
                className="links"
              >
                Computer Organization & Architecture
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F&si=CraDBxIW5N0SBxE3"
                target="_blank"
                className="links"
              >
                Microprocessors & Microcontrollers
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLwO8CTSLTkii9S_vhEOsyJ17RI3jjBZ95&si=sfm9DRd9Cro3DdH1"
                target="_blank"
                className="links"
              >
                Learning Circuit
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI&si=2E2rB5BJcPipvDyi"
                target="_blank"
                className="links"
              >
                Nand2Tetris Part-1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
