<template>
    <div>
    hi there!!
        <select v-model="acct">
            <option v-bind:value="acct.name" v-for='acct in accts'>{{ acct.name }}</option>
        </select>
        <input v-model="amt"></input>
        <button @click="deposit">Deposit</button>
        <button @click="withdraw">Withdraw</button>
    </div>
</template>
<script>

module.exports = {
    data: function() {
        return { amt: 0, acct: 0 }
    },
    computed: {
        accts: function() {
            console.log("SKJASDLAJKSDLKJASD")
            var x = [];
            _.each(this.$store.getters.accts(), acct => x.push(acct));
            return x;
        }
    },
    methods: {
        deposit() {
            this.$store.commit('deposit', {name: this.acct, amt: this.amt})
        },
        withdraw() {
            this.$store.commit('withdraw', {name: this.acct, amt: this.amt})
        }
    }
};
</script>
<style>
</style>
