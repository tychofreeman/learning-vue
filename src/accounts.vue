import ledgerStore from 'ledgerStore'

<template>
  <div class='js-account-list'>
       <ul>
            <li v-for='acct in getAccts'>{{ acct.name }} : {{ acct.balance }}</li>
       </ul>
       <input>{{ name }}</input>
       <button @click='addAcct'>Click Me!!</button>
   </div>

</template>
<script>
module.exports = {
    data: {
        function() { 
            return { name: '' }
        }
    },
    computed: {
        getAccts () {
            console.log("Re-evaluating accts().");
            var x = [];
            _.each(this.$store.state.accounts, acct => x.push(acct));
            return x;
        }
    },
    methods: {
        addAcct: function() {
            this.$store.commit('add', this.name);
        }
    }
}
</script>
<style>
</style>
