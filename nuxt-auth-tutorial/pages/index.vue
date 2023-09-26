<template>
  <div>
    <button v-if="loggedIn" @click="signOut()">SiginOut</button>
    <button v-else @click="signIn('github')">SiginIn</button>
  </div>
</template>
<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();

const loggedIn = computed(() => status.value === "authenticated");
</script>