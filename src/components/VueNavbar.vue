<template lang="pug">
    .container
        v-app-bar(
            fixed
            :elevation="scrollTop == 0 ? 0:12"
            :color="scrollTop < windowHeight-66 ? 'rgb(0, 0, 0, 0)':'primary'"
            v-scroll="checkTop"
        )
            .d-flex.align-center
                v-btn.home-button.navbar-link.secondary--text(
                    :class="scrollTop < windowHeight-64 ? 'active':''"
                    text
                    href="#app"
                )
                    v-toolbar-title Fred Liu
            v-toolbar-items.ml-4
                v-btn.navbar-link.secondary--text(
                    class="hidden-sm-and-down"
                    :class="scrollTop >= windowHeight-64 && scrollTop < windowHeight+aboutHeight-64 ? 'active':''"
                    text
                    href="#about"
                ) About
                v-btn.navbar-link.secondary--text(
                    class="hidden-sm-and-down"
                    :class="scrollTop >= windowHeight+aboutHeight-64 && scrollTop < windowHeight+aboutHeight+skillsHeight-64 ? 'active':''"
                    text
                    href="#skills"
                ) Skills
                v-btn.navbar-link.secondary--text(
                    class="hidden-sm-and-down"
                    :class="scrollTop >= windowHeight+aboutHeight+skillsHeight-64 && scrollTop < windowHeight+aboutHeight+skillsHeight+experienceHeight-64 ? 'active':''"
                    text
                    href="#experience"
                ) Experience
                v-btn.navbar-link.secondary--text(
                    class="hidden-sm-and-down"
                    :class="scrollTop >= windowHeight+aboutHeight+skillsHeight+experienceHeight-64 && scrollTop < windowHeight+aboutHeight+skillsHeight+experienceHeight+projectsHeight-64 ? 'active':''"
                    text
                    href="#projects"
                ) Projects
                v-btn.navbar-link.secondary--text(
                    class="hidden-sm-and-down"
                    :class="scrollTop >= windowHeight+aboutHeight+skillsHeight+experienceHeight+projectsHeight-64 ? 'active':''"
                    text
                    href="#contact"
                ) Contact
            v-divider.nav-divider
            v-app-bar-nav-icon(
                color="secondary"
                class="hidden-md-and-up"
                @click.stop="showSide=!showSide"
            )
        v-card(tile)
            v-navigation-drawer(
                app
                v-model="showSide"
                v-resize="closeMenu"
                temporary
                right
                dark
                :width="windowWidth/3 > 250 ? windowWidth/3:250"
                overlay-color="primary"
                color="primary"
                class="text-center"
            )
                v-list
                    v-list-item
                        v-list-item-title.text-h6 MENU

                v-divider.sidenav-divider

                v-list
                    v-list-item
                        v-btn.navbar-link.secondary--text(
                            :class="scrollTop >= windowHeight-64 && scrollTop < windowHeight+aboutHeight-64 ? 'active':''"
                            text
                            width="100%"
                            href="#about"
                        ) About
                    v-list-item
                        v-btn.navbar-link.secondary--text(
                            :class="scrollTop >= windowHeight+aboutHeight-64 && scrollTop < windowHeight+aboutHeight+skillsHeight-64 ? 'active':''"
                            text
                            width="100%"
                            href="#skills"
                        ) Skills
                    v-list-item
                        v-btn.navbar-link.secondary--text(
                            :class="scrollTop >= windowHeight+aboutHeight+skillsHeight-64 && scrollTop < windowHeight+aboutHeight+skillsHeight+experienceHeight-64 ? 'active':''"
                            text
                            width="100%"
                            href="#experience"
                        ) Experience
                    v-list-item
                        v-btn.navbar-link.secondary--text(
                            :class="scrollTop >= windowHeight+aboutHeight+skillsHeight+experienceHeight-64 && scrollTop < windowHeight+aboutHeight+skillsHeight+experienceHeight+projectsHeight-64 ? 'active':''"
                            text
                            width="100%"
                            href="#projects"
                        ) Projects
                    v-list-item
                        v-btn.navbar-link.secondary--text(
                            :class="scrollTop >= windowHeight+aboutHeight+skillsHeight+experienceHeight+projectsHeight-64 ? 'active':''"
                            text
                            width="100%"
                            href="#contact"
                        ) Contact

</template>

<script>
    export default {
        name: "VueNavbar",
        data: () => {
            return {
                showSide: false,
                scrollTop: 0
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
            },
            aboutHeight: {
                required: true,
                type: Number
            },
            skillsHeight: {
                required: true,
                type: Number
            },
            experienceHeight: {
                required: true,
                type: Number
            },
            projectsHeight: {
                required: true,
                type: Number
            }
        },
        methods: {
            checkTop: function() {
                this.scrollTop = document.documentElement.scrollTop
            },
            closeMenu: function() {
                if (this.windowWidth >= 960) {
                    this.showSide = false
                }
            }
        },
        mounted() {
            this.checkTop()
        }
    }
</script>

<style scoped>
    .container {
        padding: 0px;
    }
    .active.navbar-link::before {
        opacity: 0.24 !important;
    }
    .nav-divider {
        border: none !important;
        border-color: transparent !important;
    }
    .sidenav-divider {
        border: solid !important;
        border-width: thin 0 0 0 !important;
        border-color: var(--v-secondary-base) !important;
    }
</style>