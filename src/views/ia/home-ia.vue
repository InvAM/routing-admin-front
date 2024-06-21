<template>
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
	<div style="background-color: #334155; height: 100%" class="homeia">
		<div
			style="
				width: 500px;
				height: 720px;
				background-color: #757575;
				margin-left: -66%;
				margin-top: -5%;
				border-radius: 20px;
			">
			
		</div>
	</div>
</template>
<style>
	.homeia {
		display: flex;
		justify-content: center; /* Centra el contenido horizontalmente */
		align-items: center; /* Centra el contenido verticalmente */
		min-height: 100vh; /* Establece la altura mínima como el 100% de la altura de la ventana */
		background-color: #334155;
	}
</style>
<script src="./home-ia.js"></script>
