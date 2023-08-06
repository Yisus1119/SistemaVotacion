<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
	<div class="container-fluid">
		<div class="div-tio-slide d-flex">
			<div>
				<Logo></Logo>
			</div>
		</div>
		<p class="text-title">NOMBRE DEL VOTANTE: [NOMBRE_VOTANTE]</p>
		<p class="text-title">RESULTADOS DE LA VOTACION</p>

		<div class="form-floating select-container">
			<select
				class="form-select"
				id="floatingSelect"
				aria-label="Floating label select example"
			>
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
			<label for="floatingSelect">Works with selects</label>
		</div>
		<div class="graphics-container">
			<div class="graphics">
				<div class="graph-colum-container">
					<div class="graph-column">
						<div class="pusher p45"></div>
					</div>
					<div class="graph-column-info">
						[NOMBRE_CANDIDATO] <br />
						[CANTIDAD_VOTOS]
					</div>
				</div>
				<div class="graph-colum-container">
					<div class="graph-column">
						<div class="pusher p54"></div>
					</div>
					<div class="graph-column-info">
						[NOMBRE_CANDIDATO] <br />
						[CANTIDAD_VOTOS]
					</div>
				</div>
				<div class="graph-colum-container">
					<div class="graph-column">
						<div class="pusher p60"></div>
					</div>
					<div class="graph-column-info">
						[NOMBRE_CANDIDATO] <br />
						[CANTIDAD_VOTOS]
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped src="./styles.css"></style>
<style scoped src="./utils.css"></style>
