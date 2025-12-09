<template>
  <div>
    <h1>Home</h1>
    <!-- 跳转至alarmDetail -->
    <button @click="goToAlarmDetail">Go to Alarm Detail</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAlarmDetail = () => {
  router.push('/alarmDetail')
}
</script>