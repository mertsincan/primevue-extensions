<template>
    <span class="px-searchinput">
        <SInputText type="text" :value="modelValue" @input="onInput" v-bind="$attrs" />
        <SButton icon="pi pi-search" v-bind="buttonProps" />
    </span>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
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
        'SInputText': InputText,
        'SButton': Button
    }
}
</script>

<style>
.px-searchinput {
    display: inline-flex;
    flex-wrap: wrap;
    gap: .2rem;
}
</style>