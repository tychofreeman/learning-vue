<template>
    <ul>
        <li v-for='acct in accts'>
            {{ acct.name }}
        </li>
    </ul>
</template>
<script>

module.exports = {
    data: function() {
        return { }
    },
    computed: {
        accts: function() {
            console.log("SKJASDLAJKSDLKJASD")
            var x = [];
            _.each(this.$store.getters.accts(), acct => x.push(acct));
            return x;
        }
    }
};
</script>
<style>
</style>
