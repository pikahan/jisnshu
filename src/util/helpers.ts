export interface Immutable<T> {
    get<K extends keyof T>(key: K): T[K]
    set<K extends keyof T, V extends T[K]>(key: K, value: V): Immutable<T>
    getIn(value: Array<string>): any
}
