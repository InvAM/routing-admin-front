<template>
	<div>
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
		<v-overlay :value="loading">
			<v-progress-circular indeterminate color="primary"></v-progress-circular>
		</v-overlay>
		<div class="homeia">
			<div class="content-container">
				<v-row>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline">
								<strong>Desarrollo Full-Stack</strong>
							</v-card-title>
							<v-card-text>
								<p
									v-if="
										resultados.classification_report &&
										resultados.classification_report[0]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[0]["f1-score"] }}
								</p>
								<p
									v-if="
										resultados.classification_report &&
										resultados.classification_report[1]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[1]["f1-score"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[0]
									">
									<strong>Recall:</strong>
									{{ resultados.classification_report[0]["recall"] }}
								</p v-if="
										resultados.classification_report &&
										resultados.classification_report[0]
									">
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[0]
									">
									<strong>Soporte:</strong>
									{{ resultados.classification_report[0]["support"] }}
								</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline">
								<strong>Ciencia de Datos</strong>
							</v-card-title>
							<v-card-text>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[1]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[1]["f1-score"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[1]
									">
									<strong>Precisión:</strong>
									{{ resultados.classification_report[1]["precision"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[1]
									"> 
									<strong>Recall:</strong>
									{{ resultados.classification_report[1]["recall"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[1]
									"> 
									<strong>Soporte:</strong>
									{{ resultados.classification_report[1]["support"] }}
								</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline">
								<strong>Desarrollo Web</strong>
							</v-card-title>
							<v-card-text>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[2]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[2]["f1-score"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[2]
									">
									<strong>Precisión:</strong>
									{{ resultados.classification_report[2]["precision"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[2]
									">
									<strong>Recall:</strong>
									{{ resultados.classification_report[2]["recall"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[2]
									">
									<strong>Soporte:</strong>
									{{ resultados.classification_report[2]["support"] }}
								</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline">
								<strong>Arquitectura de Software</strong>
							</v-card-title>
							<v-card-text>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[3]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[3]["f1-score"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[3]
									">
									<strong>Precisión:</strong>
									{{ resultados.classification_report[3]["precision"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[3]
									">
									<strong>Recall:</strong>
									{{ resultados.classification_report[3]["recall"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[3]
									">
									<strong>Soporte:</strong>
									{{ resultados.classification_report[3]["support"] }}
								</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline">
								<strong>Desarrollo Frontend</strong>
							</v-card-title>
							<v-card-text>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[4]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[4]["f1-score"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[4]
									">
									<strong>Precisión:</strong>
									{{ resultados.classification_report[4]["precision"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[4]
									">
									<strong>Recall:</strong>
									{{ resultados.classification_report[4]["recall"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[4]
									">
									<strong>Soporte:</strong>
									{{ resultados.classification_report[4]["support"] }}
								</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline">
								<strong>Desarrollo de Aplicaciones Móviles</strong>
							</v-card-title>
							<v-card-text>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[5]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[5]["f1-score"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[5]
									">
									<strong>Precisión:</strong>
									{{ resultados.classification_report[5]["precision"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[5]
									">
									<strong>Recall:</strong>
									{{ resultados.classification_report[5]["recall"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[5]
									">
									<strong>Soporte:</strong>
									{{ resultados.classification_report[5]["support"] }}
								</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline">
								<strong>Ciberseguridad</strong>
							</v-card-title>
							<v-card-text>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[6]
									">
									<strong>F1-Score:</strong>
									{{ resultados.classification_report[6]["f1-score"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[6]
									">
									<strong>Precisión:</strong>
									{{ resultados.classification_report[6]["precision"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[6]
									">
									<strong>Recall:</strong>
									{{ resultados.classification_report[6]["recall"] }}
								</p>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[6]
									">
									<strong>Soporte:</strong>
									{{ resultados.classification_report[6]["support"] }}
								</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<v-card class="mb-4">
							<v-card-title class="headline"
								>Resultados del Entrenamiento</v-card-title
							>
							<v-card-text>
								<p v-if="
										resultados.classification_report &&
										resultados.classification_report[0]
									"><strong>Precisión:</strong> {{ resultados.accuracy }}</p>
							</v-card-text>
						</v-card>
						<v-btn style="width: 100%" @click="atras">Atras</v-btn>
						<v-btn style="width: 100%; margin-top: 10px;" @click="entrenamiento_rutas">Cantidad Ejemplos Entrenamiento</v-btn>
					</v-col>
				</v-row>
			</div>
			
		</div>
	</div>
	<v-dialog v-model="dialogoVisible" max-width="600px">
      <v-card>
        <v-card-title class="headline primary--text">Información de Rutas de Aprendizaje</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(ruta, index) in rutas_aprendizaje_recomendada" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ ruta }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip class="ma-1" v-if="conteo_rutas[index] > 0" color="success" small>
                      {{ conteo_rutas[index] }} ejemplos
                    </v-chip>
                    <v-chip class="ma-1" v-else color="error" small>
                      Sin ejemplos
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogoVisible = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<style>
	.homeia {
		display: flex;
		justify-content: center; /* Centra el contenido horizontalmente */
		align-items: center; /* Centra el contenido verticalmente */
		min-height: 100vh; /* Establece la altura mínima como el 100% de la altura de la ventana */
		background-color: #334155;
	}

	.content-container {
		width: 90%;
		max-width: 1200px;
		background-color: #757575;
		margin: auto;
		padding: 20px;
		border-radius: 20px;
		margin-top: 20px;
	}

	.v-card-title {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>

<script src="./home-ia.js"></script>
