import templateContent from "./template.js";

const template = document.createElement("template");
template.innerHTML = templateContent;

const starValueMapper = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
};

class StarRating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.hostElement = this;

    this.appendTemplate = this.appendTemplate.bind(this);
    this.setDefaultValue = this.setDefaultValue.bind(this);
    this.attachHiddenInputOutsideShadowRoot = this.attachHiddenInputOutsideShadowRoot.bind(
      this
    );
    this.init = this.init.bind(this);

    this.init();
  }

  appendTemplate() {
    const shadowRoot = this.shadowRoot;
    shadowRoot.append(template.content.cloneNode(true));
  }

  setDefaultValue() {
    const defaultValue = this.getAttribute("value");

    if (defaultValue) {
      const radioElem = this.shadowRoot.querySelector(
        `#${starValueMapper[defaultValue]}Stars`
      );
      const radioElemZero = this.shadowRoot.querySelector(`#zeroStar`);
      radioElem.checked = true;
      radioElemZero.checked = false;
    }
  }

  attachHiddenInputOutsideShadowRoot() {
    const hostElement = this.hostElement;
    const name = this.getAttribute("name");
    const value = this.getAttribute("value");

    let hiddenInput = hostElement.querySelector("#starRatingHiddenInput");
    if (!hiddenInput) {
      hiddenInput = hostElement.ownerDocument.createElement("input");
      hiddenInput.classList.add("visually-hidden");
      hiddenInput.id = "starRatingHiddenInput";
      hiddenInput.type = "hidden";
      hostElement.append(hiddenInput);
    }

    hiddenInput.name = name;
    hiddenInput.value = value;
  }

  setValue(value) {
    const hostElement = this.hostElement;
    const hiddenInput = hostElement.querySelector("#starRatingHiddenInput");
    hiddenInput.value = value;
  }

  connectedCallback() {
    this.shadowRoot.addEventListener("change", (event) => {
      this.setValue(event.target.value);
      event.stopPropagation();
    });
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("change");
  }

  init() {
    this.appendTemplate();
    this.setDefaultValue();
    this.attachHiddenInputOutsideShadowRoot();
  }
}

window.customElements.define("star-rating", StarRating);
