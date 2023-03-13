<template>
    <div class="citacao">
        <slot name="fonte"> <!-- Permite passar aquilo que foi passado dentro do corpo do componente--> </slot>
        <slot></slot> <!-- Esse slot vai ser interpretado como padrão e vai receber a informação sem name do componente que passa os atributos -->
        <div class="autor"> <slot name="autor"></slot> </div>
    </div>
</template>

<script>
export default {
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    }
}
</script>
<!-- Posso aplicar estilo dentro do componente que recebe o slot tanto quanto no que fornece o slot -->
<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
    
    .autor{
        float:right;
    }
</style>
