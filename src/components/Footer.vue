<template>
    <v-main class="footer" >
        <footer >
            <p>Copyright © {{year}}. Made By {{name}}. </p>
        </footer>
    </v-main>
</template>

<script>


export default {
    
    data() {
        return {
            year: new Date().getFullYear(),
            name: "Germel John A. Marata"
        }
    }
}
</script>

<style scoped>

.footer {
    background-color: #B3E2A7;
    padding: 20px;
    text-align: center;
    font-family: 'VT323', monospace;
    font-size: 20px;
}
</style>
