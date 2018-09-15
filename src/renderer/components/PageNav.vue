<template>
    <div>
        <nav class="nav-group">
            <h5 class="nav-group-title">常用工具</h5>
            <router-link to="/index" class="nav-group-item" active-class="active">
                <span class="icon icon-home"></span>
                <span>Index</span>
            </router-link>
            <router-link to="/application" class="nav-group-item" active-class="active">
                <span class="icon icon-monitor"></span>
                <span>Application</span>
            </router-link>
            <router-link to="/website" class="nav-group-item" active-class="active">
                <span class="icon icon-link"></span>
                <span>Website</span>
            </router-link>
            <router-link to="/folder" class="nav-group-item" active-class="active">
                <span class="icon icon-folder"></span>
                <span>Folders</span>
            </router-link>
            <router-link to="/file" class="nav-group-item" active-class="active">
                <span class="icon icon-docs"></span>
                <span>Files</span>
            </router-link>
        </nav>
        <nav class="nav-group">
            <h5 class="nav-group-title">网易云音乐</h5>
            <router-link to="/index" class="nav-group-item" active-class="active">
                <span class="icon icon-home"></span>
                <span>Index</span>
            </router-link>
            <router-link to="/application" class="nav-group-item" active-class="active">
                <span class="icon icon-monitor"></span>
                <span>Application</span>
            </router-link>
            <router-link to="/website" class="nav-group-item" active-class="active">
                <span class="icon icon-link"></span>
                <span>Website</span>
            </router-link>
            <router-link to="/folder" class="nav-group-item" active-class="active">
                <span class="icon icon-folder"></span>
                <span>Folders</span>
            </router-link>
            <router-link to="/file" class="nav-group-item" active-class="active">
                <span class="icon icon-docs"></span>
                <span>Files</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "PageNav",
        data(){
            return {
            }
        },
        created(){
        }
    }
</script>

<style scoped>

</style>