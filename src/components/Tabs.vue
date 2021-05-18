<template lang="pug">
    div
        v-tabs(
            v-model="tabModel"
            fixed-tabs
        )
            v-tabs-slider(
                color="yellow"
            )
            v-tab(
                v-for="tab in tabs"
                :key="tab"
            ) {{ tab.name }}
        v-tabs-items(
            v-model="tabModel"
        )
            v-tab-item(
                v-for="tab in tabs"
            )
                v-hover
                    template(v-slot:default="{ hover }")
                        v-card(
                            v-for="item in tab.items"
                            flat
                        )
                            v-img(
                                :src="'@/assets/' + item.src"
                            )
                            v-card-text()
                                h2(class="title primary--text") {{ item.name }}
                            v-card-title(v-if="item.hasRating")
                                span(class="primary--text subtitle-2") Proficiency
                                v-rating(
                                    :value="item.rating"
                                )
                            v-fade-transition
                                v-overlay(
                                    v-if="hover"
                                    absolute
                                    color="#036358"
                                )
                                    span {{ item.description }}
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
                tabs: [
                    {
                        name: "Experience",
                        items: [
                            {
                                name: "Software Tester Coop - Nokia",
                                src: "Nokia.png",
                                hasRating: false,
                                rating: 5,
                                description: `
                                
                                `
                            },
                            {
                                name: "Future Tech Intern - Nokia",
                                src: "Nokia.png",
                                hasRating: false,
                                rating: 5,
                                description: `
                                
                                `
                            },
                            {
                                name: "FIRST Robotics",
                                src: "First.jpg",
                                hasRating: false,
                                rating: 5,
                                description: `
                                
                                `
                            }
                        ]
                    }, 
                    {
                        name: "Skills",
                        items: [
                            {
                                name: "Python",
                                src: "technologies/python.png",
                                hasRating: true,
                                rating: 5,
                                description: `
                                
                                `
                            },
                            {
                                name: "HTML, CSS & JS",
                                src: "hjc.png",
                                hasRating: true,
                                rating: 4,
                                description: `
                                
                                `
                            },
                            {
                                name: "C",
                                src: "c.png",
                                hasRating: true,
                                rating: 4,
                                description: `
                                
                                `
                            },
                            {
                                name: "C++",
                                src: "c++.png",
                                hasRating: true,
                                rating: 3,
                                description: `
                                
                                `
                            },
                            {
                                name: "Java",
                                src: "java.png",
                                hasRating: true,
                                rating: 2,
                                description: `
                                
                                `
                            },
                            {
                                name: "Flask",
                                src: "flask.png",
                                hasRating: true,
                                rating: 4,
                                description: `
                                
                                `
                            },
                            {
                                name: "NodeJS",
                                src: "nodejs.png",
                                hasRating: true,
                                rating: 3,
                                description: `
                                
                                `
                            },
                            {
                                name: "MongoDB",
                                src: "mongodb.png",
                                hasRating: true,
                                rating: 3,
                                description: `
                                
                                `
                            },
                            {
                                name: "Bootstrap",
                                src: "bootstrap",
                                hasRating: true,
                                rating: 4,
                                description: `
                                
                                `
                            },
                            {
                                name: "Vue",
                                src: "vue.png",
                                hasRating: true,
                                rating: 3,
                                description: `
                                
                                `
                            },
                            {
                                name: "Vuetify",
                                src: "vuetify.png",
                                hasRating: true,
                                rating: 5,
                                description: `
                                
                                `
                            },
                            {
                                name: "Git",
                                src: "git.png",
                                hasRating: true,
                                rating: 4,
                                description: `
                                
                                `
                            },
                            {
                                name: "Jira",
                                src: "jira.png",
                                hasRating: true,
                                rating: 2,
                                description: `
                                
                                `
                            },
                            {
                                name: "Confluence",
                                src: "confluence.png",
                                hasRating: true,
                                rating: 2,
                                description: `
                                
                                `
                            },
                            {
                                name: "Regex",
                                src: "regex.png",
                                hasRating: true,
                                rating: 5,
                                description: `
                                
                                `
                            }
                        ]
                    }, 
                    {
                        name: "Projects",
                        items: [
                            {
                                name: "CS Tutorials Website",
                                src: "dailyinnovation.png",
                                hasRating: false,
                                rating: 5,
                                description: `
                                
                                `
                            },
                            {
                                name: "Personal Website",
                                src: "fred.jpg",
                                hasRating: false,
                                rating: 5,
                                description: `
                                
                                `
                            },
                            {
                                name: "Text Compression and Extraction",
                                src: "Zip.webp",
                                hasRating: false,
                                rating: 5,
                                description: `
                                
                                `
                            }
                        ]
                    }, 
                    {
                        name: "Hobbies",
                        items: [
                            {
                                name: "Music",
                                src: "logo.png",
                                hasRating: false,
                                rating: 5,
                                description: `
                                
                                `
                            },
                        ]
                    }
                ],
                experienceDescription: {
                    "Nokia": {
                        position: "Intern in IP/Optical Networks",
                        date: "July 2<sup>nd</sup> 2019 - August 16<sup>th</sup> 2019",
                        description: `
                            - Worked on a tool to automate the migration of routers<br>
                            - Reduced development time of project by 2-3 weeks<br>
                            - Parsed and organized data from router tests using Python’s TextFSM and Regex modules<br>
                            - Made a development server where TextFSM templates could be uploaded and displayed to show work over 7 weeks. This was implemented using Flask and MongoDB
                        `
                    },
                    "Robotics": {
                        position: "Software team",
                        date: "Sept 2019 - April 2020",
                        description: `
                             - Worked on robot vision using Limelight to automatically shoot a ball into a goal<br>
                             - Led the development of the team website at eomlions7476.com<br>
                             - Mentored younger members of the team on web development for future maintenance of the website
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
                    container: "Experience"
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
    .description {
        text-align: left;
    }
    .block-container {
        position: absolute;
    }
    .relative-container {
        position: relative;
    }
</style>