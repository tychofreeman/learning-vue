import _ from 'lodash';
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)

class Deposit {
    constructor(amt, depositor) {
        this.amt = amt;
    }
}

class Withdraw {
    constructor(amt, merchant) {
        this.amt = amt;
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

export default function() {
    return new Vuex.Store({
        state: {
            accounts: {}
        },
        mutations: {
            add: function(state, name) {
                var acct = new Account(name);
                acct.deposit(0, 'Initial Balance');
                state.accounts[name] = acct;
            },
            deposit: function(state, name, amt, byWhom) {
                state.accounts[name].deposit(amt, byWhom);
            },
            withdraw: function(state, name, amt, byWhom) {
                state.accounts[name].withdraw(amt, byWhom);
            }
        },
        getters: {
                     accts: function(state) {
                                var x = [];
                                _.each(state.accounts, acct => x.push(acct));
                                return x;
                            }
                 }
    });
};
