<template>
	<div class="login-container">
		<v-sheet class="ma-12 mt-16" width="350" style="background-color: #0a0909">
			<p
				class="mb-12 text-h3 font-weight-bold"
				style="text-align: center; color: #ffffff">
				Bienv
				<span style="color: #008fff; margin-left: -12px">enido</span>
			</p>
			<v-btn
				size="small"
				class="text-none mb-5 mr-8"
				variant="plain"
				style="margin-left: -12px; color: white"
				@click="registrarse"
				>¿No tiene una cuenta? Registrarse aqui</v-btn
			>

			<v-form fast-fail @submit.prevent>
				<div class="text-subtitle-2 mb-2" style="color: white">
					Nombre de usuario
				</div>
				<v-text-field
					variant="solo"
					v-model="username"
					style="color: white"></v-text-field>
				<div class="text-subtitle-2 mb-2" style="color: white">Contraseña</div>
				<v-text-field
					v-model="password"
					style="height: 80px; color: white"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					density="compact"
					prepend-inner-icon="mdi-lock-outline"
					@click:append-inner="visible = !visible"
					:rules="[passwordRule]"
					variant="solo"></v-text-field>

				<v-btn
					class="mt-2 mb-2"
					type="submit"
					block
					style="color: white; background-color: #002855"
					@click="iniciarSesion"
					>Ingresar</v-btn
				>
				<v-row v-if="mensajeError" align="center">
					<v-col cols="12">
						<v-alert type="error" class="mt-4">
							{{ mensajeError }}
						</v-alert>
					</v-col>
				</v-row>
			</v-form>
			<v-btn
				style="margin-left: 60px; color: white"
				variant="plain"
				class="text-none"
				@click="recuperar_contraseña">
				¿Olvidaste tu contraseña?
			</v-btn>
		</v-sheet>
		<div class="login-image">
			<v-img
				lazy-src="../../assets/logoSI.png"
				src="../../assets/logoSI.png"
				class="overlay-image">
				<template v-slot:placeholder>
					<div class="d-flex align-center justify-center fill-height">
						<v-progress-circular
							color="grey-lighten-4"
							indeterminate></v-progress-circular>
					</div>
				</template>
			</v-img>
		</div>

		<v-dialog v-model="dialogError" :width="500">
			<v-card color="#ec4a4a">
				<v-card-title>
					<span class="mx-auto" style="color: white"> ¡Verifique! </span>
				</v-card-title>
				<v-card-text>
					<v-alert
						v-if="mensaje !== ''"
						color="white"
						:type="typemsg"
						outlined
						>{{ mensaje }}</v-alert
					>
				</v-card-text>
				<v-card-actions style="display: flex; justify-content: center">
					<v-btn
						style="background-color: #033076; color: #ffffff"
						@click="cerrar">
						Cerrar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<style scoped>
	.login-container {
		display: flex;
		height: 100vh;
		background-color: #0a0909;
		/* La altura de la pantalla completa */
	}

	.login-container .login-image {
		flex: 2;
		/* Ocupa el espacio disponible */
		position: relative;
		background-image: url("../../assets/Fondo_2.jpg");
		width: 100%;
		height: 100%;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login-container .title {
		color: white;
	}

	.overlay-image {
		position: absolute;
		width: 900px;
		/* Ajusta el tamaño según sea necesario */
		height: 900px;
		margin-top: -100px;
	}

	.login-form {
		flex: 1;
		/* Ocupa el espacio disponible */
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		/* Opcional: agregar relleno alrededor del formulario */
	}
</style>
<script src="./Login.js"></script>
