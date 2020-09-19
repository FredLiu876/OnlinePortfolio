<template lang="pug">
    .content-center
        v-img(
            v-for="(image, i) in images"
            :key="i"
            :src="require('@/assets/' + image.image)"
            :max-width="windowWidth > 960 ? width*1.25+'px': width+'px'"
            :height="windowWidth > 960 ? width*1.25+'px': width+'px'"
        )
            v-btn(
                tile
                text
                width="100%"
                height="100%"
                :style="i != 0 ? {borderLeft: 'None'}:''"
                @click="changeSelection(image.name)"
            )
</template>

<script>
    export default {
        name: "ImageButton",
        props: {
            windowWidth: {
                required: true,
                type: Number
            },
            width: {
                required: true,
                type: String
            },
            images: {
                required: true,
                type: Array,
                name: {
                    required: true,
                    type: String
                },
                image: {
                    required: true,
                    type: String
                }
            }
        },
        methods: {
            changeSelection: function(value) {
                this.$emit("newSelection", value)
            }
        }
    }
</script>

<style scoped>
    .v-image {
        background-color: var(--v-secondary-base);
    }
    .content-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .v-btn {
        border: var(--text) solid 1px;
    }
</style>