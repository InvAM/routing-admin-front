import axios from "axios";
export default {
	name: "Home-IA",
	data: () => ({
		loading: false,
		resultados: {
			accuracy: 0,
			classification_report: {},
		},
		dialogoVisible: false,
		conteo_rutas: {},
		rutas_faltantes: {},
		rutas_aprendizaje_recomendada: [
			"Desarrollo Full-Stack", // 0
			"Ciencia de Datos", // 1
			"Desarrollo Web", // 2
			"Arquitectura de Software", // 3
			"Desarrollo Frontend", // 4
			"Desarrollo de Aplicaciones Móviles", // 5
			"Ciberseguridad", // 6
		],
	}),
	mounted() {
		this.obtenerResultados();
		
	},
	methods: {
		logout() {
			localStorage.clear();
			sessionStorage.clear();
			this.$router.push("/");
		},
		async obtenerResultados() {
			try {
				this.loading = true; // Mostrar loader
				const response = await axios.get("http://localhost:5000/entrenar");
				this.resultados = response.data;
				this.loading = false; // Ocultar loader cuando se recibe la respuesta
			} catch (error) {
				console.error("Error al obtener los resultados:", error);
				this.loading = false; // Asegurarse de ocultar el loader en caso de error
			}
		},
		atras() {
			this.$router.push("/menu");
		},
		entrenamiento_rutas() {
			axios
				.get("http://localhost:5000/cantidad_aprendizaje")
				.then((response) => {
					this.conteo_rutas = response.data.conteo_rutas;
					this.rutas_faltantes = response.data.rutas_faltantes;
					this.dialogoVisible = true;
				})
				.catch((error) => {
					console.error("Error al obtener la información de rutas:", error);
				});
		},
	},
};
