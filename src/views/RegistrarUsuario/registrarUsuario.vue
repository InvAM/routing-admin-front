<template>
	<div class="registrarUsuario">
		<div
			style="
				width: 800px;
				background-color: rgb(146, 139, 139);
				position: relative;
				display: flex;
				margin: auto;
				top: 80px;
                border-radius: 20px;
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
						class="form-field"></v-text-field>
					<v-text-field
						label="Apellido"
						variant="solo"
						class="form-field"></v-text-field>
					<v-text-field
						label="DNI"
						variant="solo"
						class="form-field"></v-text-field>
					<v-text-field
						label="Edad"
						variant="solo"
						class="form-field"></v-text-field>
					<v-select
						label="Participación"
						:items="['Sí', 'No']"
						v-model="participacion"
						variant="solo"
						class="form-field"></v-select>
					<v-text-field
						label="Nota Promedio"
						variant="solo"
						class="form-field"></v-text-field>
					<v-select
						label="Nivel Académico"
						:items="Object.keys(niveles_academicos)"
						v-model="nivelAcademicoSeleccionado"
						@change="actualizarIdNivelAcademico"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						label="Habilidades de Programación"
						:items="Object.keys(habilidades_programacion)"
						v-model="habilidadProgramacionSeleccionada"
						@change="actualizarIdHabilidadProgramacion"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						label="Habilidades Matemáticas"
						:items="Object.keys(habilidades_matematicas)"
						v-model="habilidadMatematicaSeleccionada"
						@change="actualizarIdHabilidadesMatematicas"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						label="Condicion Estudiante"
						:items="Object.keys(condicon_estudiante)"
						v-model="condiconEstudianteSeleccionada"
						@change="actualizarIDCondicionEstudiante"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						label="Conocimiento Lenguajes Programación"
						:items="Object.keys(conocimiento_lenguajes)"
						v-model="lenguajeSeleccionado"
						@change="actualizarIDLenguaje"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						label="Habilidades Blandas"
						:items="Object.keys(habilidades_blandas)"
						v-model="habilidadBlandaSeleccionada"
						@change="actualizarIDHabilidadBlanda"
						variant="solo"
						class="form-field"></v-select>
					<v-select
						label="Intereses"
						:items="Object.keys(intereses)"
						v-model="interesSeleccionado"
						@change="actualizarIDInteres"
						variant="solo"
						style="margin-right: 10px"
						class="form-field"></v-select>

					<v-btn
						style="width: 200px; margin: auto; bottom: 20px"
						class="boton_registrar"
						>Registrar Usuario <v-icon style="margin-left: 5px">mdi-account-plus</v-icon></v-btn
					>
                    <v-btn
						style="width: 200px; margin: auto; bottom: 20px; margin-left: 10px;"
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
		background-color: #334155;
		height: 100vh; /* Usa 100vh para que ocupe el 100% de la altura de la ventana */
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
