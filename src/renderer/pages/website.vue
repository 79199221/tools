<template>
    <div>
        <el-row>
            <el-popover
                    v-for="site in sites"
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    class="site-item"
                    :content="site.url">
                <el-button size="small" type="danger" slot="reference" @click="openApp(site.url)" plain>{{ site.name }}</el-button>
            </el-popover>


        </el-row>
    </div>
</template>

<script>
    export default {
        name: "website",
        data(){
            return {
                sites:[]
            }
        },
        created(){
            this.$http.get('https://www.easy-mock.com/mock/5b9cca93776e756b70ea03c0/example/website').then((res)=>{
                if(res.status){
                    this.sites = res.data.data
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
    .site-item {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>