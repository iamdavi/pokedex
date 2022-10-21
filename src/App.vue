<script setup>
import { RouterView } from "vue-router";
import PageHeader from "@/components/layout/PageHeader.vue";
</script>

<template>
  <div id="layout-display">
    <PageHeader />
    <el-row class="w-100">
      <el-col class="p-0-24">
        <RouterView />
      </el-col>
    </el-row>
  </div>
</template>
