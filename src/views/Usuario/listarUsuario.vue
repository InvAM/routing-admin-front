<template>
	<div class="listarUsuario" style="background-color: #334155; height: 100%">
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

		<div>
			<v-container fluid>
				<v-data-table
					style="border-radius: 20px"
					:headers="headers"
					:items="users"
					:search="search"
					:loading="loading"
					:items-per-page="10"
					class="custom-table">
					<template v-slot:top>
						<v-toolbar flat style="border-radius: 20px">
							<v-toolbar-title> Lista de Clientes</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-text-field
								v-model="search"
								append-icon="mdi-magnify"
								label="Buscar"
								single-line
								style="margin-right: 20px; height: 50px"
								hide-details></v-text-field>
						</v-toolbar>
					</template>
					<template v-slot:item="{ item }">
						<tr>
							<td>{{ item.IDUser }}</td>
							<td>{{ item.Nombre }}</td>
							<td>{{ item.Apellido }}</td>
							<td>{{ item.DNI }}</td>
							<td>{{ item.Edad }}</td>
							<td>{{ item.IDia }}</td>

							<td>
								{{ item.Seleccionar }}
								<v-btn
									small
									color="primary"
									style="margin-right: 20px"
									@click="openEditDialog(item.IDUser)">
									<v-icon class="mx-1">mdi-account-edit</v-icon>
								</v-btn>
								<v-btn
									@click="eliminar(item.IDUser)"
									small
									color="red"
									style="margin-right: -20px">
									<v-icon class="mx-1">mdi-delete</v-icon>
								</v-btn>
							</td>
						</tr>
					</template>
				</v-data-table>
			</v-container>
			<v-btn
				@click="regresar"
				style="margin-left: 1%"
				append-icon="mdi-arrow-right"
				>Atras</v-btn
			>
			<v-dialog v-model="dialogVisible" :width="500">
				<v-card color="#47d847">
					<v-card-title>
						<span class="mx-auto" style="color: white"
							>¡Operacion realizada correctamente!</span
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
						<span class="mx-auto" style="color: white"> !Error! </span>
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
			<v-dialog v-model="editDialog" width="800">
				<v-card>
					<v-card-title>
						<span class="headline">Editar Usuario</span>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-col cols="12" sm="6" md="4">
									<v-text-field
										disabled
										v-model="selectedUser.Nombre"
										label="Nombre"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-text-field
										disabled
										v-model="selectedUser.Apellido"
										label="Apellido"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-text-field
										disabled
										v-model="selectedUser.DNI"
										label="DNI"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-text-field
										disabled
										v-model="selectedUser.Edad"
										label="Edad"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.genero.Descripcion_Genero"
										:items="generos.map((genero) => genero.Descripcion_Genero)"
										label="Género"></v-select>
								</v-col>

								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.graduacion.Descripcion_Graduacion"
										:items="
											graduaciones.map(
												(graduacion) => graduacion.Descripcion_Graduacion
											)
										"
										label="Año Graduacion"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.ciclo.Descripcion_Ciclo"
										:items="ciclos.map((ciclo) => ciclo.Descripcion_Ciclo)"
										label="Ciclo"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.participacion"
										:items="
											participaciones.map(
												(participacion) =>
													participacion.Descripcion_participacion
											)
										"
										label="Club Tecnologia"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-text-field
										disabled
										v-model="selectedUser.nota_promedio"
										label="Nota Promedio"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.desNivelA"
										:items="
											nivelesacademicos.map(
												(nivelacademico) =>
													nivelacademico.Descripcion_NivelAcademico
											)
										"
										label="Nivel Academico"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.habilidadesprg"
										:items="
											habilidadesprg.map(
												(habilidadprg) =>
													habilidadprg.Descripcion_Habilidadesprg
											)
										"
										label="Habilidad Programacion"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.habilidadesmat"
										:items="
											habilidadesmat.map(
												(habilidadmat) =>
													habilidadmat.Descripcion_Habilidadesmat
											)
										"
										label="Habilidad Matematica"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										:items="
											condiciones.map(
												(condicion) => condicion.Descripcion_Condicion
											)
										"
										v-model="selectedUser.condicion"
										label="Condicion Estudiante"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.lenguaje"
										chips
										multiple
										:items="
											lenguajes.map((lenguaje) => lenguaje.Descripcion_Lenguaje)
										"
										label="Lenguajes Programacion"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										v-model="selectedUser.habilidadesbla"
										chips
										:items="
											habilidadesbla.map(
												(habilidadbla) =>
													habilidadbla.Descripcion_Habilidadesbla
											)
										"
										multiple
										label="Habilidad Blandas"></v-select>
								</v-col>
								<v-col cols="12" sm="6" md="4">
									<v-select
										chips
										v-model="selectedUser.interes"
										:items="
											intereses.map((interes) => interes.Descripcion_Interes)
										"
										multiple
										label="Intereses"></v-select>
								</v-col>
							</v-row>
						</v-container>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue darken-1" text @click="closeEditDialog"
							>Cancelar</v-btn
						>
						<v-btn color="blue darken-1" text @click="guardarCambios"
							>Guardar</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</div>
</template>
<script src="./listarUsuario.js"></script>
