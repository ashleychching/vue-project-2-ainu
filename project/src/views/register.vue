<template>
<main class="register">
		<section class="forms">
			<form class="login" @submit.prevent="register">
				<h2>Login</h2>
				<input 
					type="email" 
					placeholder="Email address"
					v-model="register_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="register_form.password" />
				<input 
					type="submit" 
					value="Login" />
			</form>

		</section>
	</main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	setup () {
		const register_form = ref({});
		const store = useStore();
		const register = () => {
			store.dispatch('register', register_form.value);
		}
		return {
			register_form,
			register
		}
	}
}
</script>

<style>
label,
input,
button {
  height: 10rem;
  width: 30rem;
  font-size: 2rem;
}
</style>