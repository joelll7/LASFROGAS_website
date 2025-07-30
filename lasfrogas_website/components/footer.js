class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<hr style="width:0px"><div><hr style="width:95%"></div>
    <div class="footer" id="footer">
        <h6> gero gero </h6>
        <img class="kunaki" src="../images/kunaki.png">
        <h6> printmaker * pixel artist</h6>  
    </div>`;
  }
}

customElements.define('footer-componenet', Footer)