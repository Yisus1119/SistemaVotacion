<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
	<div class="container-fluid d-flex flex-column min-vh-100">
		<div class="div-top-slide d-flex">
			<div>
				<Logo></Logo>
			</div>
			<div class="div-top-slide-column">
				<p>Bienvenido al nuevo</p>
				<p>
					Sistema digital de gestion y procesamiento de votos
					electorales
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
					<img
						src="../../../assets/vectors/Presition.svg"
						alt="IMG"
						width="200"
						height="200"
					/>
					<p class="div-body-logos-container-item-text">
						Precision y velocidad
					</p>
				</div>
				<div class="div-body-logos-container-item">
					<img
						src="../../../assets/vectors/Participation.svg"
						alt="IMG"
						width="200"
						height="200"
					/>
					<p class="div-body-logos-container-item-text">
						Mayor participacion
					</p>
				</div>
				<div class="div-body-logos-container-item">
					<img
						src="../../../assets/vectors/Flexibility.svg"
						alt="IMG"
						width="200"
						height="200"
					/>
					<p class="div-body-logos-container-item-text">
						Flexibilidad y adaptabilidad
					</p>
				</div>
			</article>

			<p class="div-body-top-text">
				Que esperas para unirte a esta revolucion digital?
			</p>
		</div>

		<footer
			style="
				margin-top: auto;
				background-color: #98d8aa;
				width: 100%;
				height: 80px;
			"
		></footer>
	</div>
</template>

<style scoped src="./styles.css"></style>
