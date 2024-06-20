<template class="menu">
	<v-app-bar
		style="
			background: rgb(228, 0, 0);
			background: linear-gradient(
				90deg,
				rgba(228, 0, 0, 1) 3%,
				rgba(0, 40, 85, 1) 5%,
				rgba(228, 0, 0, 1) 10%,
				rgba(29, 35, 74, 1) 13%,
				rgba(228, 0, 0, 1) 17%,
				rgba(0, 40, 85, 1) 20%
			);
		"
		dense
		dark
		height="80">
		<v-container fluid>
			<v-row align="center" justify="end" no-gutters>
				<v-col cols="auto">
					<v-speed-dial location="left center" transition="slide-x-transition">
						<template v-slot:activator="{ props: activatorProps }">
							<v-fab
								v-bind="activatorProps"
								size="large"
								icon="mdi-account"
								style="margin-right: 100px"></v-fab>
						</template>

						<v-btn key="1" icon="mdi-logout" @click="logout"></v-btn>
					</v-speed-dial>
				</v-col>
				<v-col cols="auto">
					<v-img src="" max-height="100" max-width="50"></v-img>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
	<div class="menu">
		<v-container fluid>
			<v-row align="center" justify="center" style="height: 80vh">
				<v-col cols="auto">
					<v-btn
						size="x-large"
						elevation="8"
						class="custom-btn"
						@click="registrarUsuario"
						style="width: 350px; height: 300px">
						Registrar Usuario
						<v-icon style="margin-left: 10px">mdi-account-plus</v-icon>
					</v-btn>
				</v-col>

				<v-col cols="auto">
					<v-btn
						size="x-large"
						elevation="8"
						class="custom-btn"
						@click="homeia"
						style="width: 350px; height: 300px">
						Administrar I.A.
						<v-icon style="margin-left: 10px">mdi-robot-confused</v-icon>
					</v-btn>
				</v-col>

				<v-col cols="auto">
					<v-btn
						@click="listarUsuario"
						size="x-large"
						elevation="8"
						class="custom-btn"
						style="width: 350px; height: 300px">
						Lista Usuarios
						<v-icon style="margin-left: 10px">mdi-playlist-edit</v-icon>
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
	<v-footer color="#233559" app height="60">
		<v-row align="center" justify="center">
			<v-col cols="12" class="text-subtitle-2 text-center">
				&copy; 2024 Routing Map Todos los derechos reservados.
			</v-col>
		</v-row>
	</v-footer>
</template>
<script src="./Menu.js"></script>
<style>
	.custom-btn {
		transition: background-color 0.3s ease;
		border-radius: 50px; /* Para una transición suave */
	}

	.custom-btn:hover {
		background-color: #79a6da; /* Utiliza una variable CSS para el color de hover */
	}
	.menu {
		background-image: url("../../assets/fondofinal.jpg");
		background-size: cover;
		background-position: center;
		position: fixed;
		height: 100%;
		width: 100%;
	}
</style>
