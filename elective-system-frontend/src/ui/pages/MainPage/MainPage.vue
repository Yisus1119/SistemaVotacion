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
				<div>
					<img
						src="../../../assets/vectors/precision.png"
						alt="IMG"
					/>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div>
					<img
						src="../../../assets/vectors/participacion.png"
						alt="IMG"
					/>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div>
					<img
						src="../../../assets/vectors/flexibilidad.png"
						alt="IMG"
					/>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</article>
		</div>
	</div>
</template>

<style scoped src="./styles.css"></style>
