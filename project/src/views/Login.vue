<template>
<form @submit.prevent="handleSubmit">
<h1> Sign up</h1>
<label for="email">Email:</label>
<input type="email" name="email" v-model="email" required>
<label for="email">Password:</label>
<input type="password" name="password" v-model="password" required>
<button> sign up</button>
</form>
</template>

<script>
import {ref} from 'vue'
	export default {
		setup(){
			const email = ref('')
			const password = ref('')
			const handleSubmit= () => {
				console.log(email.value, password.value)
			}
			return { handleSubmit, email, password}
		}
	}
</script>

<style >
label, input, button{
	height: 10rem;
	width: 30rem;
	font-size: 2rem;
}
</style>