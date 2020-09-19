<template lang="pug">
    div
        span.text-lg-h2.text-h3 Skills
        br
        br
        span.text-lg-h5.text-sm-h6.text-body-1 Select a skill in the dropdown to see how I've used it.
        v-row.mt-4
            v-col(
                offset="1"
                cols="3"
            )
                span.text-h6 Skill:
                br
                v-menu(
                    v-model="showSkills"
                    offset-y
                    :close-on-content-click="false"
                )
                    template(
                        v-slot:activator="{ on, attrs }"
                    )
                        v-btn.py-6.secondary-background(
                            v-bind="attrs"
                            v-on="on"
                            width="200px"
                        ) {{ selected }}
                            v-spacer
                            v-icon mdi-chevron-down
                    v-list(
                        width="200px"
                    )
                        v-menu(
                            v-for="(value, name, i) in skills"
                            :key="i"
                            offset-x
                        )
                            template(
                                v-slot:activator="{ on, attrs }"
                            )
                                v-list-item.secondary-background(
                                    v-bind="attrs"
                                    v-on="on"
                                ) {{ name }}
                                    v-spacer
                                    v-icon mdi-chevron-right
                            v-list(
                                width="200px"
                            )
                                div(
                                    v-for="(skill, index) in value"
                                    :key="index"
                                )
                                    v-divider(v-if="index!=0")
                                    v-list-item.secondary-background(
                                        @click="chooseNewSkill(skill)"
                                    ) {{ skill }}
            v-col(
                offset-md="2"
                offset-sm="2"
                offset="1"
                md="4"
                sm="6"
                cols="10"
            )
                .mt-4(ref="textContainer")
                    .relative-container
                        .block-container(
                            v-for="(value, name, i) in descriptions"
                            :key="i"
                        )
                            transition(
                                @after-enter="finishRender"
                            )
                                span.text-body-2(
                                    v-show="selected==name"
                                ) {{ value }}
</template>

<script>
    export default {
        name: "Skill",
        data: () => {
            return {
                showSkills: false,
                selected: "Python",
                skills: {
                    Languages: [
                        "Python",
                        "Html, CSS & JS",
                        "C++",
                        "Java"
                    ],
                    Frameworks: [
                        "Flask",
                        "NodeJS",
                        "MongoDB",
                        "Bootstrap",
                        "Vue",
                        "Vuetify"
                    ],
                    Tools: [
                        "Git",
                        "Regex"
                    ]
                },
                descriptions: {
                    'Python': `
                        I am very comfortable with Python since I use this language in programming problems and contests such as CCC and ECOO.
                        I've also worked a lot on backend using Python, using MongoDB and Flask.
                    `,
                    'Html, CSS & JS': `
                        I am very comfortable with HTML, CSS and Javascript as I have developed several websites.
                        Please see the websites listed under my projects, they are a good reflection of my frontend development skills.
                    `,
                    'C++': `
                        I have a good understanding of this language from programming a text compression and extraction program.
                        The project required me to understand how to make my own data structures, allowing me to understand important c++ concepts like pointers, structs and classes.
                    `,
                    'Java': `
                        I have used this language the least, although I used it in high school programming classes and in my FRC team's robot code.
                    `,
                    'Flask': `
                        I used Flask and MongoDB for the backend of my websites.
                        When I worked at Nokia, I made a website where I could upload my work to the database to show off my progress over the internship.
                    `,
                    'NodeJS': `
                        Along with NPM, I have used a lot of Node related modules in my websites to help develop my frontend.
                        These modules include Vue, Axios, Pug, etc. You may see some of the modules included in the skills. I also have experience using ExpressJS for backend.
                    `,
                    'MongoDB': `
                        I used MongoDB with Flask for the backend of my websites.
                        When I worked at Nokia, I made a website where I could upload my work to the database to show off my progress over the internship.
                    `,
                    'Bootstrap': `
                        I have a lot of experience with Bootstrap and similar frontend component frameworks such as Materialize and Vuetify.
                        I am very familiar with the grid system and flex layout to create responsive websites, test this webpage out by changing the size of your viewport!
                    `,
                    'Vue': `
                        I've worked with Vue and its component framework Vuetify quite intensively this summer, including the tutorial website and this website.
                    `,
                    'Vuetify': `
                        I have a lot of experience with Vuetify and similar frontend component frameworks such as Materialize and Bootstrap.
                        I am very familiar with the grid system and flex layout to create responsive websites, test this webpage out by changing the size of your viewport!
                    `,
                    'Git': `
                        I use git in all projects requiring collaboration and in large projects such as my tutorial website for version control.
                    `,
                    'Regex': `
                        Regex was part of my work at Nokia. I wrote regular expressions and put them in a template using textfsm to parse relevant data from long router textfiles and return the information in a dictionary.
                    `
                }
            }
        },
        methods: {
            finishRender: function(el) {
                this.$refs["textContainer"].style.height = el.parentNode.offsetHeight+"px"
                this.$emit('containerResize', {
                    container: "Skills"
                })
            },
            chooseNewSkill: function(skill) {
                this.selected = skill
                this.showSkills = false
            }
        },
        mounted() {
            this.$refs["textContainer"].style.height = this.$refs["textContainer"].children[0].children[0].offsetHeight+"px"
        }
    }
</script>

<style scoped>
    .secondary-background {
        background-color: var(--v-secondary-base) !important;
    }
    .block-container {
        position: absolute;
    }
    .relative-container {
        position: relative;
    }
</style>