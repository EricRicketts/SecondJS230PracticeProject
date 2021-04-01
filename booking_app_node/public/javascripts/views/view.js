let View = {
  compileTemplates: function() {
    let allTemplates = Array.from(this.document.querySelectorAll('[data-group=template]'));
    allTemplates.forEach(template => {
      let propertyName = template.id.replace(this.re, this.replacer);
      Object.defineProperty(this, propertyName, {
        value: Handlebars.compile(template.innerHTML),
        writable: true,
        configurable: true,
        enumerable: true
      });
    });
  },
  registerPartials: function() {
    let allPartials = Array.from(this.document.querySelectorAll('[data-group=partial]'));
    allPartials.forEach(partial => {
      let partialName = partial.id.replace(this.re, this.replacer);
      Handlebars.registerPartial(partialName, partial.innerHTML);
    });
  },
  removeAllChildren: function(node) {
    while (node.firstChild) { node.removeChild(node.lastChild); }
  },
  replacer: function(match) {
    return match[1].toUpperCase();
  },
  init: function(document) {
    this.re = /_[a-z]/g
    this.document = document;
    this.registerPartials();
    this.compileTemplates();
    return this;
  }
}

export { View };