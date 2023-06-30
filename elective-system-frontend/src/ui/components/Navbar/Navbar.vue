<script setup lang="ts"></script>
<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Inicio</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse flex-wrap" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#"
							>Quienes somos?</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Como funciona?</a>
					</li>
				</ul>
				<div class="d-flex justify-content-end div-btn-votation">
					<a class="nav-link" href="#">Iniciar votacion</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped src="./style.css"></style>
