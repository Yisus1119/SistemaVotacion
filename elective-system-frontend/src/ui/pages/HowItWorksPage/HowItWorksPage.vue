<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
	<div class="container-fluid">
		<div class="div-tio-slide d-flex">
			<div>
				<Logo></Logo>
			</div>
			<div class="div-top-slide-column">
				<div class="titleContainer">
					<img class="howItWork" src="../../../assets/vectors/como funciona.png" alt="team" />

					<h1 class="principalTitle animate__animated animate__fadeInTopLeft">¿Cómo funciona?</h1>
				</div>

				<br>

				<p class="aboutDescription"><b>
						A continuación, encontrarás un manual de instrucciones detallado sobre cómo utilizar
						nuestro sistema de votación digital. Este manual te guiará a través de los pasos necesarios
						para aprovechar al máximo todas las funcionalidades y características del sistema.
						<br>
						<br>
						Para desplegar el manual, simplemente presiona el botón que se encuentra debajo y podrás acceder
						a toda la información necesaria para comprender y utilizar el sistema de votación digital
						de manera efectiva y eficiente.
						<br>
						<br>
						¡Disfruta de tu experiencia de votación digital y no dudes en consultar el manual en caso de tener
						alguna
						pregunta o duda durante el proceso!
					</b>
				</p>
				<div class="buttonContainer">
					<button type="button" class="btn btn-secondary manualButton">Desplegar manual</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped src="./style.css"></style>