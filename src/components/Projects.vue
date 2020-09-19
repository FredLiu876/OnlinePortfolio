<template lang="pug">
    div
        span.text-lg-h2.text-h3 Key Projects
        br
        br
        span.text-lg-h5.text-sm-h6.text-body-1 Use the slides to see what projects I've done.
        br
        span.text-lg-h5.text-sm-h6.text-body-1 Projects are ordered from left to right in terms of importance.
        ImageButton.mt-4(
            width="100"
            :windowWidth="windowWidth"
            :images="projects"
            @newSelection="changeSelection"
        )
        v-row.mt-4
            v-col(
                offset-lg="4"
                offset-md="3"
                offset-sm="2"
                offset="1"
                lg="4"
                md="6"
                sm="8"
                cols="10"
            )
                div(ref="textContainer")
                    .relative-container
                        .block-container(
                            v-for="(value, name, i) in projectDescription"
                            :key="i"
                        )
                            transition(
                                @after-enter="finishRender"
                            )
                                div(v-show="selected==name")
                                    .icon-container.mb-12
                                        v-tooltip(
                                            bottom
                                            v-for="(icon, index) in value.icons"
                                            :key="index"
                                        )
                                            template(
                                                v-slot:activator="{ on, attrs}"
                                            )
                                                v-btn.background-white(
                                                    icon
                                                    v-on="on"
                                                    v-bind="attrs"
                                                    :href="icon.link"
                                                    target="_blank"
                                                )
                                                    v-icon(
                                                        size="50px"
                                                        color="secondary"
                                                    ) {{ icon.icon }}
                                            span {{ icon.info }}
                                    span.text-h6 {{ value.title }}
                                    br
                                    br
                                    span.text-subtitle-2(v-html="value.date")
                                    br
                                    br
                                    .description.text-body-2
                                        span(v-html="value.description")
</template>

<script>
    import ImageButton from "@/components/ImageButton.vue"
    export default {
        name: "Experience",
        components: {
            ImageButton
        },
        data: () => {
            return {
                selected: "CS Tutorials",
                projects: [
                    {
                        name: "CS Tutorials",
                        image: "dailyInnovation.png"
                    },
                    {
                        name: "Online Portfolio",
                        image: "fred.jpg"
                    },
                    {
                        name: "FredZip",
                        image: "Zip.webp"
                    }
                ],
                projectDescription: {
                    "CS Tutorials": {
                        icons: [
                            {
                                link: 'https://github.com/TheFrog12345/CSTutorials',
                                icon: 'mdi-github',
                                info: 'Github'
                            },
                            {
                                link: 'https://dailyinnovation.ca',
                                icon: 'mdi-laptop',
                                info: 'Visit site'
                            }
                        ],
                        title: "Daily Innovation CS Tutorials",
                        date: "June 2020 - Ongoing",
                        description: `
                            - Worked on a tool to automate the migration of routers<br>
                            - Reduced development time of project by 2-3 weeks<br>
                            - Parsed and organized data from router tests using Python’s TextFSM and Regex modules<br>
                            - Made a development server where TextFSM templates could be uploaded and displayed to show work over 7 weeks. This was implemented using Flask and MongoDB
                        `
                    },
                    "Online Portfolio": {
                        icons: [
                            {
                                link: 'https://github.com/TheFrog12345/OnlinePortfolio',
                                icon: 'mdi-github',
                                info: 'Github'
                            }
                        ],
                        title: "Online Portfolio",
                        date: "August - September 2020",
                        description: `
                            - Worked on a tool to automate the migration of routers<br>
                            - Reduced development time of project by 2-3 weeks<br>
                            - Parsed and organized data from router tests using Python’s TextFSM and Regex modules<br>
                            - Made a development server where TextFSM templates could be uploaded and displayed to show work over 7 weeks. This was implemented using Flask and MongoDB
                        `
                    },
                    "FredZip": {
                        icons: [
                            {
                                link: 'https://github.com/TheFrog12345/FredZip',
                                icon: 'mdi-github',
                                info: 'Github'
                            }
                        ],
                        title: "Text Compression and Extraction",
                        date: "August 2020",
                        description: `
                            - Worked on a tool to automate the migration of routers<br>
                            - Reduced development time of project by 2-3 weeks<br>
                            - Parsed and organized data from router tests using Python’s TextFSM and Regex modules<br>
                            - Made a development server where TextFSM templates could be uploaded and displayed to show work over 7 weeks. This was implemented using Flask and MongoDB
                        `
                    }
                }
            }
        },
        props: {
            windowWidth: {
                required: true,
                type: Number
            }
        },
        methods: {
            finishRender: function(el) {
                this.$refs["textContainer"].style.height = el.parentNode.offsetHeight+"px"
                this.$emit('containerResize', {
                    container: "Projects"
                })
            },
            changeSelection: function(value) {
                this.selected = value
            }
        },
        mounted() {
            this.$refs["textContainer"].style.height = this.$refs["textContainer"].children[0].children[0].offsetHeight+"px"
        }
    }
</script>

<style scoped>
    .container {
        color: #FFFDE7;
        background-color: #1976D2;
    }
    .icon-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>