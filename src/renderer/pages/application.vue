<template>
    <div>
        bbbbbbbbbbbbbbbbbbb
        <div v-for="application in applications" @click="openApp(application.path)">
            <img :src="application.icon" :alt="application.name">
            <div>{{ application.name }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "application",
        data(){
            return {
                applications: []
            }
        },
        created(){
            this.applications = [
                {
                    name: "QQ",
                    icon: require("@/assets/images/icons/a.jpg"),
                    path: "D:\\WeChat\\WeChat.exe"
                }, {
                    name: "QQ",
                    icon: require("@/assets/images/icons/a.jpg"),
                    path: "D:\\WeChat\\WeChat.exe"
                },
            ]
        },
        methods: {
            openApp(path){
                this.$electron.shell.openItem(path)
            }
        }
    }
</script>

<style scoped>

</style>