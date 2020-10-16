<template lang="pug">
    v-carousel(
        hide-delimiters
        show-arrows-on-hover
        :height="windowHeight"
        :width="windowWidth"
    )
        v-carousel-item(
            v-for="(image,i) in images"
            :key="i"
            :src="require('@/assets/' + image)"
            reverse-transition="fade-transition"
            transition="fade-transition"
        )
        //-
            .carousel-text-container
                div
                    span.carousel-text.text-lg-h1.text-md-h2.text-sm-h3.text-h4 Fred Liu
</template>

<script>
    export default {
        name: "VueCarousel",
        data: () => {
            return {
                images: [
                    "1.jpg",
                    "2.jpg",
                    "3.jpg"
                ]
            }
        },
        props: {
            windowWidth: {
                required: true,
                type: Number
            },
            windowHeight: {
                required: true,
                type: Number
            }
        },
        methods: {
        
        }
    }
</script>

<style>
/*
    .carousel-text-container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .carousel-text-container div {
        width: 100%;
        position: absolute;
        top: 30%
    }

    .carousel-text {
        text-align: center;
        color: var(--v-accent-darken2);
    }*/

    .v-window__prev,.v-window__next {
        background: transparent !important;
    }
    .v-window__prev .v-btn,.v-window__next .v-btn {
        height: 52px !important;
        width: 54px !important;
    }
    .v-window__prev .v-btn::before,.v-window__next .v-btn::before {
        background: var(--v-accent-base) !important;
    }
    .v-window__prev .v-btn:hover:before,.v-window__next .v-btn:hover:before {
        opacity: 1 !important;
    }
    .v-window__prev .v-btn .v-icon,.v-window__next .v-btn .v-icon {
        font-size: 48px !important;
    }
</style>