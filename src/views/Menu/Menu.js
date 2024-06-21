export default {
	name: "menu",
	data: () => ({}),
	methods: {
		registrarUsuario() {
			this.$router.push("/registrarUsuario");
		},
		verificacionLogin() {
			const userid = localStorage.getItem("userId");
			const username = localStorage.getItem("username");
			if (!userid && !username) {
				this.$router.push("/");
			}
		},
		listarUsuario() {
			this.$router.push("/listarUsuario");
		},
		logout() {
			localStorage.clear();
			sessionStorage.clear();
			this.$router.push("/");
		},
		homeia() {
			this.$router.push("/home-ia");
		},
	},
	mounted() {
		this.verificacionLogin();
	},
};
