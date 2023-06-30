<script setup lang="ts"></script>
<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
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
						<router-link
							to="/"
							class="navbar-brand nav-link"
							href="#"
							>Inicio</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							to="/about"
							class="nav-link active nav-item-who"
							aria-current="page"
							href="#"
							>Quienes somos?</router-link
						>
					</li>
					<li class="nav-item">
						<a class="nav-link nav-item-how" href="#"
							>Como funciona?</a
						>
					</li>
				</ul>
				<div class="d-flex justify-content-end div-btn-votation">
					<a class="nav-link nav-item-how-init nav-link" href="#"
						>Iniciar votacion</a
					>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped src="./style.css"></style>
