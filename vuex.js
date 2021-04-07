function Store({ state, mutation, action }) {
    this.state = state
    this.mutation = mutation
    this.action = action

    this.commit = (mutationName, ...args) => {
        this.mutation[mutationName].call(this, this.state, ...args)
    }

    this.dispatch = async (actionName, ...args) => {
        await this.action[actionName].call(this, {
            state: this.state,
            commit: this.commit
        }, ...args)
    }

}

module.exports = {
    Store
}