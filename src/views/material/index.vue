<template>
  <el-card class="material">
    <break-crumb slot="header">
      <template slot="title">素材管理</template>
    </break-crumb>
    <el-upload :http-request="uploadImg" action="" class="upload-btn">
      <el-button type="primary">上传图片</el-button>
    </el-upload>
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <div class="card-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i @click="collectOrCancel(item)" :style="{color:item.is_collected?'red':''}" class="el-icon-star-on"></i>
              <i @click="delImg(item)" class="el-icon-delete"></i>
            </el-row>
          </el-card>
        </div>
        <el-card>
          <el-row type="flex" justify="space-around">
            <el-pagination
              @current-change="changePage"
              :current-page="page.page"
              :page-size="page.pageSize"
              :total="page.total"
              background
              layout="prev, pager, next"
            ></el-pagination>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <div class="card-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
        <el-row type="flex" justify="space-around">
          <el-pagination
            @current-change="changePage"
            :current-page="page.page"
            :page-size="page.pageSize"
            :total="page.total"
            background
            layout="prev, pager, next"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    uploadImg (params) {
      let obj = new FormData()
      obj.append('image', params.file)
      this.$axios({
        url: '/user/images',
        method: 'post',
        data: { image: params.file }
      }).then(() => {
        this.getMaterial()
      })
    },
    collectOrCancel (item) {
      let mess = item.is_collected ? '取消' : ''
      this.$confirm(`您确定要${mess}收藏这张图片吗?`, '提示').then(() => {
        this.$axios({
          url: `user/images/${item.id}`,
          method: 'put',
          data: { collect: !item.is_collected }
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    delImg (item) {
      this.$confirm('您确定要删除此图片吗?,提示').then(() => {
        this.$axios({
          url: `user/images/${item.id}`,
          method: 'delete'
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    changePage (newPage) {
      this.page.page = newPage
      this.getMaterial()
    },
    changeTab () {
      this.page.page = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.page,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect'
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.material {
  .upload-btn{
    position: absolute;
    right: 10px;
    margin-top: -10px;
    z-index: 9999;
  }
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .img-card {
      width: 180px;
      height: 200px;
      margin: 36px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .operate {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        font-size: 20px;
        height: 34px;
        background-color: grey;
      }
    }
  }
}
</style>
