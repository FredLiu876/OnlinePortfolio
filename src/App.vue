<template lang="pug">
    #app(v-resize="resize")
        v-app
            VueNavbar(
                :windowWidth="windowWidth"
                :windowHeight="windowHeight"
                :aboutHeight="containerHeights['About']"
                :skillsHeight="containerHeights['Skills']"
                :experienceHeight="containerHeights['Experience']"
                :projectsHeight="containerHeights['Projects']"
            )
            v-main
                VueCarousel(
                    :windowWidth="windowWidth"
                    :windowHeight="windowHeight"
                )
                Container(
                    name="About"
                    color="--text"
                    background-color="--v-secondary-base"
                    ref="About"
                )
                    About
                Tabs
                Container(
                    name="Contact"
                    color="--v-secondary-darken1"
                    background-color="--v-primary-base"
                    ref="Contact"
                    id="footer"
                )
                    Contact(
                        @containerResize="setHeight"
                    )
                .footer-text
                    span.text-caption Fred Liu 2020
</template>

<script>
    import VueNavbar from '@/components/VueNavbar.vue'
    import VueCarousel from '@/components/VueCarousel.vue'
    import Container from '@/components/Container.vue'
    import About from '@/components/About.vue'
    import Tabs from '@/components/Tabs.vue'
    import Contact from '@/components/Contact.vue'
    export default {
        name: "App",
        data: () => {
            return {
                windowWidth: 0,
                windowHeight: 0,
                containerHeights: {
                    "About": 0,
                    "Tabs": 0,
                    "Contact": 0
                }
            }
        },
        components: {
            VueNavbar,
            VueCarousel,
            Container,
            About,
            Tabs,
            Contact
        },
        methods: {
            resize: function() {
                this.windowWidth = window.innerWidth
                this.windowHeight = window.innerHeight
                let keys = Object.keys(this.containerHeights)
                console.log(keys)
                for (let i = 0; i < keys.length; i++) {
                    console.log(this.$refs[keys[i]].$el)
                    console.log(this.$refs[keys[i]].$el.offsetHeight)
                    this.containerHeights[keys[i]] = this.$refs[keys[i]].$el.offsetHeight
                }
            },
            setHeight: function(value) {
                this.containerHeights[value.container] = this.$refs[value.container].$el.offsetHeight
            }
        },
        mounted() {
            setTimeout(this.resize, 150)
        }
    }
</script>



<style lang="scss">
    :root {
        --text: #191d20d7;
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
</style>