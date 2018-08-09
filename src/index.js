import Vue from 'vue';
import Vuex from 'vuex';
import LedgerStore from 'ledgerStore'
import Ledger from 'ledger.vue'
import Accounts from 'accounts.vue'

Vue.use(Vuex);

const store = LedgerStore();

store.commit('add', 'bobby');

window.vueApp = new Vue({
    store,
    el: '#app',
    components: {  Ledger, Accounts },
    template: `
        <div class='app'>
            <ledger></ledger>
            <accounts></accounts>
        </div>
    `,
})
