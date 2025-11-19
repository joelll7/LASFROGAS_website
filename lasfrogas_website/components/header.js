class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <body class="website-heading" id="website-heading">
        <!-- Logo -->
        <div class="logo-div"> 
            <a href="/index.html">
                <img class="logo" src="/images/icons/logo.jpg">
            </a>
        </div>

        <!-- Navigation Bar -->
        <nav class="Navbar">
            <div class="page-links" id="nav-links">
                <a href="/pages/bio.html">Biography</a>
                <a href="/pages/works.html">Works</a>
                <a href="/pages/exhibits.html">Exhibitions</a>
                <a href="https://lasfrogaschi.bigcartel.com/" target="_blank" rel="noopener noreferrer">Shop</a>
                <a href="/pages/contact.html">Contact</a>
            </div>
        </nav>

        <!-- Mobile/small-screen menu (replaces navigation bar when screen is small)-->
        <nav class="hamburger-menu">
            <a href="javascript:void(0);" class="hamburger-icon" onclick="toggleLinks()">
                <span class="material-symbols-outlined">menu</span>
            </a>
        </nav>

        <div class="off-screen-menu">
            <div class = mini-window-bar>
                <img src=/images/arts/headphones.png style="width:2rem; margin-right:5px; margin-top:10px;"></img>
                <span style="font-family: "Lekton"; font-weight: 300; font-size: 5px; margin-top:10px;">LASFROGAS</span>
                <a href="javascript:void(0);" class = "x" onclick="toggleLinks()">
                    <span class="x" style="margin-left:80px;">X</span>
                </a>
            </div>
            <div class = "mini-window>
                <ul class="list">
                    <hr style="color: white; width: 316px; margin-top:0.6em; height: 1.5px; background-color:red; border-color:red">
                    <li><a href="/pages/bio.html">Biography</a></li>
                    <li><a href="/pages/works.html">Works</a></li>
                    <li><a href="/pages/exhibits.html">Exhibitions</a></li>
                    <li><a href="https://lasfrogaschi.bigcartel.com/" target="_blank" rel="noopener noreferrer">Shop</a></li>
                    <li><a href="/pages/contact.html">Contact</a></li>
                </ul>
            </div>
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