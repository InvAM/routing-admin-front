import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
export default {
	name: "registrarUsuario",
	data: () => ({
		frmUsuario: {
			nombre: "",
			apellido: "",
			dni: "",
			edad: "",
			IDGenero: "",
			notapromedio: "",
			descGenero: "",
			IDGraduacion: "",
			desGraduacion: "",
			IDCiclo: "",
			desCiclo: "",
			IDParticipacion: "",
			desParticipacion: "",
			IDNivelAcademico: "",
			desNivelAcademico: "",
			IDHabilidadesprg: "",
			desHabilidadesprg: "",
			IDHabilidadesmat: "",
			desHabilidadesmat: "",
			IDCondicion: "",
			desCondicion: "",
			IDLenguaje: [],
			desLenguaje: [],
			IDHabilidadesbla: [],
			desHabilidadesbla: [],
			IDIntereses: [],
			desIntereses: [],
		},
		Select: false,
		generos: [],
		graduaciones: [],
		ciclos: [],
		participaciones: [],
		nivelesacademicos: [],
		habilidadesprg: [],
		habilidadesmat: [],
		condiciones: [],
		lenguajes: [],
		habilidadesbla: [],
		intereses: [],
		selectedGenero: null,
		selectedGraduacion: null,
		selectedCiclo: null,
		selectedParticipacion: null,
		selectedNivelAcademico: null,
		selectedHabilidadesprg: null,
		selectedHabilidadesmat: null,
		selectedCondicion: null,
		selectedLenguaje: [],
		selectedHabilidadesbla: [],
		selectedIntereses: [],
		rules: {
			required: (value) => !!value || "Este campo es obligatorio",
		},
		mensaje: "",
		dialogError: false,
		dialogVisible: false,
		credencialesDialog: false,
		username: "",
		password: "",
		userCreated: null,
		dialogCredencialesAlert: false,
	}),
	created() {
		this.getGenero();
		this.getGraduacion();
		this.getCiclo();
		this.getParticipacion();
		this.getNivelAcademico();
		this.getHabilidadesprg();
		this.getHabilidadesmat();
		this.getCondicion();
		this.getLenguaje();
		this.getHabilidadesbla();
		this.getInteres();
	},

	watch: {
		selectedGenero(val) {
			if (val) {
				const genero = this.generos.find(
					(genero) => genero.Descripcion_Genero === val
				);
				this.frmUsuario.descGenero = genero.Descripcion_Genero;
				this.frmUsuario.IDGenero = genero.IDGenero;
			}
		},
		selectedGraduacion(val) {
			if (val) {
				const graduacion = this.graduaciones.find(
					(graduacion) => graduacion.Descripcion_Graduacion === val
				);
				this.frmUsuario.desGraduacion = graduacion.Descripcion_Graduacion;
				this.frmUsuario.IDGraduacion = graduacion.IDGraduacion;
			}
		},
		selectedCiclo(val) {
			if (val) {
				const ciclo = this.ciclos.find(
					(ciclo) => ciclo.Descripcion_Ciclo === val
				);
				this.frmUsuario.desCiclo = ciclo.Descripcion_Ciclo;
				this.frmUsuario.IDCiclo = ciclo.IDCiclo;
			}
		},
		selectedParticipacion(val) {
			if (val) {
				const participacion = this.participaciones.find(
					(participacion) => participacion.Descripcion_participacion === val
				);
				this.frmUsuario.desParticipacion =
					participacion.Descripcion_participacion;
				this.frmUsuario.IDParticipacion = participacion.IDParticipacion;
			}
		},
		selectedNivelAcademico(val) {
			if (val) {
				const NivelAcademico = this.nivelesacademicos.find(
					(NivelAcademico) => NivelAcademico.Descripcion_NivelAcademico === val
				);
				this.frmUsuario.desNivelAcademico =
					NivelAcademico.Descripcion_NivelAcademico;
				this.frmUsuario.IDNivelAcademico = NivelAcademico.IDNivelAcademico;
			}
		},
		selectedHabilidadesprg(val) {
			if (val) {
				const habilidadprg = this.habilidadesprg.find(
					(habilidadprg) => habilidadprg.Descripcion_Habilidadesprg === val
				);
				this.frmUsuario.desHabilidadesprg =
					habilidadprg.Descripcion_Habilidadesprg;
				this.frmUsuario.IDHabilidadesprg = habilidadprg.IDHabilidadesprg;
			}
		},
		selectedHabilidadesmat(val) {
			if (val) {
				const habilidadmat = this.habilidadesmat.find(
					(habilidadmat) => habilidadmat.Descripcion_Habilidadesmat === val
				);
				this.frmUsuario.desHabilidadesmat =
					habilidadmat.Descripcion_Habilidadesmat;
				this.frmUsuario.IDHabilidadesmat = habilidadmat.IDHabilidadesmat;
			}
		},
		selectedCondicion(val) {
			if (val) {
				const condicion = this.condiciones.find(
					(condicion) => condicion.Descripcion_Condicion === val
				);
				this.frmUsuario.desCondicion = condicion.Descripcion_Condicion;
				this.frmUsuario.IDCondicion = condicion.IDCondicion;
			}
		},
		selectedLenguaje(val) {
			this.frmUsuario.desLenguaje = val;
			this.frmUsuario.IDLenguaje = val
				.map((lenguaje) => {
					const foundLenguaje = this.lenguajes.find(
						(l) => l.Descripcion_Lenguaje === lenguaje
					);
					return foundLenguaje ? foundLenguaje.IDLenguaje : null;
				})
				.filter((id) => id !== null);
		},
		selectedHabilidadesbla(val) {
			this.frmUsuario.desHabilidadesbla = val;
			this.frmUsuario.IDHabilidadesbla = val
				.map((habilidadbla) => {
					const foundHabilidad = this.habilidadesbla.find(
						(h) => h.Descripcion_Habilidadesbla === habilidadbla
					);
					return foundHabilidad ? foundHabilidad.IDHabilidadesbla : null;
				})
				.filter((id) => id !== null);
		},
		selectedIntereses(val) {
			this.frmUsuario.desIntereses = val;
			this.frmUsuario.IDIntereses = val
				.map((interes) => {
					const foundInteres = this.intereses.find(
						(i) => i.Descripcion_Interes === interes
					);
					return foundInteres ? foundInteres.IDInteres : null;
				})
				.filter((id) => id !== null);
		},
	},
	methods: {
		logout() {
			localStorage.clear();
			sessionStorage.clear();

			this.$router.push("/");
		},
		getGenero() {
			axios
				.get("http://localhost:3000/genero")
				.then((res) => {
					this.generos = res.data;
				})
				.catch((e) => e);
		},
		regresar() {
			this.$router.push("/menu");
		},
		getGraduacion() {
			axios
				.get("http://localhost:3000/graduacion")
				.then((res) => {
					this.graduaciones = res.data;
				})
				.catch((e) => e);
		},
		getCiclo() {
			axios
				.get("http://localhost:3000/ciclo")
				.then((res) => {
					this.ciclos = res.data;
				})
				.catch((error) => e);
		},
		getParticipacion() {
			axios
				.get("http://localhost:3000/participacion")
				.then((res) => {
					this.participaciones = res.data;
				})
				.catch((e) => e);
		},
		getNivelAcademico() {
			axios
				.get("http://localhost:3000/nivelacademico")
				.then((res) => {
					this.nivelesacademicos = res.data;
				})
				.catch((r) => r);
		},
		getHabilidadesprg() {
			axios
				.get("http://localhost:3000/habilidadesprg")
				.then((res) => {
					this.habilidadesprg = res.data;
				})
				.catch((r) => r);
		},
		getHabilidadesmat() {
			axios
				.get("http://localhost:3000/habilidadesmat")
				.then((res) => {
					this.habilidadesmat = res.data;
				})
				.catch((r) => r);
		},
		getCondicion() {
			axios
				.get("http://localhost:3000/condicion")
				.then((res) => {
					this.condiciones = res.data;
				})
				.catch((r) => r);
		},
		getLenguaje() {
			axios
				.get("http://localhost:3000/lenguaje")
				.then((res) => {
					this.lenguajes = res.data;
				})
				.catch((r) => r);
		},
		getHabilidadesbla() {
			axios
				.get("http://localhost:3000/habilidadesbla")
				.then((res) => {
					this.habilidadesbla = res.data;
				})
				.catch((r) => r);
		},
		getInteres() {
			axios
				.get("http://localhost:3000/interes")
				.then((res) => {
					this.intereses = res.data;
				})
				.catch((r) => r);
		},
		async registrar() {
			// Configuración de Firebase
			const firebaseConfig = {
				apiKey: "AIzaSyAdbxgtIebBfPyyIAUNiJIi870Z8DNBOuM",
				authDomain: "ucv-rec-api.firebaseapp.com",
				projectId: "ucv-rec-api",
				storageBucket: "ucv-rec-api.appspot.com",
				messagingSenderId: "355897289132",
				appId: "1:355897289132:web:f0dccd53d0e9d7aeaf7209",
			};
			const firebaseApp = initializeApp(firebaseConfig);
			const db = getFirestore(firebaseApp);

			// Datos a enviar a Firebase
			var data = {
				edad: this.frmUsuario.edad,
				nivel_academico: this.frmUsuario.IDNivelAcademico,
				habilidad_programacion: this.frmUsuario.IDHabilidadesprg,
				habilidad_matematicas: this.frmUsuario.IDHabilidadesmat,
				participacion_club_tecnologia: this.frmUsuario.IDParticipacion,
				nota_promedio: this.frmUsuario.notapromedio,
				condicion_estudiante: this.frmUsuario.IDCondicion,
				conocimiento_lenguajes: this.frmUsuario.IDLenguaje,
				habilidades_blandas: this.frmUsuario.IDHabilidadesbla,
				intereses: this.frmUsuario.IDIntereses,
			};
			const userId = this.frmUsuario.dni;

			// Validar que no hay campos vacíos en los datos
			for (const key in data) {
				if (
					data[key] === "" ||
					(Array.isArray(data[key]) && data[key].length === 0)
				) {
					this.mensaje = `Faltan campos por completar`;
					this.typemsg = "error";
					this.dialogError = true;
					return;
				}
			}

			try {
				// Agregar el documento a la colección "users-ia" con un ID personalizado
				await setDoc(doc(db, "users-ia", userId), data);
				console.log("Documento agregado correctamente con ID:", userId);
			} catch (error) {
				console.error("Error al agregar el documento a Firebase: ", error);
				this.mensaje = "Error al agregar el documento a Firebase";
				this.typemsg = "error";
				this.dialogError = true;
				return;
			}

			// Datos a enviar a tu backend
			var data_backend = {
				Nombre: this.frmUsuario.nombre,
				Apellido: this.frmUsuario.apellido,
				DNI: this.frmUsuario.dni,
				Edad: this.frmUsuario.edad,
				IDGenero: this.frmUsuario.IDGenero,
				IDGraduacion: this.frmUsuario.IDGraduacion,
				IDCiclo: this.frmUsuario.IDCiclo,
				IDia: this.frmUsuario.dni,
			};

			// Validar que no hay campos vacíos en los datos del backend
			for (const key in data_backend) {
				if (
					data_backend[key] === "" ||
					(Array.isArray(data_backend[key]) && data_backend[key].length === 0)
				) {
					this.mensaje = `Faltan campos por completar`;
					this.typemsg = "error";
					this.dialogError = true;
					return;
				}
			}

			try {
				const response = await axios.post(
					"http://localhost:3000/users",
					data_backend
				);
				console.log("Respuesta del backend:", response);
				this.userCreated = response.data.IDUser;

				this.mensaje = `Se registró correctamente al cliente`;
				this.typemsg = "success";
				this.dialogVisible = true;
			} catch (error) {
				console.error(
					"Error al enviar datos al backend:",
					error.response ? error.response.data : error.message
				);
				this.mensaje = "Error al enviar datos al backend";
				this.typemsg = "error";
				this.dialogError = true;
			}

			console.log(data);
		},
		aceptar() {
			this.dialogVisible = false;
			this.credencialesDialog = true;
		},
		cerrar() {
			this.dialogVisible = false;
			this.dialogError = false;
		},
		createCredenciales() {
			var data = {
				IDUser: this.userCreated,
				username: this.username,
				password: this.password,
			};
			axios
				.post(`http://localhost:3000/credenciales`, data)
				.then((response) => {
					this.mensaje = `Se registraron las credenciales`;
					this.typemsg = "success";
					this.dialogCredencialesAlert = true;
				})
				.catch((error) => error);
		},
	},
};
