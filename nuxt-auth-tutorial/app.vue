<template>
  <div>
    <button v-if="loggedIn" @click="handleSignOut">SiginOut</button>
    <button v-else @click="handleSignIn">SiginIn</button>
  </div>
</template>
<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();

const loggedIn = computed(() => status.value === "authenticated");

async function handleSignIn() {
  await signIn("github");
}

async function handleSignOut() {
  await signOut();
}
</script>