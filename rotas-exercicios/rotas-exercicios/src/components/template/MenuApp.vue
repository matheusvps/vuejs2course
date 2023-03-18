<template>
    <nav class="menu">
        <ul>
            <!-- Posso setar tags para URLs do router, setando active-class
            (define quando um link estará ou não ativo) e o exact faz com que 
            só fique ativo se for EXATAMENTE a URL definida . -->
        <router-link to="/" tag="li" active-class="active" exact>
         <a> Início </a>  </router-link>
        <router-link to="/usuario" tag="li" active-class="active">
         <a> Usuário </a> </router-link>

        </ul>
       
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>

</style>