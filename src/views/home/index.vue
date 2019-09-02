<template>
  <div>
    <!-- 最外层容器 -->
    <el-container>
      <!-- 左侧导航 -->
      <el-aside width="200px">
        <layout-aside>
        </layout-aside>
      </el-aside>
      <!-- 右侧 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <layout-header>
          </layout-header>
        </el-header>
        <!-- 主要区域 -->
        <el-main>主体</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>

<style>
</style>
