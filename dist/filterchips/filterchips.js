this.primevueExtensions = this.primevueExtensions || {};
this.primevueExtensions.filterchips = (function (Chip, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Chip__default = /*#__PURE__*/_interopDefaultLegacy(Chip);

    var script = {
        name: 'FilterChips',
        props: {
            value: null
        },
        components: {
            'FChip': Chip__default["default"]
        }
    };

    const _hoisted_1 = { class: "px-filterchips" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_FChip = vue.resolveComponent("FChip");

      return (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.value, (val, i) => {
          return (vue.openBlock(), vue.createBlock(_component_FChip, {
            key: i,
            label: val.label,
            removable: val.removable
          }, null, 8, ["label", "removable"]))
        }), 128))
      ]))
    }

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = "\n.px-filterchips {\n    display: inline-flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: .25rem;\n}\n.px-filterchips .p-chip {\n    font-size: .875rem;\n    line-height: 1;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.chip, Vue);
