<template>
	<div class="registrarUsuario">
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
						<v-speed-dial
							location="left center"
							transition="slide-x-transition">
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

		<div
			style="
				width: 800px;
				background-color: #0b0b0b;
				position: relative;
				display: flex;
				margin: auto;
				top: 30px;
				border-radius: 20px;
				margin-bottom: 33px;
			">
			<v-form>
				<p
					style="
						text-align: center;
						padding-bottom: 10px;
						padding-top: 10px;
						color: white;
					"
					class="text-h6">
					Registrar Usuario
				</p>
				<v-divider
					class="border-opacity-100"
					style="
						margin-bottom: 20px;
						width: 760px;
						margin-left: 15px;
						color: white;
					"></v-divider>
				<div class="container_form">
					<v-text-field
						label="Nombre"
						variant="solo"
						:rules="[rules.required]"
						v-model="frmUsuario.nombre"
						class="form-field"></v-text-field>
					<v-text-field
						:rules="[rules.required]"
						label="Apellido"
						variant="solo"
						v-model="frmUsuario.apellido"
						class="form-field"></v-text-field>
					<v-text-field
						:rules="[rules.required]"
						label="DNI"
						variant="solo"
						v-model="frmUsuario.dni"
						class="form-field"></v-text-field>
					<v-text-field
						:rules="[rules.required]"
						label="Edad"
						variant="solo"
						v-model="frmUsuario.edad"
						class="form-field"></v-text-field>
					<v-select
						:rules="[rules.required]"
						label="Genero"
						v-model="selectedGenero"
						:items="generos.map((genero) => genero.Descripcion_Genero)"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						label="Año de Graduacion"
						v-model="selectedGraduacion"
						:items="
							graduaciones.map(
								(graduacion) => graduacion.Descripcion_Graduacion
							)
						"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						label="Ciclo"
						:items="ciclos.map((ciclo) => ciclo.Descripcion_Ciclo)"
						v-model="selectedCiclo"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						label="Participación"
						:items="
							participaciones.map(
								(participacion) => participacion.Descripcion_participacion
							)
						"
						v-model="selectedParticipacion"
						variant="solo"
						class="form-field"></v-select>
					<v-text-field
						:rules="[rules.required]"
						label="Nota Promedio"
						variant="solo"
						v-model="frmUsuario.notapromedio"
						class="form-field"></v-text-field>
					<v-select
						:rules="[rules.required]"
						label="Nivel Académico"
						:items="
							nivelesacademicos.map(
								(nivelacademico) => nivelacademico.Descripcion_NivelAcademico
							)
						"
						v-model="selectedNivelAcademico"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						label="Habilidades de Programación"
						:items="
							habilidadesprg.map(
								(habilidadprg) => habilidadprg.Descripcion_Habilidadesprg
							)
						"
						v-model="selectedHabilidadesprg"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						label="Habilidades Matemáticas"
						:items="
							habilidadesmat.map(
								(habilidadmat) => habilidadmat.Descripcion_Habilidadesmat
							)
						"
						v-model="selectedHabilidadesmat"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						label="Condicion Estudiante"
						:items="
							condiciones.map((condicion) => condicion.Descripcion_Condicion)
						"
						v-model="selectedCondicion"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						multiple
						label="Conocimiento Lenguajes Programación"
						:items="lenguajes.map((lenguaje) => lenguaje.Descripcion_Lenguaje)"
						v-model="selectedLenguaje"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						multiple
						label="Habilidades Blandas"
						:items="
							habilidadesbla.map(
								(habilidadbla) => habilidadbla.Descripcion_Habilidadesbla
							)
						"
						v-model="selectedHabilidadesbla"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						:rules="[rules.required]"
						multiple
						label="Intereses"
						:items="intereses.map((interes) => interes.Descripcion_Interes)"
						v-model="selectedIntereses"
						variant="solo"
						style="margin-right: 10px"
						class="form-field"></v-select>

					<v-btn
						style="
							width: 200px;
							margin: auto;
							bottom: 20px;
							background-color: #1b1253;
							color: white;
						"
						class="boton_registrar"
						@click="registrar"
						>Registrar Usuario
						<v-icon style="margin-left: 5px">mdi-account-plus</v-icon></v-btn
					>
					<v-btn
						style="
							width: 200px;
							margin: auto;
							bottom: 20px;
							margin-left: 10px;
							background-color: #1b1253;
							color: white;
						"
						class="boton_registrar"
						@click="regresar"
						>Atras <v-icon>mdi-arrow-left</v-icon></v-btn
					>
				</div>
			</v-form>
			<v-dialog v-model="dialogVisible" :width="500">
				<v-card color="#47d847">
					<v-card-title>
						<span class="mx-auto" style="color: white"
							>¡Registrado con Exito!</span
						>
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
							@click="aceptar">
							Aceptar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
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
							cerrar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-dialog v-model="credencialesDialog" :width="400" class="credenciales">
				<v-card
					style="background-color: #0b0b0b; border-radius: 20px; height: 400px">
					<v-card-title
						class="headline font-weight-black text-h6"
						style="color: white; margin: auto"
						>Crear Credenciales</v-card-title
					>
					<v-card-text>
						<v-form>
							<p style="color: white; padding-bottom: 10px">Usuario</p>
							<v-text-field v-model="username" variant="solo" required>
								<v-icon>mdi-account</v-icon>
							</v-text-field>
							<p style="color: white; padding-bottom: 10px">Contraseña</p>
							<v-text-field
								v-model="password"
								variant="solo"
								:type="password"
								required
								><v-icon>mdi-lock</v-icon></v-text-field
							>
							<v-btn color="#821902" class="mt-3" type="submit" block @click="createCredenciales">
								Crear
							</v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-dialog>
			<v-dialog v-model="dialogCredencialesAlert" :width="500">
				<v-card color="#47d847">
					<v-card-title>
						<span class="mx-auto" style="color: white"
							>¡Credenciales Creadas!</span
						>
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
							@click="aceptar">
							Aceptar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</div>
</template>

<style>
	.registrarUsuario {
		background: url("../../assets/Fondo_2.jpg");
		background-size: cover;
		background-position: center;
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.container_form {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between; /* Espacio entre los elementos */
		width: 780px; /* Ancho del contenedor */
	}

	.form-field {
		width: calc(30% - 20px); /* Ajusta el ancho de cada campo */
		margin-bottom: 20px; /* Espacio entre los campos */
		box-sizing: border-box; /* Asegura que el padding y el margin se incluyan en el tamaño del elemento */
		margin-left: 10px;
	}

	.credenciales {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-image: url("../../assets/Fondo_2.jpg");
	}
</style>

<script src="./registrarUsuario.js"></script>
