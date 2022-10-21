<script setup>
import { Basketball, Location } from "@element-plus/icons-vue";
import { RouterLink } from "vue-router";

import { ref } from "vue";

const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div id="page-header-wrapper">
    <div id="menu-collapse-button">
      <el-icon @click="isCollapse = !isCollapse"><Basketball /></el-icon>
      <router-link to="/">
        <span class="side-logo" :class="{ 'd-block': !isCollapse }"
          >Pokedex</span
        >
      </router-link>
    </div>
    <el-menu
      id="main-side-menu"
      text-color="#FFF"
      active-text-color="#FFF"
      background-color="#FB1B1B"
      mode="vertical"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <router-link to="/pokemons">
        <el-menu-item index="1">
          <el-icon><location /></el-icon>
          <template #title>Pokemons</template>
        </el-menu-item>
      </router-link>
      <!-- <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
