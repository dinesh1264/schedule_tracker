import React from 'react'
import Mermaid from 'react-mermaid2'

export const Programming = () => {
    const programming = `
        graph TB;

            %%Programming%%
            js(JavaScript) --> b(Blockchain basics) --> eth(solidity or vyper) --> hh(Hardhat)
            js--> h&c(HTML and CSS) --> dom(DOM) --> react(React)
            h&c --> bom(BOM)
            h&c --> Canvas
            react --> n.js(next.js) --> tw(TailwindCSS) --> pr(Project)
            eth --> foundry(Foundry) --> sec(Security) --> Audit(Auditing)
            b --> solana(go or rust) --> foundry
            solana --> hh
            react --> tw --> ts(TypeScript)
            react --> rr(React routing)
            tw --> chakra(chakraUI)
            tw --> Mat(MaterialUI)
            foundry --> pr
            hh --> pr --> bc(Boot Camp)
            pr --> hack(Hackathon) --> jb(Job)
            hack --> startup(Startup)
            n.js --> UI/UX --> 3d(3D modelling) --> three.js --> gsap
            js --> dsa(Data Structures and algorithm)
    `;

  return (
    <div>
      <h1 className="roadmap-heading">Programming</h1>
      <div className="flex roadmap-div">
        <Mermaid chart={programming} />
        <div>
          <h1 className="link-title">Links:</h1>
          <ul>
            <li>
              <a
                href="https://plaid-panther-491.notion.site/Links-to-check-1aba065e3fae80789602ed1b59465a8c"
                target="_blank"
                className="links"
              >
                Basic programming & Frontend development
              </a>
            </li>
            <li>
              <a href="https://updraft.cyfrin.io/courses" target='_blank' className='links'>Cyfrin Updraft</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
