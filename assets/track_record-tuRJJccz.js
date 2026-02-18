import{j as e,F as o,R as t,a as n}from"./Footer-vlYrpwm2.js";const c=[{label:"Compensation Negotiated",value:"$50M+"},{label:"Offer Acceptance Rate",value:"87%"},{label:"Primary Markets",value:"DC & NYC"}],i=[{role:"Senior FPGA Developer",company:"Stealth",location:"DC Metro",type:"Engineering"},{role:"Principal Research Engineer",company:"Stealth",location:"DC Metro",type:"R&D"},{role:"Senior AI Engineer",company:"Stealth",location:"NYC",type:"Engineering"},{role:"VP of Engineering",company:"Major Media Organization",location:"NYC",type:"Executive"},{role:"Director of Research",company:"DARPA Research Lab",location:"Arlington, VA",type:"Executive"},{role:"Business Development Lead",company:"High-growth Start-up",location:"NYC",type:"Sales"},{role:"Senior Reverse Engineer",company:"Cleared Research Lab",location:"DC Metro",type:"Security"},{role:"Staff Android Engineer",company:"Global Media Organization",location:"NYC",type:"Mobile"},{role:"Product Director",company:"Media Start-up",location:"Remote",type:"Product"}],l=()=>e.jsxs("div",{className:"page-wrapper",children:[e.jsx("section",{className:"tr-header-section",children:e.jsxs("div",{className:"content-container",children:[e.jsx("h1",{className:"tr-headline",children:"The Track Record"}),e.jsx("p",{className:"tr-subhead",children:"We are defined by the offers we close. From stealth research labs to global media organizations, we secure the talent that builds the future."})]})}),e.jsx("section",{className:"metrics-section",children:e.jsx("div",{className:"content-container",children:e.jsx("div",{className:"metrics-grid",children:c.map((a,r)=>e.jsxs("div",{className:"metric-item",children:[e.jsx("span",{className:"metric-value",children:a.value}),e.jsx("span",{className:"metric-label",children:a.label})]},r))})})}),e.jsx("section",{className:"placements-section",children:e.jsx("div",{className:"content-container",children:e.jsx("div",{className:"placements-grid",children:i.map((a,r)=>e.jsxs("div",{className:"placement-card",children:[e.jsx("div",{className:"card-top",children:e.jsx("span",{className:"placement-location",children:a.location})}),e.jsx("h3",{className:"placement-role",children:a.role}),e.jsx("p",{className:"placement-company",children:a.company})]},r))})})}),e.jsx("section",{className:"cta-section",children:e.jsxs("div",{className:"content-container cta-container",children:[e.jsx("h3",{className:"cta-headline",children:"Ready to add to this list?"}),e.jsx("a",{href:"contact.html",className:"cta-button",children:"INITIATE A SEARCH"})]})}),e.jsx(o,{}),e.jsx("style",{children:`
                .page-wrapper {
                    background-color: var(--color-bg-base);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .content-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                /* Header - Block 1 (Green) */
                .tr-header-section {
                    background-color: var(--color-bg-emphasis); /* British Racing Green */
                    padding: 6rem 0 4rem;
                    text-align: center;
                    color: var(--color-text-inverse);
                }

                .tr-headline {
                    font-family: var(--font-heading);
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: var(--color-text-inverse);
                }

                .tr-subhead {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    font-weight: 300;
                    line-height: 1.6;
                    max-width: 700px;
                    margin: 0 auto;
                    color: var(--color-text-inverse);
                    opacity: 0.9;
                }

                /* Metrics - Block 2 (Parchment) */
                .metrics-section {
                    background-color: var(--color-bg-base); /* Parchment */
                    color: var(--color-text-primary);
                    padding: 4rem 0;
                    border-bottom: none;
                }

                .metrics-grid {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 2rem;
                    text-align: center;
                }

                .metric-value {
                    display: block;
                    font-family: var(--font-heading);
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--color-bg-emphasis); /* Green text on parchment */
                    margin-bottom: 0.5rem;
                }

                .metric-label {
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.85rem;
                    opacity: 0.6;
                    color: var(--color-text-primary);
                }

                /* Placements - Block 3 (Teal) */
                .placements-section {
                    padding: 5rem 0;
                    background-color: var(--color-bg-accent); /* Sycamore Teal */
                }

                .placements-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .placement-card {
                    background-color: #ffffff;
                    border: 1px solid #eee;
                    padding: 2rem;
                    border-radius: 4px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 180px;
                }

                /* Modern Card Hover Effect */
                .placement-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
                    border-color: var(--color-bg-accent); /* Teal Border on hover */
                }

                .card-top {
                    margin-bottom: 1rem;
                }

                .placement-location {
                    font-family: var(--font-body);
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #999;
                    font-weight: 700;
                }

                .placement-role {
                    font-family: var(--font-heading);
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-primary);
                    line-height: 1.3;
                }

                .placement-company {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    color: #555;
                }

                /* CTA Section */
                .cta-section {
                    background-color: var(--color-bg-base);
                    padding: 6rem 0;
                    text-align: center;
                }

                .cta-headline {
                     font-family: var(--font-heading);
                     font-size: 2rem;
                     font-weight: 700;
                     margin-bottom: 2rem;
                     color: var(--color-text-primary);
                }

                .cta-button {
                    display: inline-block;
                    background-color: var(--color-bg-emphasis); /* British Racing Green */
                    color: var(--color-text-inverse);
                    padding: 1rem 2.5rem;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-radius: 4px;
                    transition: background-color 0.2s;
                    text-decoration: none;
                }

                .cta-button:hover {
                    background-color: #00331b;
                    box-shadow: 0 0 15px var(--color-bg-accent);
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .tr-headline { font-size: 2.5rem; }
                    .metrics-grid { flex-direction: column; gap: 3rem; }
                }
            `})]});t.createRoot(document.getElementById("root")).render(e.jsx(n.StrictMode,{children:e.jsx(l,{})}));
