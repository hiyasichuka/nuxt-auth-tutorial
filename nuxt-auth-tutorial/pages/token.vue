<script setup lang="ts">
definePageMeta({ auth: false });
const headers = useRequestHeaders(["cookie"]) as HeadersInit;
console.log(headers);
const { data: token } = await useFetch("/api/token", { headers });
</script>

<template>
  <pre>{{ headers }}</pre>
  <pre>{{ token || "pls login." }}</pre>
</template>