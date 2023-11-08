<script>
    export default {
        name: 'AppMessage',
        data() {
            return {

            };
        },
        methods: {
            
        }
    }

</script>

<template>
    <h1>ciao</h1>
    <form action="" method="POST">
        <label for="name">Nome</label>
        <input type="text" id="name">
        <label for="surname">Cognome</label>
        <input type="text" id="surname">
        <label for="email">Email</label>
        <input type="email" id="email">
        <label for="message">Messaggio</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit"></button>
    </form>
</template>

<style scoped lang="scss">

</style>