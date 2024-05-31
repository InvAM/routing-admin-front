export default {
	name: "Login",
	data: () => ({
		username: "",
		password: "",
		rules: {
			required: (value) => !!value || "Ingresar Contraseña.",
			min: (v) => v.length >= 8 || "Min 8 characters",
			//emailMatch: () => `The email and password you entered don't match`,
		},
	}),
	methods: {
		crear_cuenta() {
			this.$router.push("/menu");
		},
		recuperar_contraseña() {
			this.$router.push("/recuperarContraseña");
		},
	},
};
