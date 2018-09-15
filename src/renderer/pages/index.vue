<template>
    <div>
        index
    </div>
</template>

<script>
    export default {
        name: "index",
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