<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title> My Kaban-Notes App</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <div class="destk-top-btn d-none d-sm-flex">
        <v-btn @click="router.push('/notes')" target="_blank" text>
          <span class="mr-2">Notas</span>
        </v-btn>
        <v-btn @click="router.push('/kaban')" target="_blank" text>
          <span class="mr-2">Kaban</span>
        </v-btn>
        <v-btn @click="router.push('/')" target="_blank" text>
          <span class="mr-2">Home</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      location="top"
      temporary
      style="height: 180px"
    >
      <v-list nav dense>
        <v-list-item
          @click="router.push(item.toRoute)"
          v-bind:key="index"
          v-for="(item, index) in items"
        >
          <v-list-item-title class="v-list-item-title">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { navbarItens } from './contants/navigations';

const router = useRouter();
const drawer = ref(false);
const items = ref(navbarItens);
</script>

<style scoped>
.v-list-item-title {
  cursor: pointer;
}
</style>
