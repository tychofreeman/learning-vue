import _ from 'lodash';
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)

class Deposit {
    constructor(amt, depositor) {
        this.amt = parseInt(amt);
    }
}

class Withdraw {
    constructor(amt, merchant) {
        this.amt = parseInt(amt);
    }
}

class Account {
    constructor(name) {
        this.name = name;
        this.transactions = [];
    }
    get balance() {
        return this.transactions.map(t => t.amt).reduce((x, y) => x + y, 0)
    }
    deposit(amt, depositor) { 
        this.transactions.push(new Deposit(amt, depositor));
    }
    withdraw(amt, merchant) {
        this.transactions.push(new Withdraw(amt, merchant));
    }
}

export default new Vuex.Store({
    state: {
        accounts: {}
    },
    mutations: {
        add: function(state, name) {
            var acct = new Account(name);
            acct.deposit(0, 'Initial Balance');
            Vue.set(state.accounts, name, acct);
        },
        deposit: function(state, params) {
            var name = params.name;
            var amt = params.amt;
            var byWhom = params.byWhom;
            state.accounts[name].deposit(amt, byWhom);
        },
        withdraw: function(state, params) {
            var name = params.name
            var amt = params.amt;
            var byWhom = params.byWhom;
            state.accounts[name].withdraw(amt, byWhom);
        }
    },
    getters: {
                 accts: function(state) { return function() {
                                var x = [];
                                _.each(state.accounts, acct => x.push(acct));
                                return x;
                        } }
             }
});
