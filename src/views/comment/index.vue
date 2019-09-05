<template>
  <el-card>
    <break-crumb slot="header">
      <template slot="title">评论列表</template>
    </break-crumb>
    <el-table :data="list">
      <el-table-column label="标题" prop="title" width="650"></el-table-column>
      <el-table-column :formatter="formatter" label="评论状态" prop="comment_status"></el-table-column>
      <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
      <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="cz">
          <el-button size="small" type="text">修改</el-button>
          <el-button @click="openOrclose(cz.row)" :style="{color:cz.row.comment_status?'#E6A23C':'#67C23A'}" size="small" type="text">{{cz.row.comment_status?'关闭评论':'打开评论'}}</el-button>
        </template>

      </el-table-column>
    </el-table>
  </el-card>

</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    openOrclose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否要${mess}评论?`, '提示').then(() => {
        this.$axios({
          methods: 'put',
          url: '/comments/status',
          params: { article_id: row.id },
          data: { allow_comment: !row.comment_status }
        }).then(result => {
          this.getComments()
        })
      })
    },
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComments () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results
        console.log(result)
      })
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>

</style>
