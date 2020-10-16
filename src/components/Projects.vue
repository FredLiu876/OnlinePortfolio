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
                                                v-btn(
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
                                    span.text-md-h5.text-h6 {{ value.title }}
                                    br
                                    br
                                    span.text-md-h6.text-subtitle-2(v-html="value.date")
                                    br
                                    br
                                    .description.text-md-body-1.text-body-2
                                        span(v-html="value.description")
                                    br
                                    span.text-md-h6.text-subtitle-2 Technologies used:
                                    .icon-container-center.mt-4
                                        v-tooltip(
                                            bottom
                                            v-for="(tech, index) in value.technologies"
                                            :key="index"
                                        )
                                            template(
                                                v-slot:activator="{ on, attrs}"
                                            )
                                                v-img(
                                                    v-on="on"
                                                    v-bind="attrs"
                                                    max-width="50px"
                                                    height="50px"
                                                    style="margin: 0 10px;"
                                                    contain
                                                    :src="require('@/assets/technologies/' + tech.image)"
                                                )
                                            span {{ tech.name }}

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
                                link: 'https://github.com/FredLiu876/CSTutorials',
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
                            - Worked with a partner to create a tutorial website<br>
                            - Wrote peer-edited tutorials on data structures and other relevant computer science skills
                        `,
                        technologies: [
                            {
                                name: 'Vue',
                                image: 'vue.png'
                            },
                            {
                                name: 'Vuetify',
                                image: 'vuetify.png'
                            }
                        ]
                    },
                    "Online Portfolio": {
                        icons: [
                            {
                                link: 'https://github.com/FredLiu876/OnlinePortfolio',
                                icon: 'mdi-github',
                                info: 'Github'
                            }
                        ],
                        title: "Online Portfolio",
                        date: "August - September 2020",
                        description: `
                            - This webpage speaks for the project
                        `,
                        technologies: [
                            {
                                name: 'Vue',
                                image: 'vue.png'
                            },
                            {
                                name: 'Vuetify',
                                image: 'vuetify.png'
                            },
                            {
                                name: 'Pug',
                                image: 'pug.png'
                            }
                        ]
                    },
                    "FredZip": {
                        icons: [
                            {
                                link: 'https://github.com/FredLiu876/FredZip',
                                icon: 'mdi-github',
                                info: 'Github'
                            }
                        ],
                        title: "Text Compression and Extraction",
                        date: "August 2020",
                        description: `
                            - Compresses text files with a ~45% compression ratio using Huffman then LZ77 compression<br>
                            - Implemented binary trees, stacks and used hashmaps to make Huffman compression successful
                        `,
                        technologies: [
                            {
                                name: 'C++',
                                image: 'c++.png'
                            }
                        ]
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
            setTimeout(()=>{
                this.$refs["textContainer"].style.height = this.$refs["textContainer"].children[0].children[0].offsetHeight+"px"
            }, 50)
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
    .icon-container-center {
        display: flex;
        justify-content: center;
    }
    .block-container {
        width: 100%;
        position: absolute;
    }
    .relative-container {
        position: relative;
    }
</style>