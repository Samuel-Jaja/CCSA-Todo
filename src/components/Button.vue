<template>
  <button @click="doSomething" :style="{ background: buttonStyle }" class="btn">{{value}}</button>
</template>

<script>
export default {
    props: {
        value: {
            default: "Submit",
            type: String,
        },
        style: {
            type: String,
        }
    },
    computed: {
        buttonStyle() {
            if (this.style === "Primary") {
                return "#0069D9"
            } else if (this.style === "Danger") {
                return "#C82333"
            } else if (this.style === "Success") {
                return "#218838"
            } else {
                return "#5A6268"
            }
        }
    },
    methods: {
        doSomething() {
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped>
    .btn {
        border: none;
        border-radius: 4px;
        color: #FFFFFF;
        cursor: pointer;
        padding: 7px 20px;
    }
</style>