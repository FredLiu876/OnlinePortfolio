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