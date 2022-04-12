'use strict';

var InputText = require('primevue/inputtext');
var Button = require('primevue/button');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

var script = {
    name: 'SearchInput',
    inheritAttrs: false,
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        buttonProps: null
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
    components: {
        'SInputText': InputText__default["default"],
        'SButton': Button__default["default"]
    }
};

const _hoisted_1 = { class: "px-searchinput" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SInputText = vue.resolveComponent("SInputText");
  const _component_SButton = vue.resolveComponent("SButton");

  return (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
    vue.createVNode(_component_SInputText, vue.mergeProps({
      type: "text",
      value: $props.modelValue,
      onInput: $options.onInput
    }, _ctx.$attrs), null, 16, ["value", "onInput"]),
    vue.createVNode(_component_SButton, vue.mergeProps({ icon: "pi pi-search" }, $props.buttonProps), null, 16)
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

var css_248z = "\n.px-searchinput {\n    display: inline-flex;\n    flex-wrap: wrap;\n    gap: .2rem;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
