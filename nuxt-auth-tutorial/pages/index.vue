<template>
  <div>
    <button v-if="loggedIn" @click="signOut()">SiginOut</button>
    <button v-else @click="signIn('github')">SiginIn</button>
    <pre>{{ data.user }}</pre>
  </div>
</template>
<script setup lang="ts">
const { status, signIn, signOut } = useAuth();

const loggedIn = computed(() => status.value === "authenticated");

const { data } = await useFetch("/api/me");
</script>