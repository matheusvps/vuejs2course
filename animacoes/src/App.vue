<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4"
				@click="exibir = !exibir" > Mostrar mensagem </b-button>

		<transition name="fade">
			<b-alert variant="info" show v-if="exibir"> {{msg}} </b-alert>
		</transition>
		<!-- Definir o type em uma transition ajuda a "decidir" quem manda na transição -->
		<!-- <transition name="slide" type="transition" appear> <O appear faz a transição acontecer no momento do carregamento -->
			<!-- Para um elemento, o v-show trabalha legal -->
			<!-- <b-alert variant="info" show v-show="exibir"> {{msg}} </b-alert>
		</transition>

		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
		<b-alert variant="info" show v-show="exibir"> {{msg}} </b-alert>
		</transition> -->

		<hr>
		<b-select v-model="tipoAnimacao" mode="out-in"> <!-- O mode out-in faz o elemento sair e o outro entra em seguida -->
			<option value="fade">	Fade </option>
			<option value="slide"> Slide </option>
		</b-select>

		<transition :name="tipoAnimacao">
			<b-alert variant="info" show v-if="exibir"> {{msg}} </b-alert>
			<b-alert variant="warning" show v-else> {{msg}} </b-alert>

		</transition>

		<hr>
		<button @click="exibir2 = !exibir2"> Mostrar </button>
		<transition 
		:css="false" 
		@before-enter="beforeEnter" 
		@enter="enter"
		@after-enter="afterEnter" 
		@enter-cancelled="enterCancelled"
		
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition>



	</div>
</template>

<script>

export default {
	data(){
		return{
			msg:'Mensagem para o usuário',
			exibir:false,
			exibir2:true,
			tipoAnimacao:'fade'
		}
	},
	methods:{
		beforeEnter(el){
			console.log('beforeEnter')
		},
		enter(el,done){
			console.log('beforeEnter')
			done()
		},
		afterEnter(el){
			console.log('afterEnter')
		},
		enterCancelled(){
			console.log('enterCancelled')
		},
		beforeLeave(el){
			console.log('beforeLeave')
		},
		leave(el,done){
			console.log('leave')
			done()
		},
		afterLeave(el){
			console.log('afterLeave')
		},
		leaveCancelled(){
			console.log('leaveCancelled')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.fade-enter, .fade-leave-to{
	opacity:0;
}

.fade-enter-active,.fade-leave-active{
	transition:opacity 2s;
}

@keyframes slide-in{
	from{ transform: translateY(40px);}
	to{ transform: translateY(0);}
}

@keyframes slide-out{
	from {transform: translateY(0);}
	to {transform:translateY(40px);}
}

.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active{
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to{
	opacity:0;
}

.caixa{
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen; 
}

</style>
