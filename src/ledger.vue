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
        return {
            
        }
    }
};
</script>
<style>
</style>
