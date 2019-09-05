<template>
  <el-card>
    <break-crumb slot="header">
      <template slot="title">评论列表</template>
    </break-crumb>
    <el-table :data="tableData">
      <el-table-column label="标题" prop="name" width="650"></el-table-column>
      <el-table-column label="评论状态" prop="date"></el-table-column>
      <el-table-column label="总评论数" prop="address"></el-table-column>
      <el-table-column label="粉丝评论数" prop="name"></el-table-column>
      <el-table-column label="操作" prop="name"></el-table-column>
    </el-table>
  </el-card>

</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
