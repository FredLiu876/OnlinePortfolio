<template lang="pug">
    div
        v-tabs(
            v-model="tabModel"
            fixed-tabs
            class="tab-headers"
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            dark
            show-arrows
            background-color="primary"
        )
            v-tabs-slider(
                color="accent lighten-3"
            )
            v-tooltip(
                v-for="(tab, tabindex) in tabs"
                :key="tabindex"
                top
            )
                template(v-slot:activator="{ on, attrs }")
                    v-tab(
                        @click="changeCurrentTab(tab)"
                        v-bind="attrs"
                        v-on="on"
                    ) {{ tab.name }}
                span {{ tooltips[tab.name][tab.name == currentTab] }}
        v-tabs-items(
            v-model="tabModel"
        )
            v-tab-item(
                v-for="(tab, tabitemindex) in tabs"
                :key="tabitemindex"
            )
                .item-card-container(
                    :style="{ width: noScrollWidth + 1 + 'px', paddingLeft: '1px'}"
                    ref="item-card-container"
                    style="background-color: var(--v-secondary-base)"
                )
                    .item-card(
                        v-for="(item, i) in tab.items"
                        :key="i"
                    )
                        template
                            v-hover(
                                v-slot="{ hover }"
                            )
                                v-card.item-card-styles(
                                    rounded="0"
                                    height="100%"
                                    :width="noScrollWidth / parseInt(noScrollWidth / cardWidth)"
                                    :min-width="noScrollWidth / 5"
                                )
                                    v-img(
                                        :src="require('@/assets/' + item.src)"
                                        :width="noScrollWidth / parseInt(noScrollWidth / cardWidth)"
                                        :min-width="noScrollWidth / 5"
                                        height="250px"
                                        cover
                                    )
                                    v-card-text(class="text-md-h4 text-sm-h6 text-h4 pt-4 pb-1 pl-8") {{ item.name }}
                                    v-card-text(
                                        class="text-md-h6 text-sm-body-2 text-h6 dark-italic pt-1 pl-8"
                                    ) {{ item.identifier }}
                                    v-card-text(
                                        v-if="'date' in item"
                                        class="text-md-body-1 text-overline light-italic pt-1 pl-8"
                                    ) {{ item.date }}
                                    v-fade-transition
                                        v-overlay(
                                            v-if="hover"
                                            absolute
                                            color="primary"
                                        )
                                            v-btn(
                                                @click="showMoreInfo(item)"
                                            ) More info
        v-overlay(
            :value="moreInfoOverlay"
            style="z-index: 15"
        )
            .click-area(
                @click="closeOverlay"
            )
            v-card(
                class="modal-card mx-8"
                :style="{ maxWidth: (windowWidth >= 600 ? windowWidth*0.7:windowWidth) + 'px', minWidth: (windowWidth >= 600 ? windowWidth*0.4:0) + 'px'}"
                :class="windowWidth >= 960 ? 'pa-2':'pa-1'"
            )
                v-card-text(
                    class="modal-card-text text-md-h4 text-h6"
                    :class="displayDate != ''? 'no-padding-bottom':''"
                ) {{ displayName }}
                v-card-text(
                    v-if="displayDate != ''"
                    class="text-md-body-1 text-overline dark-italic pt-2 negative-margin-top"
                ) {{ displayDate }}
                v-divider(
                    style="background-color: var(--text)"
                )
                ul(
                    class="modal-list pt-4 pr-md-4 ml-md-4 pr-2 ml-2 modal-card-text text-h6"
                ) {{ preInfo }}
                    li(
                        class="modal-card-text text-md-subtitle-1 text-body-1"
                        v-for="(point, pointIndex) in displayInfo"
                        :key="pointIndex"
                    ) {{ point }}
                .horizontal-aligner.mt-12
                    .icon-container
                        v-tooltip(
                            bottom
                            v-for="(icon, iconIndex) in displayIcons"
                            :key="iconIndex"
                        )
                            template(
                                v-slot:activator="{ on, attrs }"
                            )
                                a.vertical-aligner(
                                    v-on="on"
                                    v-bind="attrs"
                                    :href="icon.link"
                                    target="_blank"
                                    style="text-decoration: none; color: var(--text)"
                                )
                                    .horizontal-aligner
                                        span.pb-2.text-subtitle-1.uppercase {{ icon.type }}
                                    .horizontal-aligner
                                        v-btn.background-white(
                                            icon
                                        )
                                            v-icon(
                                                size="50px"
                                                color="#191d20e8"
                                            ) {{ icon.icon }}
                            span {{ icon.info }}
                v-card-actions
                    v-spacer
                    v-icon(
                        :class="windowWidth >= 960 ? 'ma-2':'ma-1'"
                        color="primary"
                        :large="windowWidth >= 960"
                        @click="closeOverlay"
                    ) mdi-check
