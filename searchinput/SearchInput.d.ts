import { InputTextProps } from 'primevue/inputtext';
import { ButtonProps } from 'primevue/button';
import { ClassComponent, GlobalComponentConstructor } from 'primevue/ts-helpers';

export interface SearchInputProps extends InputTextProps {
    /**
     * Props of the PrimeVue button component.
     */
    buttonProps?: ButtonProps;
}

export interface SearchInputSlots { }

export declare type SearchInputEmits = {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string | undefined) => void;
}

declare class SearchInput extends ClassComponent<SearchInputProps, SearchInputSlots, SearchInputEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SearchInput: GlobalComponentConstructor<SearchInput>
    }
}

export default SearchInput;
