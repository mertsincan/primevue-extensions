<template>
    <span class="px-filterchips">
        <FChip v-for="(val, i) of value" :key="i" :label="val.label" :removable="val.removable" />
    </span>
</template>

<script>
import Chip from 'primevue/chip';

export default {
    name: 'FilterChips',
    props: {
        value: null
    },
    components: {
        'FChip': Chip
    }
}
</script>

<style>
.px-filterchips {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .25rem;
}

.px-filterchips .p-chip {
    font-size: .875rem;
    line-height: 1;
}
</style>