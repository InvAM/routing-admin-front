import axios from "axios";
export default {
	name: "forgotPassword",
	data: () => ({
		username: "",
		password: "",
		password2: "",
		visible: false,
		userID: "",
		mensajeError: "",
		mensaje: "",
		dialogError: false,
		typemsg: "",
		dialogCredencialesAlert: false,
	}),
	methods: {
		passwordRule(value) {
			return (
				value.length >= 6 || "La contraseña debe tener al menos 6 caracteres"
			);
		},
		confirmPasswordRule(value) {
			return value === this.password || "Las contraseñas no coinciden";
		},
		logout() {
			localStorage.clear();
			sessionStorage.clear();

			this.$router.push("/");
		},
		aceptar() {
			this.dialogCredencialesAlert = false;
			this.$router.push("/");
		},
		cerrar() {
			this.dialogError = false;
		},
		updatePassword() {
			if (this.password === this.password2) {
				const username = this.username;
				if (username) {
					const data = {
						username: username,
						password: this.password,
					};

					axios
						.patch(`http://localhost:3000/credenciales/update-password`, data)
						.then(() => {
							this.mensaje = "Contraseña actualizada correctamente";
							this.typemsg = "success";
							this.dialogCredencialesAlert = true;
						})
						.catch((error) => {
							this.mensaje = "No se pudo actualizar correctamente";
							this.typemsg = "error";
							this.dialogError = true;
						});
				} else {
					this.mensaje = "No se encontró el nombre de usuario";
					this.typemsg = "error";
					this.dialogError = true;
				}
			} else {
				this.mensaje = "Las contraseñas no coinciden";
				this.typemsg = "error";
				this.dialogError = true;
			}
		},
	},
};
