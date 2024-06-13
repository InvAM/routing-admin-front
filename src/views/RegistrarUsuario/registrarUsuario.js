import axios from "axios";
export default {
	name: "registrarUsuario",
	data: () => ({
		// NIVELES ACADEMICOS
		niveles_academicos: {
			Estudiante: 0,
			Graduado: 1,
			Universitario: 2,
		},
		nivelAcademicoSeleccionado: null,
		idNivelAcademico: null,
		// HABILIDADES PROGRAMACION
		habilidades_programacion: {
			Principiante: 0,
			Intermedio: 1,
			Avanzado: 2,
		},
		habilidadProgramacionSeleccionada: null,
		idHabilidadesProgramacion: null,
		// HABILIDADES MATEMATICAS
		habilidades_matematicas: {
			Principiante: 0,
			Intermedio: 1,
			Avanzado: 2,
		},
		habilidadMatematicaSeleccionada: null,
		idHabilidadesMatematicas: null,
		// CONDICION ESTUDIANTE
		condicon_estudiante: {
			Cursando: 0,
			Egresado: 1,
		},
		condiconEstudianteSeleccionada: null,
		idCondicionEstudiante: null,

		//CONOCIMIENTO LENGUAJES DE PROGRAMACION
		conocimiento_lenguajes: {
			JavaScript: 0,
			TypeScript: 1,
			React: 2,
			Angular: 3,
			Python: 4,
			Java: 5,
			"C++": 6,
			HTML: 7,
			CSS: 8,
			Scala: 9,
			"Vue.js": 10,
			Kotlin: 11,
			Swift: 12,
			"C#": 13,
		},
		lenguajeSeleccionado: null,
		idConocimientoLenguaje: null,

		//HABILIDADES BLANDAS
		habilidades_blandas: {
			"Trabajo en equipo": 0,
			"Comunicación efectiva": 1,
			"Gestión del tiempo": 2,
			"Resolución de conflictos": 3,
			Creatividad: 4,
			Adaptabilidad: 5,
			Liderazgo: 6,
			"Resolución de problemas": 7,
			"Pensamiento crítico": 8,
			"Aprendizaje rápido": 9,
		},
		habilidadBlandaSeleccionada: null,
		idHabilidadesBlandas: null,

		//INTERESES
		intereses: {
			"Desarrollo de aplicaciones web modernas": 0,
			"UI/UX Design": 1,
			"Machine Learning": 2,
			"Desarrollo de videojuegos": 3,
			"Diseño de páginas web": 4,
			"Desarrollo de aplicaciones empresariales": 5,
			"Gestión de proyectos": 6,
			"Desarrollo de aplicaciones web dinámicas": 7,
			"Diseño de interfaces intuitivas": 8,
			"Desarrollo de aplicaciones móviles": 9,
			"Seguridad informática": 10,
			"Bases de datos": 11,
			"Experiencia de usuario": 12,
			"Análisis forense digital": 13,
			"Implementación de microservicios con Kubernetes": 14,
			"Diseño de arquitecturas de sistemas distribuidos": 15,
		},
		interesSeleccionado: null,
		idIntereses: null,
	}),
	methods: {
		regresar() {
			this.$router.push("/menu");
		},
		actualizarIdNivelAcademico() {
			this.idNivelAcademico =
				this.niveles_academicos[this.nivelAcademicoSeleccionado];
		},
		actualizarIdHabilidadProgramacion() {
			this.idHabilidadesProgramacion =
				this.habilidades_programacion[this.habilidadProgramacionSeleccionada];
		},
		actualizarIdHabilidadesMatematicas() {
			this.idHabilidadesMatematicas =
				this.habilidades_matematicas[this.habilidadMatematicaSeleccionada];
		},
		actualizarIDCondicionEstudiante() {
			this.idCondicionEstudiante =
				this.condicon_estudiante[this.condiconEstudianteSeleccionada];
		},
		actualizarIDLenguaje() {
			this.idConocimientoLenguaje =
				this.conocimiento_lenguajes[this.lenguajeSeleccionado];
		},
		actualizarIDHabilidadBlanda() {
			this.idHabilidadesBlandas =
				this.habilidades_blandas[this.habilidadBlandaSeleccionada];
		},
		actualizarIDInteres() {
			this.idIntereses = this.intereses[this.interesSeleccionado];
		},
	},
};
