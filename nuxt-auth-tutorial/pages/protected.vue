<template>
  <h1>Protected Page</h1>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth" });
</script>