</template>

<script>
    import ImageButton from "@/components/ImageButton.vue"
    export default {
        name: "Experience",
        components: {
            ImageButton
        },
        props: {
            windowWidth: {
                required: true,
                type: Number
            },
            noScrollWidth: {
                required: true,
                type: Number
            }
        },
        methods: {
            changeCurrentTab: function(tab) {
                setTimeout(() => {
                    this.currentTab = tab.name
                    this.displayName = ''
                    this.displayInfo = []
                    this.displayDate = ''
                    this.displayIcons = []
                    this.preInfo = ''
                    this.moreInfoOverlay = false
                }, 100)
            },
            showMoreInfo: function(item) {
                this.displayName = item.displayName
                this.displayInfo = item.description
                if ('date' in item) {
                    this.displayDate = item.date
                } else {
                    this.displayDate = ''
                }
                if ("preInfo" in item) {
                    this.preInfo = item.preInfo
                } else {
                    this.preInfo = ''
                }
                if ('icons' in item) {
                    this.displayIcons = item.icons
                } else {
                    this.displayIcons = []
                }
                this.moreInfoOverlay = true
                this.disableScroll()
            },
            closeOverlay: function() {
                this.displayName = ''
                this.displayInfo = []
                this.displayDate = ''
                this.preInfo = ''
                this.displayIcons = []
                this.moreInfoOverlay = false
                this.enableScroll()
            },
            preventDefault: function(e) {
                e.preventDefault();
            },
            preventDefaultForScrollKeys: function(e) {
                if (this.keys[e.keyCode]) {
                    this.preventDefault(e)
                    return false
                }
            },
            disableScroll: function() {
                window.addEventListener('DOMMouseScroll', this.preventDefault, false);
                window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
                window.addEventListener('touchmove', this.preventDefault, this.wheelOpt);
                window.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
            },
            enableScroll: function() {
                window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
                window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); 
                window.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
                window.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);
            },
            setSupportsPassive: function() {
                this.supportsPassive = true
            }
        },
        mounted() {
            try {
                window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                    get: this.setSupportsPassive
                }));
            } catch(e) {
                console.log(e)
            }

            this.wheelOpt = this.supportsPassive ? { passive: false } : false;
            this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        },
        data: () => {
            return {
                preInfo: '',
                cardWidth: 275,
                keys: {37: 1, 38: 1, 39: 1, 40: 1},
                supportsPassive: false,
                wheelOpt: false,
                wheelEvent: '',
                tabModel: null,
                currentTab: 'Experience',
                displayName: '',
                displayInfo: [],
                displayDate: '',
                displayIcons: [],
                moreInfoOverlay: false,
                tooltips: {
                    'Experience': {
                        false: "See my experience background",
                        true: "Hover over the cards to read about my impact.",
                    },
                    'Skills': {
                        false: "See what skills I have to offer",
                        true: "Hover over the cards to read about how I use them.",
                    },
                    'Projects': {
                        false: "See what projects I've made",
                        true: "Hover over the cards to see source code or try it out.",
                    },
                    'Hobbies': {
                        false: "See what I do in my free time",
                        true: "Hover over the cards to see my hobbies in action.",
                    }
                },
                tabs: [
                    {
                        name: "Experience",
                        description: "I have all sorts of work experience that helps me be a well-rounded person who can understand the all pieces as a whole.",
                        moreInfo: "",
                        items: [
                            {
                                displayName: "Data Engineer Intern at Super.com",
                                name: "Super.com",
                                src: "Super.jpg",
                                identifier: "Data Engineer Intern",
                                date: "May 2023 - Aug 2023",
                                description: [
                                    "Researched cost-savings opportunities and executed them, saving over $50000 annually and reducing storage space in AWS S3 by 30%",
                                    "Architected highly scalable DAG pipeline factory to track customer support agent metrics that can easily extend to new business requirements",
                                    "Orchestrated major data infrastructure tool DBT upgrade safely with minimal disruptions",
                                    "Wrote custom connector to import freshdesk ticket activities to provide analytics on customer support agents",
                                    "Solved bugs pertaining to difficult data quality issues"
                                ]
                            },
                            {
                                displayName: "GCP Software Engineer Intern at Titanium Agency",
                                name: "Titanium Agency",
                                src: "titanium.jpg",
                                identifier: "GCP Software Engineer Intern",
                                date: "Sept 2022 - Dec 2022",
                                description: [
                                    "Optimized SQL scripts and database interactions, including speeding up ad campaign dashboard operations by roughly 5 times",
                                    "Implemented websocket connection to build custom loading bar framework, improving user experience of expensive operations across the app",
                                    "Built new page interacting with Facebook Business API for ad managers to clone ads in bulk"
                                ]
                            },
                            {
                                displayName: "Data Scientist Intern at Wish",
                                name: "Wish",
                                src: "Wish.jpg",
                                identifier: "Data Scientist Intern",
                                date: "Jan 2022 - Apr 2022",
                                description: [
                                    "Developed ETL data pipeline to automate analysis of app notifications from raw data, using attribution models to measure notification engagement",
                                    "Analyzed anomaly in user retention under advertising dimensions, revealing crucial bias in north star metric",
                                    "Standardized notification-related metric definitions and collection with other data scientists to improve accuracy and consistency for product managers and future data scientists doing notification analysis",
                                ]
                            },
                            {
                                displayName: "Software Tester Coop at Nokia",
                                name: "Nokia",
                                src: "Nokia.jpg",
                                identifier: "Software Tester Coop",
                                date: "May 2021 - Aug 2021",
                                description: [
                                    "Scripted many API tests that were added to continuous integration, significantly reducing future effort",
                                    "Explored to find many obscure major impact bugs resulting in a more robust system",
                                    "Communicated effectively with product owner and developers to ensure new event notification feature met requirements, receiving very positive feedback during customer trials",
                                    "Critically analyzed workplace methodologies and suggested using agile strategy of acceptance testing"
                                ]
                            },
                            {
                                displayName: "Future Tech Intern, IP/Optics division at Nokia",
                                name: "Nokia",
                                src: "Nokia.jpg",
                                identifier: "Future Tech Intern",
                                date: "July 2019 - Aug 2019",
                                description: [
                                    "Developed script to automatically parse router test logs given a TextFSM template, reducing development time of project to automate migration of routers by 2-3 weeks",
                                    "Made a development server where TextFSM templates could be uploaded and displayed, implemented using Flask and MongoDB"
                                ]
                            },
                            {
                                displayName: "Software Sub-team Member in 7476 FIRST Robotics team",
                                name: "FIRST Robotics",
                                src: "first.png",
                                identifier: "Team 7476 Member",
                                date: "Sep 2019 - Apr 2020",
                                description: [
                                    "Worked on robot vision to automatically shoot ball into goal",
                                    "Led the development of former team website at eomlions7476.com",
                                    "Mentored younger members of the team on programming logic and web development"
                                ],
                                icons: [
                                    {
                                        link: 'https://github.com/yourBoiGershy/LionsWebsite',
                                        icon: 'mdi-github',
                                        type: 'Github',
                                        info: 'See website source code'
                                    },
                                    {
                                        link: 'https://eomlions7476.com',
                                        icon: 'mdi-magnify',
                                        type: 'Learn more',
                                        info: 'eomlions7476.com'
                                    }                                    
                                ]
                            }
                        ]
                    }, 
                    {
                        name: "Skills",
                        description: "I have a wide array of skills, in both frontend, backend, general project management tools, and scripting skills such as data structures & algorithms.",
                        moreInfo: "Hover over my skills and click on more info to read about how I developed and used them.",
                        items: [
                            {
                                displayName: "Python",
                                name: "Python",
                                src: "technologies/python.png",
                                identifier: "Programming Language",
                                preInfo: "Used in:",
                                description: [
                                    "Programming problems and programming contests",
                                    "Data pipelines",
                                    "Backend with MongoDB and Flask",
                                    "Automated test scripts"
                                ]
                            },
                            {
                                displayName: "SQL",
                                name: "SQL",
                                src: "technologies/sql.png",
                                identifier: "Programming Language",
                                preInfo: "Used in:",
                                description: [
                                    "Querying big data to create data pipelines or complete manual analysis"
                                ]
                            },
                            {
                                displayName: "HTML, CSS & JS",
                                name: "HTML, CSS & JS",
                                src: "technologies/hjc.png",
                                identifier: "Programming Languages",
                                preInfo: "Used to create:",
                                description: [
                                    "This personal website",
                                    "CS Tutorials dailyinnovation.ca website",
                                    "Former eomlions7476.com website"
                                ]
                            },
                            {
                                displayName: "C#",
                                name: "C#",
                                src: "technologies/csharp.png",
                                identifier: "Programming Language",
                                description: [
                                    "Used extensively at Titanium Agency work, along with ASP.NET and Entity Framework"
                                ]
                            },
                            {
                                displayName: "C",
                                name: "C",
                                src: "technologies/c.png",
                                identifier: "Programming Language",
                                description: [
                                    "Learnt and used extensively in CS 136 course, with final grade of 97",
                                    "Currently using to create a language converter tool"
                                ]
                            },
                            {
                                displayName: "C++",
                                name: "C++",
                                src: "technologies/c++.png",
                                identifier: "Programming Language",
                                description: [
                                    "Used to create text compressor and extractor"
                                ]
                            },
                            {
                                displayName: "Java",
                                name: "Java",
                                src: "technologies/java.png",
                                identifier: "Programming Language",
                                description: [
                                    "Wrote script to make robot align and shoot ball into goal automatically on FRC Team 7476",
                                    "Created poker game"
                                ]
                            },
                            {
                                displayName: "Airflow",
                                name: "Airflow",
                                src: "technologies/airflow.png",
                                identifier: "Workflow management framework",
                                preInfo: "Used in:",
                                description: [
                                    "Data pipelines"
                                ]
                            },
                            {
                                displayName: "Snowflake",
                                name: "Snowflake",
                                src: "technologies/Snowflake.jpg",
                                identifier: "DBMS",
                                description: [
                                    "Used many built in options such as dynamic tables, zero-copy clones and query history.",
                                    "Explored methods to cut costs"
                                ]
                            },
                            {
                                displayName: "DBT",
                                name: "DBT",
                                src: "technologies/DBT.jpg",
                                identifier: "Data Transformation Framework",
                                preInfo: "Used in:",
                                description: [
                                    "Building derived tables -> fact, dim and staging tables."
                                ]
                            },
                            {
                                displayName: "Pandas",
                                name: "Pandas",
                                src: "technologies/pandas.png",
                                identifier: "Data Transformation Framework",
                                preInfo: "Used in:",
                                description: [
                                    "Data pipelines"
                                ]
                            },
                            {
                                displayName: "Tableau",
                                name: "Tableau",
                                src: "technologies/tableau.png",
                                identifier: "Data Visualization Software",
                                preInfo: "Used in:",
                                description: [
                                    "Dashboards for automatic analysis"
                                ]
                            },
                            {
                                displayName: "Flask",
                                name: "Flask",
                                src: "technologies/flask.png",
                                identifier: "Backend server framework",
                                preInfo: "Used as backend of:",
                                description: [
                                    "CS Tutorials dailyinnovation.ca website",
                                    "Automatic attendance smartendance.ca website"
                                ]
                            },
                            {
                                displayName: "NodeJS",
                                name: "NodeJS",
                                src: "technologies/nodejs.png",
                                identifier: "Web application framework",
                                preInfo: "Used to create:",
                                description: [
                                    "This personal website",
                                    "CS Tutorials dailyinnovation.ca website"
                                ]
                            },
                            {
                                displayName: "ASP.NET",
                                name: "ASP.NET",
                                src: "technologies/aspnet.png",
                                identifier: "Web application framework",
                                description: [
                                    "Used at Titanium Agency for fullstack and database entity management"
                                ]
                            },
                            {
                                displayName: "Amazon Web Services",
                                name: "AWS",
                                src: "technologies/aws.png",
                                identifier: "Cloud Service",
                                description: [
                                    "Used lifecycle rules to reduce S3 storage at Super.com by 60%",
                                    "Extensively used S3 and its python api for airflow logs and other data"
                                ]
                            },
                            {
                                displayName: "Google Cloud Platform",
                                name: "GCP",
                                src: "technologies/gcp.png",
                                identifier: "Cloud Service",
                                preInfo: "Used to create:",
                                description: [
                                    "Used BigQuery at Titanium Agency to manage data"
                                ]
                            },
                            {
                                displayName: "MongoDB",
                                name: "MongoDB",
                                src: "technologies/mongodb.png",
                                identifier: "Non-relational database",
                                description: [
                                    "Database of CS Tutorials dailyinnovation.ca website"
                                ]
                            },
                            {
                                displayName: "Bootstrap",
                                name: "Bootstrap",
                                src: "technologies/bootstrap.png",
                                identifier: "Front end framework",
                                description: [
                                    "Front end framework of smartendance.ca"
                                ]
                            },
                            {
                                displayName: "Vue",
                                name: "Vue",
                                src: "technologies/vue.png",
                                identifier: "Front end framework",
                                preInfo: "Used in:",
                                description: [
                                    "This personal website",
                                    "CS Tutorials dailyinnovation.ca"
                                ]
                            },
                            {
                                displayName: "Vuetify",
                                name: "Vuetify",
                                src: "technologies/vuetify.png",
                                identifier: "Vue component framework",
                                preInfo: "Used in:",
                                description: [
                                    "This personal website",
                                    "CS Tutorials dailyinnovation.ca"
                                ]
                            },
                            {
                                displayName: "Git",
                                name: "Git",
                                src: "technologies/git.png",
                                identifier: "Project management tool",
                                preInfo: "Used in:",
                                description: [
                                    "All my work experiences",
                                    "Many of my later projects, used extensively in collaborative side projects"
                                ]
                            },
                            {
                                displayName: "Jira",
                                name: "Jira",
                                src: "technologies/jira.png",
                                identifier: "Project management tool",
                                description: [
                                    "Used to document manual testing, report bugs and verify bug testing in Software Tester Coop at Nokia"
                                ]
                            },
                            {
                                displayName: "Confluence",
                                name: "Confluence",
                                src: "technologies/confluence.png",
                                identifier: "Project management tool",
                                description: [
                                    "Used to document data, automated testing, find documentation to self learn during internships"
                                ]
                            },
                            {
                                displayName: "Regex",
                                name: "Regex",
                                src: "technologies/regex.png",
                                identifier: "String parsing tool",
                                description: [
                                    "Used extensively to parse relevant data from router tests in Future Tech Internship at Nokia"
                                ]
                            }
                        ]
                    }, 
                    {
                        name: "Projects",
                        description: "I have made many projects that are a good reflection of my skills and interests.",
                        moreInfo: "Hover over my projects and click on more info to get a better explanation, try it out, and see the source code.",
                        items: [
                            {
                                displayName: "FredZip Text Compressor and Extractor",
                                name: "FredZip",
                                src: "zip.png",
                                identifier: "Text compressor/extractor",
                                date: "Aug 2020",
                                description: [
                                    "Compresses text files with a ~45% compression ratio using Huffman then LZ77 lossless compression algorithms",
                                    "Implemented binary trees, stacks and used hashmaps to make Huffman compression successful",
                                    "Written in C++"
                                ],
                                icons: [
                                    {
                                        link: 'https://github.com/FredLiu876/FredZip',
                                        icon: 'mdi-github',
                                        type: 'Github',
                                        info: 'See source code'
                                    }
                                ]
                            },
                            {
                                displayName: "Personal Website",
                                name: "Personal Website",
                                src: "fred.jpg",
                                identifier: "This webpage",
                                date: "Aug 2020 - Ongoing",
                                description: [
                                    "This webpage speaks for the project"
                                ],
                                icons: [
                                    {
                                        link: 'https://github.com/FredLiu876/OnlinePortfolio',
                                        icon: 'mdi-github',
                                        type: 'Github',
                                        info: 'See source code'
                                    }
                                ]
                            },
                            {
                                displayName: "Smartendance Automatic Attendance",
                                name: "Smartendance",
                                src: "smartendance.png",
                                identifier: "Automatic Attendance",
                                date: "Jan 2020 - June 2020",
                                description: [
                                    "Allows teachers to automatically take attendance by having students take picture of themselves",
                                    "Bootstrap used in frontend, MongoDB and flask in backend",
                                    "RESTful website design to communicate between frontend and backend"
                                ],
                                icons: [
                                    {
                                        link: 'https://github.com/ZhengWang26/Smartendance',
                                        icon: 'mdi-github',
                                        type: 'Github',
                                        info: 'See source code'
                                    },
                                    {
                                        link: 'https://smartendance.ca',
                                        icon: 'mdi-laptop',
                                        type: 'Visit site',
                                        info: 'smartendance.ca'
                                    }
                                ],
                            },
                            {
                                displayName: "FIRST Robotics Team 7476 Website",
                                name: "Team 7476 Website",
                                src: "lions.webp",
                                identifier: "Robotics Team Website",
                                date: "Jan 2020 - Feb 2020",
                                description: [
                                    "Led the development of former team website at eomlions7476.com",
                                    "Mentored younger members of the team on to make further improvements"
                                ],
                                icons: [
                                    {
                                        link: 'https://github.com/yourBoiGershy/LionsWebsite',
                                        icon: 'mdi-github',
                                        type: 'Github',
                                        info: 'See source code'
                                    }
                                ]
                            },
                            {
                                displayName: "Daily Innovation CS Tutorials",
                                name: "Daily Innovation",
                                src: "dailyInnovation.png",
                                identifier: "CS tutorials website",
                                date: "July 2020 - Sep 2020",
                                description: [
                                    "Please note that due to heroku changes, the tutorials stored in database are lost",
                                    "Vue & Vuetify to style and load dynamic frontend",
                                    "MongoDB & Flask in backend to store, retrieve and process tutorials",
                                    "RESTful website design to communicate between frontend and backend",
                                    "Wrote tutorials on data structures and other relevant computer science skills"
                                ],
                                icons: [
                                    {
                                        link: 'https://github.com/FredLiu876/CSTutorials',
                                        icon: 'mdi-github',
                                        type: 'Github',
                                        info: 'See source code'
                                    },
                                    {
                                        link: 'https://cstutorialsfrontend.netlify.app',
                                        icon: 'mdi-laptop',
                                        type: 'Visit site',
                                        info: 'CSTutorials'
                                    }
                                ],
                            },
                        ]
                    }, 
                    {
                        name: "Hobbies",
                        description: "Currently I only have one hobby that is easily presentable online, which is music. See my transcriptions/arrangements and my playing!",
                        moreInfo: "Hover over the hobby and click on more info to see me play my arrangements and other piano pieces.",
                        items: [
                            {
                                displayName: "Piano",
                                name: "Piano",
                                src: "music.jpg",
                                identifier: "Arranging and playing pieces",
                                description: [
                                    "Transcribe and play songs on the piano"
                                ]
                            },
                            {
                                displayName: "Violin",
                                name: "Violin",
                                src: "violin.jpg",
                                identifier: "In progress learning",
                                description: [
                                    "Always learning! Working on mastering this beautiful instrument"
                                ]
                            },
                            {
                                displayName: "Badminton",
                                name: "Badminton",
                                src: "badminton.jpg",
                                identifier: "Semi-competitive",
                                description: [
                                    "Played badminton for a long time, occasionally playing in competitive tournaments"
                                ]
                            },
                            {
                                displayName: "Running",
                                name: "Running",
                                src: "running.jpg",
                                identifier: "Long Distance",
                                description: [
                                    "Not only is it a way to relax, but also a way of pushing myself and testing my mental resilience"
                                ]
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
    .v-tabs-bar__content {
        background-color: var(--v-primary-base);
    }
    .v-tab {
        color: var(--v-secondary-darken2) !important;
    }
    .v-tab--active {
        color: var(--v-secondary-base) !important;
    }
</style>

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
    .tab-display {
        color: var(--text);
    }
    .centering-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .item-card-container {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .item-card-styles {
        background-color: #fffbc5 !important;
        text-align: left;
        overflow: hidden;
    }
    .dark-italic {
        font-style: italic;
        color: #191d20e1 !important;
    }
    .light-italic {
        font-style: italic;
        color: #191d20b0 !important;
    }
    .click-area {
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
        width: 100%;
        height: 100%;
    }
    .no-padding-bottom {
        padding-bottom: 0;
    }
    .modal-card {
        background-color: var(--v-secondary-base);
        z-index: 20;
        text-align: left;
    }
    .modal-card-text {
        color: var(--text) !important;
    }
    .icon-container {
        width: 50%;
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
</style>