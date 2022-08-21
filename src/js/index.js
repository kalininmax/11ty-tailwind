new (function () {
  this.modules = {
    SomeWidget: require('../components/some-component/some-component'),
    Dropdown: require('./modules/Dropdown').default,
  };
  document.addEventListener('DOMContentLoaded', () => {
    document
      .querySelectorAll('[data-dropdown]')
      .forEach(dropdown => new this.modules.Dropdown(dropdown));
  });
})();
