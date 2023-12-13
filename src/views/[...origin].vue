<template>
  <div flex="~ col" items-center justify-center h-max>
    <div text="2xl">404</div>
    <router-link :to="{ path: params.origin, query }">
      retry: {{ params.origin }}
    </router-link>
  </div>
</template>

<script lang="ts" setup>
/**
 * 可以传入一个string范型, 会自动去匹配 .gen/typed-router.d.ts 内的类型, 通过sfc文件中的
 * <route></route>代码块配置，实现 params、path 参数类型化
 * e.g.
 *
 * <route lang="yaml">
 * name: users
 * path: /users
 * query:
 *   userType: string
 *   userId: string
 * </route>
 */
const { params, query } = useRoute<'/[...origin]'>()
</script>
