<template>
  <div>root</div>
</template>

<script setup lang="ts"></script>

<route lang="yaml">
# root navigator 通常用来做鉴权和路由拦截
path: /
redirect:
  name: /home
</route>
