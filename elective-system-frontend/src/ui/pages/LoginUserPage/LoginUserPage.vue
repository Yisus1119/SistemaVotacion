<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
	<div class="container-fluid">
		<div class="div-top-slide d-flex">
			<div>
				<Logo></Logo>
			</div>
		</div>

		<div class="div-body">
			<div class="div-body-titles">
				<p>
					Bienvenido! Por favor ingrese las informaciones solicitadas
					debajo:
				</p>
				<br />
				<p>Ingrese su cedula de identidad:</p>
			</div>
			<div class="div-body-form">
				<input type="number" />
				<div class="div-body-form-btns">
					<button @click="$router.push('user-manual')" class="btn btn-success">Leer instrucciones</button>
					<button class="btn btn-primary">Ingresar</button>
				</div>
			</div>

			<div class="elections-container">
				<h4>Elecciones activas</h4>
				<article class="elections-group">
					<section class="elections-items">
						<h5 class="elections-items-title">
							[NOMBRE ELECCIONES]
						</h5>
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
		</div>
	</div>
</template>

<style scoped src="./styles.css"></style>
