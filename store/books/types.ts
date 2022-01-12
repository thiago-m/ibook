// eslint-disable-next-line import/named
import { MutationTree } from 'vuex'
import { Book, Show } from '~/models'

export interface Store {
    commit: Function
}

export interface State {
    books: Array<Book>
    book: Partial<Book>
}

export interface Getters {
    $all: (state: State) => Array<Book>
    $single: (state: State) => Partial<Book>
}

export enum Mutations {
    SET_SINGLE = 'SET_SINGLE',
    SET_ALL = 'SET_ALL',
}

export type RootState = ReturnType<() => State>
export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_ALL](s: State, p: Array<Book>): void
    [Mutations.SET_SINGLE](s: State, p: Book): void
}

export interface Actions {
    [x: string]: any
    index: (state: Store) => void
    show: (state: Store, id: Show) => void
}
