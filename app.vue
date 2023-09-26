<template>
  <div>
    <UIButton v-if="loggedIn" @click="handleSignOut">Sign Out</UIButton>
    <UIButton v-else @click="handleSignIn">Sign In</UIButton>
  </div>
</template>

<script setup lang="ts">
const { status, signIn, signOut } = useAuth();

const loggedIn = computed(() => status.value === "authenticated");
async function handleSignIn() {
  await signIn("github");
}
async function handleSignOut() {
  await signOut();
}
</script>