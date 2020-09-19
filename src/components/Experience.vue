<template lang="pug">
    v-container(
        fluid
        ref="container"
    )
        span.text-lg-h2.text-h3 Experience
        br
        br
        span.text-lg-h5.text-sm-h6.text-body-1 Previous employment and other technology related experience.
        ImageButton.mt-4(
            width="100"
            :windowWidth="windowWidth"
            :images="experiences"
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
                            v-for="(value, name, i) in experienceDescription"
                            :key="i"
                        )
                            transition(
                                @after-enter="finishRender"
                            )
                                div(v-show="selected==name")
                                    span.text-h6 {{ value.position }}
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
                selected: "Nokia",
                experiences: [
                    {
                        name: "Nokia",
                        image: "Nokia.png"
                    },
                    {
                        name: "Robotics",
                        image: "First.jpg"
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
    .container {
        background-color: #FFFDE7;
    }
    .description {
        text-align: left;
    }
</style>