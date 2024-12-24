<template>
    <span class="mb-3" v-for="(rule, key) in props.errors" :key="key">
        <span class="text-danger" v-if="rule.$validator == 'required'"> Merci de rensigner ce champ</span>
        <span class="text-danger" v-else-if="rule.$validator == 'requiredIf'"> Merci de rensigner ce champ</span>

        <span class="text-danger" v-else-if="rule.$validator == 'email'"> Format de mail invalid</span>
        <span class="text-danger" v-else> {{rule.$message}}</span>
    </span>

</template>

<script setup>
    const props = defineProps(["errors"]);
</script>

<style scoped></style>