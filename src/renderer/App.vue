<template>
    <div id="app">
        <page-top class="page-top"></page-top>
        <div class="window">
            <div class="window-content">
                <div class="pane-group">
                    <div class="pane-sm sidebar">
                        <page-nav></page-nav>
                        <page-nav></page-nav>
                    </div>
                    <div class="pane">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <page-bottom class="page-bottom"></page-bottom>
    </div>
</template>

<script>
    import PageTop from '@/components/PageTop'
    import PageBottom from '@/components/PageBottom'
    import PageNav from '@/components/PageNav'
    export default {
        name: 'tools',
        components: { PageTop, PageBottom, PageNav },
        created(){
            console.log(PageTop)
        }
  }
</script>

<style scoped>
    .page-top {
        position: fixed;
        top: 0;
        width: 100%;
    }
    .page-bottom {
        position: fixed;
        bottom:0;
        width: 100%;
    }
    .window {
        top: 20px;
        bottom: 20px;
    }

</style>
