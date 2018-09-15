<template>
    <div>
        <el-row>
            <el-popover
                    v-for="folder in folders"
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    class="site-item"
                    :content="folder.url">
                <el-button size="small" type="danger" slot="reference" @click="openApp(folder.url)" plain>{{ folder.name }}</el-button>
            </el-popover>


        </el-row>
    </div>
</template>

<script>
    export default {
        name: "folder",
        data(){
            return {
                folders:[]
            }
        },
        created(){
            this.$http.get('https://www.easy-mock.com/mock/5b9cca93776e756b70ea03c0/example/folder').then((res)=>{
                if(res.status){
                    this.folders = res.data.data
                }
                console.log(res.data.data)
            })
            // alert('aaaaa')
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