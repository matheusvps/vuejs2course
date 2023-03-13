<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
					<Rotulo nome="E-mail">
						<input type="text" v-model.lazy.trim="usuario.email"> <!-- O v-model gera um two-way data binding: o input altera o componente e, se o componente for alterado internamente, alterará o input dado-->
					<!-- O modificador lazy faz com que a informação só seja atualizada após sair do bloco-->
					<!-- O modificador trim retira os espaços do input-->
					</Rotulo>
					
					<Rotulo nome="Senha">
						<input type="password" v-model="usuario.senha">
					</Rotulo>

					<Rotulo nome="Idade">
						<input type="number" v-model.number="usuario.idade">
						<!-- O modificador number torna o tipo do input em number obrigatoriamente-->
					</Rotulo>

					<Rotulo nome="Mensagem">
						<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
					</Rotulo>

					<Rotulo nome="Características do Problema">
						<span class="mr-4"><input type="checkbox" v-model="caracteristicas"
						value="reproduzivel"> Reproduzível</span>

						<span><input type="checkbox" v-model="caracteristicas"
						value="intermitente"> Intermitente</span>

					</Rotulo>

					<Rotulo nome="Qual produto?">
						<span class="mr-4"><input type="radio" value="Web" v-model="produto"> Web</span>
						<span class="mr-4"><input type="radio" value="Mobile" v-model="mobile"> Mobile</span>
						<span><input type="radio" value="Outro" v-model="outro"> Outro</span>
					</Rotulo>

					<Rotulo nome="Prioridade">
						<select v-model="prioridade">
							<option v-for="prioridade in prioridades" 
							
							:key="prioridade.codigo"
							:value="prioridade.codigo"
							:selected="prioridade.codigo===1">
								{{prioridade.codigo}} - {{prioridade.nome}}
							</option>
						</select>
					</Rotulo>

					<Rotulo nome="Primeira Reclamação?">
						<Escolha v-model="escolha"/>
					</Rotulo>

				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>

			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
					<Rotulo nome="E-mail">
						<span> {{usuario.email}} </span>
					</Rotulo>
					
					<Rotulo nome="Senha">
						<span> {{usuario.senha}} </span>
					</Rotulo>

					<Rotulo nome="Idade">
						<span> {{usuario.idade}} </span>
					</Rotulo>

					<Rotulo nome="Mensagem">
						<span style="white-space: pre;"> {{mensagem}} </span>
						<!-- O estilo aplicado dentro do span preserva os espaços em branco-->
					</Rotulo>

					<Rotulo nome="Características do Problema">
						<span> <!-- Para tratar input do tipo array, basta criar um atributo em data do tipo array, tratando assim todas as possibilidades -->
							<ul>
								<li v-for="c in caracteristicas" :key="c">{{c}}</li>
							</ul>
						</span>
					</Rotulo>

					<Rotulo nome="Marque as Opções">
						<span>???</span>
					</Rotulo>

					<Rotulo nome="Qual produto?">
						<span> {{produto}} </span>
					</Rotulo>

					<Rotulo nome="Prioridade">
						<span> {{prioridade}} </span>
					</Rotulo>

					<Rotulo nome="Primeira Reclamação?">
						<!-- O v-model, no caso de um input, é uma união 
						dos rótulos :value="valorDoInput" e um on-click 
						no formato @input="target=$event.target.value"-->
						<input type="text">
						<span> {{escolha}} </span>
					</Rotulo>

		
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/RotuloArch.vue'
import Escolha from './components/EscolhaArch.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data(){
		return{
			mensagem:'',
			caracteristicas:[],
			produto:'',
			usuario:{
				email:'',
				senha:'',
				idade: 0
			},
			prioridade:1,
			prioridades:[
				{codigo:1, nome:'Baixa'},
				{codigo:2, nome:'Moderada'},
				{codigo:3, nome:'Alta'}
			],
			escolha:true,
			enviado:false
		}
	},
	methods:{
		enviar(){
			this.enviado = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
