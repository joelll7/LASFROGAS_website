class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <body class="website-heading" id="website-heading">
        <!-- Logo -->
        <div class="logo-div"> 
            <a href="../index.html">
                <img class="logo" src="../images/logo.jpg">
            </a>
        </div>

        <!-- Navigation Bar -->
        <nav class="Navbar">
            <div class="page-links" id="nav-links">
                <a href="../pages/bio.html">Biography</a>
                <a href="../pages/works.html">Works</a>
                <a href="../pages/exhibits.html">Exhibitions</a>
                <a href="https://lasfrogaschi.bigcartel.com/" target="_blank" rel="noopener noreferrer">Shop</a>
                <a href="../pages/contact.html">Contact</a>
            </div>
        </nav>

        <!-- Mobile/small-screen menu (replaces navigation bar when screen is small)-->
        <nav class="hamburger-menu">
            <a href="javascript:void(0);" class="hamburger-icon" onclick="toggleLinks()">
                <span class="material-symbols-outlined">menu</span>
            </a>
        </nav>

        <div class="off-screen-menu">
            <a href="javascript:void(0);" class = "x" onclick="toggleLinks()">
                <span class="x">X</span>
            </a>
            
            <ul>
                <hr style="color: white; display: block; width: 95%; margin-top:0.6em; height: 3px; background-color: white;">
                <li><a href="../pages/bio.html">Biography</a></li>
                <li><a href="../pages/works.html">Works</a></li>
                <li><a href="https://lasfrogaschi.bigcartel.com/" target="_blank" rel="noopener noreferrer">Shop</a></li>
                <li><a href="../pages/exhibits.html">Exhibitions</a></li>
                <li><a href="../pages/contact.html">Contact</a></li>
            </ul>
        </div>
    </body>`
        const hamMenu = document.querySelector('.hamburger-menu');
        const offScreenMenu = document.querySelector('.off-screen-menu');
        hamMenu.addEventListener('click', () => {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        })
        offScreenMenu.addEventListener('click', () => {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        })
    ;
  }


}

customElements.define('header-component', Header);