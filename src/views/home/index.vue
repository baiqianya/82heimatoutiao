<template>
  <div>
    <!-- 最外层容器 -->
    <el-container>
      <!-- 左侧导航 -->
      <el-aside width="200px" style="background:#323745">
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
        <el-main style="margin:0px; padding:0px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
