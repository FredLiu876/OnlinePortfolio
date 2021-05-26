<template lang="pug">
    div
        span.text-lg-h2.text-h3 About Me
        v-row.mt-4
            v-col(
                offset="1"
                sm="3"
                cols="10"
            )
                v-img(
                    src="@/assets/fred.jpg"
                )
            v-col(
                offset="1"
                sm="6"
                cols="10"
            )
                .text-left
                    span.text-h6 Hello! My name is Fred Liu and I'm a first year computer science student at the University of Waterloo.
                br
                .text-left(
                    v-for="(paragraph, i) in paragraphs"
                )
                    br
                    span.text-body-2.pt-4 {{ paragraph }}
                .text-left
                    br
                    br
                    a(
                        href="/assets/Fred_Resume.pdf"
                        style="text-decoration: none;"
                        download
                    )
                        v-btn Resume
                            v-icon mdi-download
</template>

<script>
    export default {
        name: "About",
        data: () => {
            return {
                paragraphs: [
                    `
                    Based on the initial view of the webpage, you may have already noticed that I enjoy traveling and photography.
                    However, despite all the amazing places out there, nothing beats the humble feeling of sitting down, tuning into some music and coding!
                    `,
                    `
                    I'm very passionate about computer science, knowing that the skills I learn in this field can benefit many people.
                    I hope to use my skills to make a positive impact!
                    `,
                    `
                    To learn more, download my resume or browse the tabs below to see what I've been up to!
                    `
                ]
            }
        }
    }
</script>