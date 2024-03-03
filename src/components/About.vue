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
                    I'm currently processing a massive 150TB dataset using distributed systems to improve our large language model's coding capabilities. I researched near deduplication of text using minhash locality sensitive hashing at this scale. Since the number of false positives increase linearly to the size of the dataset, I developed a novel efficient algorithm to break out false positives reducing the false positive rate in clusters from 45% to 1%.
                    `,
                    `
                    I've also made important impacts at other placements, including finding important business insights as a data scientist at Wish.
                    Here's my resume to see more:
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