import{r as c,j as e,F as l,R as d,a as m}from"./Footer-B6SRHnYT.js";const f=()=>{const[o,r]=c.useState("IDLE"),n=async a=>{a.preventDefault(),r("SUBMITTING");const t=a.target,s=new FormData(t);try{(await fetch("https://formspree.io/f/xzdaglle",{method:"POST",body:s,headers:{Accept:"application/json"}})).ok?(r("SUCCESS"),t.reset()):r("ERROR")}catch{r("ERROR")}};return e.jsxs("div",{className:"page-wrapper",children:[e.jsx("section",{className:"contact-header-section",children:e.jsxs("div",{className:"content-container",children:[e.jsx("h1",{className:"contact-headline",children:"Every engagement starts with a conversation."}),e.jsx("p",{className:"contact-subhead",children:"Tell us what you're trying to build and we'll tell you how we can help. No pitch decks, no pressure — just a direct conversation with the principal."})]})}),e.jsx("section",{className:"contact-grid-section",children:e.jsxs("div",{className:"content-container contact-grid",children:[e.jsx("div",{className:"form-column",children:o==="SUCCESS"?e.jsxs("div",{className:"success-message",children:[e.jsx("h3",{className:"success-title",children:"Message Received"}),e.jsx("p",{className:"success-body",children:"Thank you for reaching out. Owen reviews every inquiry personally and will be in touch shortly."})]}):e.jsxs("form",{onSubmit:n,className:"contact-form",children:[e.jsxs("label",{className:"form-group",children:[e.jsxs("span",{className:"label-text",children:["Name ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",name:"name",required:!0,disabled:o==="SUBMITTING"})]}),e.jsxs("label",{className:"form-group",children:[e.jsx("span",{className:"label-text",children:"Company"}),e.jsx("input",{type:"text",name:"company",disabled:o==="SUBMITTING"})]}),e.jsxs("label",{className:"form-group",children:[e.jsxs("span",{className:"label-text",children:["Email ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"email",name:"email",required:!0,disabled:o==="SUBMITTING"})]}),e.jsxs("label",{className:"form-group",children:[e.jsxs("span",{className:"label-text",children:["How can we help? ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("textarea",{name:"message",rows:"5",required:!0,disabled:o==="SUBMITTING"})]}),e.jsx("input",{type:"hidden",name:"_subject",value:"New contact from Sycamore Creek Website"}),e.jsx("button",{type:"submit",className:"submit-button",disabled:o==="SUBMITTING",children:o==="SUBMITTING"?"Sending...":"Send"}),o==="ERROR"&&e.jsx("p",{className:"error-message",children:"Something went wrong. Please try again or email directly."})]})}),e.jsxs("div",{className:"info-column",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Email Direct"}),e.jsx("a",{href:"mailto:owen@howe.app",className:"info-link",children:"owen@howe.app"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"LinkedIn"}),e.jsx("a",{href:"https://www.linkedin.com/in/owen-howe-wm2016/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect with Owen"})]}),e.jsx("div",{className:"info-location",children:e.jsxs("p",{children:["Based in Washington, D.C.",e.jsx("br",{}),"Working with clients nationwide."]})})]})]})}),e.jsx(l,{}),e.jsx("style",{children:`
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

                /* Header */
                 .contact-header-section {
                    background-color: var(--color-bg-emphasis); /* British Racing Green */
                    padding: 6rem 0 4rem;
                    color: var(--color-text-inverse);
                }

                .contact-headline {
                    font-family: var(--font-heading);
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    max-width: 800px;
                    color: var(--color-text-inverse);
                }

                .contact-subhead {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    font-weight: 300;
                    line-height: 1.6;
                    max-width: 800px;
                    color: var(--color-text-inverse);
                    opacity: 0.9;
                }

                /* Contact Grid */
                .contact-grid-section {
                    background-color: #FFFFFF;
                    padding: 5rem 0;
                    flex-grow: 1; /* Pushes footer down */
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 3fr 2fr; /* Form is wider */
                    gap: 5rem;
                }

                /* Form Styles */
                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                }

                .label-text {
                    font-family: var(--font-body);
                    font-weight: 700;
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .form-group input, 
                .form-group textarea {
                    padding: 0.8rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-family: var(--font-body);
                    font-size: 1rem;
                    background-color: #fcfcfc;
                    transition: border-color 0.2s;
                    width: 100%;
                    box-sizing: border-box; /* Important for width */
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-bg-emphasis);
                    background-color: #fff;
                }

                .submit-button {
                    background-color: var(--color-bg-emphasis);
                    color: var(--color-text-inverse);
                    border: none;
                    padding: 1rem 2rem;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-radius: 4px;
                    cursor: pointer;
                    align-self: flex-start;
                    transition: background-color 0.2s;
                }

                .submit-button:hover {
                    background-color: #00331b;
                    box-shadow: 0 0 15px var(--color-bg-accent);
                    transform: translateY(-2px);
                }

                /* Direct Info Column */
                .info-column {
                    padding-top: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                }

                .info-label {
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.85rem;
                    color: #999;
                    margin-bottom: 0.5rem;
                }

                .info-link {
                    font-family: var(--font-heading); /* Serif for elegance */
                    font-size: 1.25rem;
                    color: var(--color-text-primary);
                    text-decoration: none;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.2s;
                    align-self: flex-start;
                }

                .info-link:hover {
                    border-bottom-color: var(--color-text-primary);
                }

                .info-location p {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    color: #666;
                    line-height: 1.5;
                }

                @media (max-width: 768px) {
                    .contact-grid {
                         grid-template-columns: 1fr;
                         gap: 3rem;
                    }

                    .contact-headline {
                        font-size: 2.5rem;
                    }
                    
                    .submit-button {
                        width: 100%;
                        text-align: center;
                    }
                }

                .success-message {
                    background-color: var(--color-bg-base);
                    padding: 2rem;
                    border-radius: 4px;
                    border-left: 4px solid var(--color-bg-emphasis);
                }

                .success-title {
                    font-family: var(--font-heading);
                    color: var(--color-bg-emphasis);
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }

                .success-body {
                    font-family: var(--font-body);
                    font-size: 1.1rem;
                    color: var(--color-text-primary);
                }

                .error-message {
                    color: #d32f2f;
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    margin-top: 1rem;
                }
            `})]})};d.createRoot(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(f,{})}));
