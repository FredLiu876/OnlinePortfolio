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
                span.text-h6 Hello! My name is Fred Liu and I'm a first year computer science student at the University of Waterloo.
                br
                .text-left(
                    v-for="(paragraph, i) in paragraphs"
                )
                    br
                    span.text-body-2.pt-4 {{ paragraph }}
                .text-left
                    br
                    span.text-body-2 To learn more, download my resume or scroll down!
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
                    I'm very passionate about computer science, knowing that I can make apps that benefit others from just my laptop.
                    I hope to use my skills to make a positive impact!
                    `
                ]
            }
        }
    }
</script>