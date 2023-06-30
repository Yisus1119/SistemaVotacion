<script setup lang="ts">
import Navbar from "./ui/components/Navbar/Navbar.vue";
import Footer from "./ui/components/Footer/Footer.vue";
</script>
<template>
	<Navbar></Navbar>
	<div class="div-body-container-master">
		<router-view></router-view>
	</div>
	<Footer></Footer>
</template>

<style scoped>
.div-body-container-master {
	min-height: 86.2vh;
	display: flex;
	flex-direction: column;
}
</style>
