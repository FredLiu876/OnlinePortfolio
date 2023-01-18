<template lang="pug">
    v-img(
        :height="windowHeight"
        :width="windowWidth"
        src="@/assets/1.jpg"
        @load="loadImage"
    )
        .carousel-item-overlay
            .first-filler
            .pre-load(
                v-show="!imageLoaded"
            )
                .inline-text(
                    :style="{width: determineWidth()}"
                )
                    .horizontal-align
                        span.text-body-1.text-sm-h5(
                            style="color: var(--text); font-weight: 400; font-style: italic;"
                        ) Please wait a few seconds for images to load
                .horizontal-align(style="margin-top: 4vh;")
                    .dot-spin
            .after-load(
                v-show="imageLoaded"
            )    
                .inline-text(
                    :style="{width: determineWidth()}"
                )
                    span.text-h4.text-sm-h2.website-title(
                        :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                    ) F
                    span.text-h4.text-sm-h2.website-title(
                        :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                    ) R
                    span.text-h4.text-sm-h2.website-title(
                        :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                    ) E
                    span.text-h4.text-sm-h2.website-title(
                        :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                    ) D
                    div
                    span.text-h4.text-sm-h2.website-title(
                        :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                    ) L
                    span.text-h4.text-sm-h2.website-title(
                        :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                    ) I
                    span.text-h4.text-sm-h2.website-title(
                        :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                    ) U
                .second-filler
                v-icon.icon-styles.fade-in-section(color="white") mdi-chevron-double-down
</template>

<script>
    export default {
        name: "VueCarousel",
        data: () => {
            return {
                imageLoaded: false
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
            determineWidth: function() {
                if (this.windowWidth > 960) {
                    return '50%'
                } else if (this.windowWidth > 600) {
                    return '60%'
                } else {
                    return '80%'
                } 
            },
            loadImage: function() {
                this.imageLoaded = true
            },
            checkLoading: function() {
                setTimeout(()=>{
                    if (this.imageLoaded) {
                        let websiteSubtitles = document.querySelectorAll('.fade-in-section')
                        websiteSubtitles[0].className += ' is-visible-delay-2'
                        //websiteSubtitles[1].className += ' is-visible-delay-3'
                        let websiteTitles = document.querySelectorAll('.website-title')
                        websiteTitles[0].className += ' normal-position-1'
                        websiteTitles[1].className += ' normal-position-2'
                        websiteTitles[2].className += ' normal-position-3'
                        websiteTitles[3].className += ' normal-position-4'
                        websiteTitles[4].className += ' normal-position-5'
                        websiteTitles[5].className += ' normal-position-6'
                        websiteTitles[6].className += ' normal-position-7'
                    } else {
                        this.checkLoading()
                    }
                }, 100)
            }
        },
        mounted() {
            this.checkLoading()
        }
    }
</script>

<style scoped>
    .dot-spin {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: transparent;
        color: transparent;
        box-shadow: 0 -18px 0 0 var(--text), 12.727926px -12.727926px 0 0 var(--text), 18px 0 0 0 var(--text), 12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
        animation: dot-spin 1.5s infinite linear;
    }

    @keyframes dot-spin {
        0%, 100% {
            box-shadow: 0 -18px 0 0 var(--text), 12.727926px -12.727926px 0 0 var(--text), 18px 0 0 0 var(--text), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
        }
        12.5% {
            box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 0 var(--text), 18px 0 0 0 var(--text), 12.727926px 12.727926px 0 0 var(--text), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
        }
        25% {
            box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 var(--text), 12.727926px 12.727926px 0 0 var(--text), 0 18px 0 0 var(--text), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
        }
        37.5% {
            box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 0 var(--text), 0 18px 0 0 var(--text), -12.727926px 12.727926px 0 0 var(--text), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
        }
        50% {
            box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 var(--text), -12.727926px 12.727926px 0 0 var(--text), -18px 0 0 0 var(--text), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
        }
        62.5% {
            box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 var(--text), -18px 0 0 0 var(--text), -12.727926px -12.727926px 0 0 var(--text);
        }
        75% {
            box-shadow: 0 -18px 0 0 var(--text), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 var(--text), -12.727926px -12.727926px 0 0 var(--text);
        }
        87.5% {
            box-shadow: 0 -18px 0 0 var(--text), 12.727926px -12.727926px 0 0 var(--text), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 var(--text);
        }
    }
    .carousel-item-overlay {
        top: 25%;
        height: 75%;
        width: 100%;
        position: absolute;
        background: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(255, 144, 53, 0.8));
    }
    .first-filler {
        height: 20vh;
    }
    .second-filler {
        height: 25vh;
    }
    .third-filler {
        height: 2vh;
    }
    .icon-styles {
        font-size: 100px;
    }
    .inline-text {
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .horizontal-align {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .website-title {
        color: var(--v-secondary-base);
        font-weight: 450;
        font-style: italic;
    }
    .normal-position-1 {
        transform: translateX(0%) !important;
        transition: transform 1s ease-in;
    }
    .normal-position-2 {
        transform: translateX(0%) !important;
        transition: transform 1.25s ease-in;
    }
    .normal-position-3 {
        transform: translateX(0%) !important;
        transition: transform 1.5s ease-in;
    }
    .normal-position-4 {
        transform: translateX(0%) !important;
        transition: transform 1.75s ease-in;
    }
    .normal-position-5 {
        transform: translateX(0%) !important;
        transition: transform 2.25s ease-in;
    }
    .normal-position-6 {
        transform: translateX(0%) !important;
        transition: transform 2.5s ease-in;
    }
    .normal-position-7 {
        transform: translateX(0%) !important;
        transition: transform 2.75s ease-in;
    }
    .website-subtitle {
        color: var(--v-secondary-base);
    }
    .fade-in-section.is-visible-delay-2 {
        opacity: 1;
        transition-delay: 3s;
    }
    .fade-in-section.is-visible-delay-3 {
        opacity: 1;
        transition-delay: 4s;
    }
</style>

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