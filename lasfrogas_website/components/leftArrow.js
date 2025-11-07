class leftArrow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<h1 class="Navbar">
                        <a href="../works.html">
                          back
                        </a>
                      </h1>`;
  }
}

customElements.define('left-arrow-componenet', leftArrow)