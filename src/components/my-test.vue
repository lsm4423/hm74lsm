<template>
    <div class="container">
        <p><slot name="content" :test="innerData"></p>
        <p><slot name="foot">底部</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      innerData: '组件内部数据'
    }
  }
}
</script>

<style scoped lang="less">

</style>
