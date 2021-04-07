const { Store } = require('./vuex')
const { get } = require('./service')


const store = new Store({
    state: {
        data: []
    },
    mutation: {
        add(state, value) {
            state.data.push(value)
        },
        setData(state, data) {
            state.data = data
        }
    },
    action: {
        async output({ state }) {
            console.log(state.data);
        },
        async initData({ state, commit }) {
            const data = await get()
            commit('setData', data)
        }
    }
});


(async () => {
    await store.dispatch('initData')
    store.commit('add', 4)
    await store.dispatch('output')
})()
