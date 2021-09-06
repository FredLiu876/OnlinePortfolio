<template lang="pug">
    #app(v-resize="resize")
        v-app(
            v-scroll="checkTop"
        )
            VueNavbar(
                :windowWidth="windowWidth"
                :windowHeight="windowHeight"
                :aboutHeight="containerHeights['About']"
                :portfolioHeight="containerHeights['Portfolio']"
                @openContact="sheet = !sheet"
                :contactStatus="sheet"
            )
            v-main
                VueCarousel(
                    :windowWidth="windowWidth"
                    :windowHeight="windowHeight"
                )
                Container.fade-in-section(
                    :class="scrolledPast ? 'is-visible':''"
                    name="About"
                    :isBackgroundImage="true"
                    backgroundImage="2.jpg"
                    ref="About"
                )
                    About(
                        :scrolledIn="scrolledPast"
                    )
                Container(
                    name="Portfolio"
                    color="--text"
                    backgroundColor="--v-secondary-base"
                    :isBackgroundImage="false"
                    ref="Portfolio"
                )
                    Portfolio
                Tabs(
                    style="margin-top: -44px"
                    ref="Tabs"
                    :windowWidth="windowWidth"
                    :noScrollWidth="noScrollWidth"
                )
                Container(
                    name="Contact"
                    color="--text"
                    backgroundColor="--v-primary-base"
                    :isBackgroundImage="false"
                    ref="Contact"
                )
                    v-btn(
                        x-large
                        style="background-color: var(--v-secondary-base)"
                        @click="sheet = !sheet"
                    ) Contact
        v-bottom-sheet(
            v-model="sheet"
            :inset="windowWidth >= 960"
        )
            v-sheet(
                class="text-center"
                height="225px"
            )
                .sheet-row-space-between
                    v-spacer
                    v-btn.ma-2(
                        icon
                        @click="sheet = false"
                    )
                        v-icon(
                            large
                        ) mdi-close
                .pa-4(
                    style="color: var(--text); margin-top: -44px"
                )
                    span.text-h6 I would be glad to hear from you!
                    br
                    span.text-h6 Contact me using the methods below:
                .horizontal-aligner
                    .icon-container.mb-12(
                        :style="{width: determineWidth()}"
                    )
                        v-tooltip(
                            bottom
                            v-for="(contact, index) in contactIcons"
                            :key="index"
                        )
                            template(
                                v-slot:activator="{ on, attrs }"
                            )
                                a.vertical-aligner(
                                    v-on="on"
                                    v-bind="attrs"
                                    :href="contact.link"
                                    target="_blank"
                                    style="text-decoration: none; color: var(--text)"
                                )
                                    .horizontal-aligner
                                        span.pb-2.text-subtitle-1.uppercase {{ contact.type }}
                                    .horizontal-aligner
                                        v-btn.background-white(
                                            icon
                                        )
                                            v-icon(
                                                size="50px"
                                                color="#191d20e8"
                                            ) {{ contact.icon }}
                            span {{ contact.info }}
</template>

<script>
    import VueNavbar from '@/components/VueNavbar.vue'
    import VueCarousel from '@/components/VueCarousel.vue'
    import Container from '@/components/Container.vue'
    import About from '@/components/About.vue'
    import Tabs from '@/components/Tabs.vue'
    import Portfolio from '@/components/Portfolio.vue'
    export default {
        name: "App",
        data: () => {
            return {
                sheet: false,
                scrollTop: 0,
                scrolledPast: false,
                windowWidth: 0,
                noScrollWidth: 0,
                windowHeight: 0,
                contactIcons: [
                    {
                        icon: 'mdi-github',
                        info: 'FredLiu876',
                        link: 'https://github.com/FredLiu876',
                        type: 'Github'
                    },
                    {
                        icon: 'mdi-email',
                        info: 'fredliu876@gmail.com',
                        link: 'mailto:fredliu876@gmail.com',
                        type: 'Email'
                    },
                    {
                        icon: 'mdi-linkedin',
                        info: 'Fred Liu',
                        link: 'https://ca.linkedin.com/in/fred-liu-a457a518a',
                        type: 'LinkedIn'
                    }
                ],
                containerHeights: {
                    "About": 0,
                    "Portfolio": 0
                }
            }
        },
        components: {
            VueNavbar,
            VueCarousel,
            Container,
            About,
            Tabs,
            Portfolio
        },
        methods: {
            resize: function() {
                this.windowWidth = window.innerWidth
                this.noScrollWidth = document.body.clientWidth
                this.windowHeight = window.innerHeight
                let keys = Object.keys(this.containerHeights)
                for (let i = 0; i < keys.length; i++) {
                    this.containerHeights[keys[i]] = this.$refs[keys[i]].$el.offsetHeight
                }
            },
            setHeight: function(value) {
                this.containerHeights[value.container] = this.$refs[value.container].$el.offsetHeight
            },
            checkTop: function() {
                this.scrollTop = document.documentElement.scrollTop
                if (this.scrollTop >= this.windowHeight / 2) {
                    this.scrolledPast = true
                }
            },
            determineWidth: function() {
                if (this.windowWidth > 960) {
                    return '50%'
                } else if (this.windowWidth > 600) {
                    return '60%'
                } else {
                    return '80%'
                } 
            }
        },
        mounted() {
            setTimeout(this.resize, 150)
            this.checkTop()
        }
    }
</script>



<style lang="scss">
    :root {
        --text: #191d20e8;
    }

    html {
        scroll-behavior: smooth;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: var(--text);
    }

    .anchor-tag {
        position: relative;
        top: -54px;
    }

    .footer-text {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 10px; 
        color: var(--v-secondary-base)
    }
    #footer .container {
        padding-bottom: 16px !important;
    }

    .fade-in-section {
        opacity: 0;
        transition: opacity 1s;
    }

    .fade-in-section.is-visible {
        opacity: 1;
    }
</style>

<style scoped>
    .sheet-row-space-between {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .icon-container {
        display: flex;
        justify-content: space-evenly;
    }
    .vertical-aligner {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .horizontal-aligner {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .uppercase {
        text-transform: uppercase;
        letter-spacing: 0.1666666666667rem;
    }
</style>