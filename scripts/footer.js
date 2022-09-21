const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      height: 90px;
      background-color: #D0DAEE;
    }

    ul {
      margin: 0;
      padding: 0;
      text-align: center;
      padding-top: 10px;
    }
    
    ul li {
      list-style: none;
      display: inline;
      align-items: center;
      font-size: large;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }

  </style>
  <footer>
    <ul>
      <li><a href="/Users/yayahmed/WebDev/index.html">Home</a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);