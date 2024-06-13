import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Login",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/Login/Login.vue"),
	},
	{
		path: "/menu",
		name: "Menu",
		component: () =>
			import(/* webpackChunkName: "menu" */ "../views/Menu/Menu.vue"),
	},
	{
		path: "/forgotPassword",
		name: "ForgotPassword",
		component: () =>
			import(
				/* webpackChunkName: "recuperarContraseña" */ "../views/RecuperarContraseña/recuperarContraseña.vue"
			),
	},
	{
		path: "/registrarUsuario",
		name: "RegistrarUsuario",
		component: () => import (/* webpackChunkName: "registrarUsuario" */ "../views/RegistrarUsuario/registrarUsuario.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
