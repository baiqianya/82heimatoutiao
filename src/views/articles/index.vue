<template>
  <el-card>
    <break-crumb slot="header">
      <template slot="title">内容列表</template>
    </break-crumb>
    <el-form style="margin-left:40px">
      <el-form-item label="文章状态:">
        <el-radio-group>
          <el-radio>全部</el-radio>
          <el-radio>草稿</el-radio>
          <el-radio>待审核</el-radio>
          <el-radio>审核通过</el-radio>
          <el-radio>审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="时间选择:">
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="total-info">
        共找到1459条符合条件的内容
    </div>
    <div class="article-list">
        <div class="article-item" v-for="(item,index) in list" :key="index">
            <div class="left">
                <img src="../../assets/img/404.png" alt="">
                <div class="info">
                    <span class="title">有内鬼 交易取消</span>
                    <el-tag style="width:60px">已发表</el-tag>
                    <span class="date">2019-09-03 08:16:26</span>
                </div>
            </div>
            <div class="right">
                <span><i class="el-icon-edit"></i>修改</span>
                <span><i class="el-icon-delete"></i>删除</span>
            </div>
        </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style lang="less" scoped>
    .total-info{
        border-bottom: 1px dashed #cccccc;
        padding: 15px 0;
        color: #323745;
        font-size: 14px;
    }
    .article-list{
        .article-item{
            display: flex;
            justify-content: space-between;
            padding: 15px 0;
            border-bottom: 1px solid #f2f3f5;
            .left{
                display: flex;
                .info{
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    margin-left:10px;
                    justify-content: space-around;
                    .title{
                        color: #333;
                        font-size: 14px;
                    }
                    .date{
                        color: #999;
                        font-size: 12px;
                    }
                }
                img{
                    width: 180px;
                    height: 100px;
                }
            }
            .right{
                font-size: 12px;
                span{
                    margin-right: 8px;
                    cursor: pointer;
                    color: #333;
                }
            }
        }
    }
</style>
