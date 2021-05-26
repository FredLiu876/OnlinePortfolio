<template lang="pug">
    div
        span.text-lg-h2.text-h3 Portfolio
        v-row.mt-4
            v-col(
                md="2"
                cols="1"
            )
            v-col(
                md="8"
                cols="10"
            )
                span.text-h6 I have important experience in this industry and developed many valuable skills in my free time. Please take a look at my experiences, skills, and the projects I've made! You can also see my interesting hobbies.
                br
                br
                span.text-subtitle-1 The items are ordered by relevance from left to right, top to bottom
</template>

<script>
    export default {
        name: "Portfolio",
        data: () => {
            return {

            }
        }
    }
</script>