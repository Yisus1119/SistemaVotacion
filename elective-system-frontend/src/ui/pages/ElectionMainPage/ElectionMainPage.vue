<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";

import { ref, onMounted } from "vue";
const nombreVotante = ref("");
onMounted(() => {
	fetch("http://localhost:3000/api/authenticate/", {
		method: "POST",
		headers: {
			"Content-Type": 'application/json',
		},
		body: JSON.stringify({ dni: "232114521" })
	})
		.then(e => {
			e.json().then(o => {
				nombreVotante.value = o.data[0].name;
			})
		})
})

</script>

<template>
	<div class="container-fluid">
		<div class="div-tio-slide d-flex">
			<div>
				<Logo></Logo>
			</div>
		</div>
		<p class="text-title">Bienvenido al sistema {{ nombreVotante }}</p>

		<div class="elections-container">
			<h4>Eleccion proxima</h4>
			<article class="elections-group">
				<section class="elections-items">
					<h5 class="elections-items-title">
						NO HAY NINGUNA ELECCION PROXIMA EN ESTOS MOMENTOS
					</h5>

					<div class="elections-items-times">
						<h5>LA ELECCION [NOMBRE_ELECCION] COMENZARA EN:</h5>
						<div class="items-time-group">
							<div class="item-time">
								<div class="item-number">00</div>
								<div class="item-detail">HORAS</div>
							</div>
							<div class="item-time">
								<div class="item-number">00</div>
								<div class="item-detail">MINUTOS</div>
							</div>
							<div class="item-time">
								<div class="item-number">00</div>
								<div class="item-detail">SEGUNDOS</div>
							</div>
						</div>
					</div>
				</section>
			</article>
		</div>

		<div class="elections-container">
			<h4>Elecciones futuras</h4>
			<article class="elections-group">
				<section class="elections-items">
					<h5 class="elections-items-title">[NOMBRE ELECCIONES]</h5>
					<div class="elections-items-dates">
						<div class="elections-items-element-date">
							<p>Inicio</p>
							<input type="date" name="" id="" />
						</div>
						<div class="elections-items-element-date">
							<p>Fin</p>
							<input type="date" name="" id="" />
						</div>
					</div>
				</section>
			</article>
		</div>

		<button class="btn btn-primary btn-action">Ir a votacion</button>
	</div>
</template>

<style scoped src="./style.css"></style>
