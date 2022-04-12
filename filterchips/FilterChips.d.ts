import { ClassComponent, GlobalComponentConstructor } from 'primevue/ts-helpers';

export interface FilterChipsProps {
    /**
     * Value of the component.
     */
    value?: any;
}

export interface FilterChipsSlots { }

export declare type FilterChipsEmits = { }

declare class FilterChips extends ClassComponent<FilterChipsProps, FilterChipsSlots, FilterChipsEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FilterChips: GlobalComponentConstructor<FilterChips>
    }
}

export default FilterChips;
