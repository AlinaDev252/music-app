<template>
	<!-- eslint-disable-next-line vue/max-attributes-per-line -->
	<app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
  <!-- Gost component registered by Vue, it doesn't render anything by its own. We can use it for loading a component dinamically -->
       <component :is="Component"></component>
    </transition>
  </router-view>

  <app-player />

	<auth-modal />
</template>

<script>
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';
import AppPlayer from './components/Player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AppPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
  }

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
