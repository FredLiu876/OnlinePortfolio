<template lang="pug">
    div
        span.text-lg-h2.text-h3 About Me
        v-row.mt-4
            v-col(
                offset="1"
                sm="3"
                cols="10"
            )
                v-img.default(
                    src="@/assets/fred.jpg"
                    :class="scrolledIn ? 'slide-in-from-left':''"
                )
            v-col(
                offset="1"
                sm="6"
                cols="10"
            )
                .text-left
                    span.text-h6 Hello! I'm a computer science student at the University of Waterloo, graduating in 2025.
                br
                .fade-in-section(
                    :class="scrolledIn ? 'is-visible-delay-2':''"
                )
                    .text-left(
                        v-for="(paragraph, i) in paragraphs"
                    )
                        br
                        span.text-subtitle-1.pt-4 {{ paragraph }}
                    .text-left
                        br
                        br
                        a(
                            href="/Fred_Resume.pdf"
                            style="text-decoration: none;"
                            download
                        )
                            v-btn Resume
                                v-icon mdi-download
</template>

<script>
    export default {
        name: "About",
        props: {
            scrolledIn: {
                type: Boolean,
                required: true
            }
        },
        data: () => {
            return {
                paragraphs: [
                    `
                    I love working in technology. There are so many challenging problems to solve, interesting cutting-edge projects to work on and ways to make impact. If you have anything to share, I'm always down to learn something new.
                    `,
                    `
                    I also value balance in all aspects of life, but there's so much about me that I can't fit in one page! To learn more about me, feel free to see my full resume which includes my hobbies too!
                    `
                ]
            }
        }
    }
</script>

<style scoped>
    .default {
        transform: translateX(-100%);
    }
    .slide-in-from-left {
        transform: translateX(0%) !important;
        transition: transform 2s ease;
    }
    .fade-in-section.is-visible-delay-2 {
        opacity: 1;
        transition-delay: 1s;
    }
</style>