import { State, Getters, Mutations, MutationsInterface, Actions } from './types'

export const state = (): State => ({
    books: [],
    book: {}
})

export const getters: Getters = {
    $all: state => state.books,
    $single: state => state.book
}

export const mutations: MutationsInterface = {
    [Mutations.SET_SINGLE] (state, book) {
        state.book = book
    },
    [Mutations.SET_ALL] (state, books) {
        state.books = books
    },
}

export const actions: Actions = {
    async index({commit}) {
        const books = await this.$axios.$get('/books')
        commit('SET_ALL', books)
    },
    async show({commit}, {id}) {
        const book = await this.$axios.$get(`/books/${id}`)
        commit('SET_SINGLE', book)
    }
}
