<template lang="pug">
    div
        span.text-lg-h2.text-md-h3.text-sm-h4.text-h5 I would be glad to hear from you!
        br
        br
        span.text-lg-h5.text-sm-h6.text-body-1 Contact me using the methods below:
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
                .icon-container.mb-12
                    v-tooltip(
                        bottom
                        v-for="(contact, index) in contactIcons"
                        :key="index"
                    )
                        template(
                            v-slot:activator="{ on, attrs}"
                        )
                            v-btn.background-white(
                                icon
                                v-on="on"
                                v-bind="attrs"
                                :href="contact.link"
                                target="_blank"
                            )
                                v-icon(
                                    size="50px"
                                    color="secondary"
                                ) {{ contact.icon }}
                        span {{ contact.info }}
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
                contactIcons: [
                    {
                        icon: 'mdi-github',
                        info: 'FredLiu876',
                        link: 'https://github.com/FredLiu876'
                    },
                    {
                        icon: 'mdi-email',
                        info: 'fredliu876@gmail.com',
                        link: 'mailto:fredliu876@gmail.com'
                    },
                    {
                        icon: 'mdi-linkedin',
                        info: 'Fred Liu',
                        link: 'https://ca.linkedin.com/in/fred-liu-a457a518a'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .container {
        color: #FFFDE7;
        background-color: #1976D2;
    }
    .icon-container {
        display: flex;
        justify-content: space-around;
    }
</style>