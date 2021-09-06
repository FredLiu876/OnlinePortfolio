<template lang="pug">
    div
        span.anchor-tag(
            :id="name.toLowerCase()"
        )
        v-container.py-16.container-styles(
            v-if="!isBackgroundImage"
            fluid
            :style="{color: 'var('+color+')', backgroundColor: 'var('+backgroundColor+')'}"
            ref="container"
        )
            slot
        v-container.py-16.background-image-styles(
            v-else
            fluid
            ref="background"
        )
            slot
</template>

<script>
    export default {
        name: "Container",
        props: {
            name: {
                required: true,
                type: String
            },
            color: {
                required: false,
                type: String
            },
            backgroundColor: {
                required: false,
                type: String
            },
            isBackgroundImage: {
                required: true,
                type: Boolean
            },
            backgroundImage: {
                required: false,
                type: String
            }
        }
    }
</script>

<style scoped>
    .container-styles {
        
    }

    .background-image-styles {
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 0.7)), url('../assets/2.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

</style>