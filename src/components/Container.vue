<template lang="pug">
    div
        span.anchor-tag(
            :id="name.toLowerCase()"
        )
        v-container.py-16(
            fluid
            :style="{color: 'var('+color+')', backgroundColor: 'var('+backgroundColor+')'}"
            ref="container"
        )
            slot
</template>

<script>
    export default {
        name: "Container",
        props: {
            name: {
                required: true,
                type: String
            },
            color: {
                required: true,
                type: String
            },
            backgroundColor: {
                required: true,
                type: String
            }
        }
    }
</script>