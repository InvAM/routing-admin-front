<template>
	<div class="registrarUsuario">
		<div
			style="
				width: 800px;
				background-color: rgb(146, 139, 139);
				position: relative;
				display: flex;
				margin: auto;
				top: 0px;
				border-radius: 20px;
				margin-bottom: 33px;
			">
			<v-form>
				<p
					style="text-align: center; padding-bottom: 10px; padding-top: 10px"
					class="text-h6">
					Registrar Usuario
				</p>
				<div class="container_form">
					<v-text-field
						label="Nombre"
						variant="solo"
						v-model="frmUsuario.nombre"
						class="form-field"></v-text-field>
					<v-text-field
						label="Apellido"
						variant="solo"
						v-model="frmUsuario.apellido"
						class="form-field"></v-text-field>
					<v-text-field
						label="DNI"
						variant="solo"
						v-model="frmUsuario.dni"
						class="form-field"></v-text-field>
					<v-text-field
						label="Edad"
						variant="solo"
						v-model="frmUsuario.edad"
						class="form-field"></v-text-field>
					<v-select
						label="Genero"
						v-model="selectedGenero"
						:items="generos.map((genero) => genero.Descripcion_Genero)"
						variant="solo"
						class="form-field"></v-select>
					<v-select
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
						label="Ciclo"
						:items="ciclos.map((ciclo) => ciclo.Descripcion_Ciclo)"
						v-model="selectedCiclo"
						variant="solo"
						class="form-field"></v-select>
					<v-select
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
						label="Nota Promedio"
						variant="solo"
						v-model="frmUsuario.notapromedio"
						class="form-field"></v-text-field>
					<v-select
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
						label="Condicion Estudiante"
						:items="
							condiciones.map((condicion) => condicion.Descripcion_Condicion)
						"
						v-model="selectedCondicion"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						multiple
						label="Conocimiento Lenguajes Programación"
						:items="lenguajes.map((lenguaje) => lenguaje.Descripcion_Lenguaje)"
						v-model="selectedLenguaje"
						variant="solo"
						class="form-field"></v-select>
					<v-select
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
						multiple
						label="Intereses"
						:items="intereses.map((interes) => interes.Descripcion_Interes)"
						v-model="selectedIntereses"
						variant="solo"
						style="margin-right: 10px"
						class="form-field"></v-select>

					<v-btn
						style="width: 200px; margin: auto; bottom: 20px"
						class="boton_registrar"
						@click="registrar"
						>Registrar Usuario
						<v-icon style="margin-left: 5px">mdi-account-plus</v-icon></v-btn
					>
					<v-btn
						style="width: 200px; margin: auto; bottom: 20px; margin-left: 10px"
						class="boton_registrar"
						@click="regresar"
						>Atras <v-icon>mdi-arrow-left</v-icon></v-btn
					>
				</div>
			</v-form>
		</div>
	</div>
</template>

<style>
	.registrarUsuario {
		display: flex;
		justify-content: center; /* Centra el contenido horizontalmente */
		align-items: center; /* Centra el contenido verticalmente */
		min-height: 100vh; /* Establece la altura mínima como el 100% de la altura de la ventana */
		background-color: #334155;
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
</style>

<script src="./registrarUsuario.js"></script>
