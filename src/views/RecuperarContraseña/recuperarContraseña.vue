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

	<div class="forgotPassword">
		<div
			style="
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			">
			<v-icon
				style="
					background-color: #1e40af;
					width: 600px;
					height: 84px;
					border-top-left-radius: 50px;
					border-top-right-radius: 50px;
				"
				>mdi-security</v-icon
			>
			<div
				style="
					background-color: #1e40af;
					width: 600px;
					border-bottom-left-radius: 50px;
					border-bottom-right-radius: 50px;
					margin-top: -35px;
				">
				<h1
					style="text-align: center; margin-top: 32px; color: white"
					class="font-weight-black text-h6">
					RECUPERAR CONTRASEÑA
				</h1>
				<v-divider
					:thickness="1"
					class="border-opacity-100"
					style="width: 500px; margin: auto"></v-divider>
				<p
					style="
						width: 450px;
						margin: auto;
						margin-top: 15px;
						color: #ecfeff;
						text-align: center;
					"
					class="font-italic font-weight-thin">
					En esta opción te ayudaremos a reestablecer tu contraseña, debes
					proporcionarnos la información necesaria para tal propósito.
				</p>
				<v-text-field
					style="height: 100px"
					class="mx-auto mt-4"
					width="400"
					label="Usuario"
					variant="solo"
					v-model="username"></v-text-field>
				<v-text-field
					v-model="password"
					style="height: 100px"
					class="mx-auto custom-text-field"
					width="400"
					label="Contraseña"
					variant="solo"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					density="compact"
					prepend-inner-icon="mdi-lock-outline"
					@click:append-inner="visible = !visible"
					:rules="[passwordRule]"></v-text-field>
				<v-text-field
					v-model="password2"
					style="height: 100px; margin-bottom: 50px"
					class="mx-auto custom-text-field"
					width="400"
					label="Confirmar nueva contraseña"
					variant="solo"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					density="compact"
					prepend-inner-icon="mdi-lock-outline"
					@click:append-inner="visible = !visible"
					:rules="[confirmPasswordRule]"></v-text-field>
			</div>
			<v-hover>
				<template v-slot:default="{ isHovering, props }">
					<v-btn
						@click="updatePassword"
						style="align-self: center; margin-top: -50px"
						v-bind="props"
						:color="isHovering ? '#14b8a6' : undefined"
						>Actualizar Contraseña</v-btn
					>
				</template>
			</v-hover>
		</div>
	</div>
</template>

<style>
	.forgotPassword {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #111827; /* Color de fondo para toda la página */
	}
	.custom-text-field .v-messages__message {
		font-size: 12px; /* Ajusta el tamaño de la fuente */
		color: #dc2626; /* Cambia el color del texto de error */
		text-align: center;
		margin-top: -20px; /* Centra el texto */
	}
</style>

<script src="./recuperarContraseña.js"></script>
