<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
	<div class="container-fluid">
		<div class="div-top-slide d-flex">
			<div>
				<Logo></Logo>
			</div>
			<div class="div-top-slide-column">
				<p class="animate__animated animate__fadeInDown">Bienvenido al nuevo</p>
				<p class="animate__animated animate__fadeInDown">
					Sistema Digital de Gestión y Procesamiento de Votos Electorales
				</p>
			</div>
		</div>
		<hr />

		<div class="div-body">
			<p>
				"El voto electrónico: un camino hacia la democracia del siglo
				XXI, donde la tecnología une a los ciudadanos en una voz
				electrónica de cambio y empoderamiento."
			</p>
			<article class="div-body-logos-container">
				<div class="div-body-logos-container-item">
					<img src="../../../assets/vectors/Presition.svg" alt="IMG" width="200" height="200" />
					<p class="div-body-logos-container-item-text">
						Precisión y velocidad
					</p>
				</div>
				<div class="div-body-logos-container-item">
					<img src="../../../assets/vectors/Participation.svg" alt="IMG" width="200" height="200" />
					<p class="div-body-logos-container-item-text">
						Mayor participación
					</p>
				</div>
				<div class="div-body-logos-container-item">
					<img src="../../../assets/vectors/Flexibility.svg" alt="IMG" width="200" height="200" />
					<p class="div-body-logos-container-item-text">
						Flexibilidad y adaptabilidad
					</p>
				</div>
			</article>

			<p class="div-body-top-text">
				¿Qué esperas para unirte a esta revolución digital?
			</p>
		</div>
	</div>
</template>

<style scoped src="./styles.css"></style>
