import { createStore, del, get, set } from 'idb-keyval'

export const indexedDB = createStore('RUBN/COND', 'URL-Shortener')

export abstract class Store<T extends Object> {
  protected state: T

  constructor(readonly storeName: string) {
    const data = this.data()
    this.state = reactive(data) as T
  }

  /**
    * Initialize the state from the store
    *
    * @protected
    * @abstract
    */
  protected abstract data(): T

  /**
    * Gets the current state from the store
    */
  public getState(): T {
    return readonly(this.state) as T
  }
}

export abstract class PersistentStore<T extends Object> extends Store<T> {
  isInitialized = ref(false)

  private readonly initialStoreName: string

  constructor(readonly storeName: string) {
    super(storeName)
    this.initialStoreName = `initial-${this.storeName}`
  }

  /**
    * Initialize the store.
    */
  async init() {
    if (!this.isInitialized.value) {
      // Sets initial state to IDB
      await set(this.initialStoreName, JSON.stringify(this.getState()), indexedDB)

      const initialStateFromIDB: string | undefined = await get(this.initialStoreName, indexedDB)

      const stateFromIDB: string | undefined = await get(this.storeName, indexedDB)

      // Sets state to IDB
      Object.assign(this.state, JSON.parse(String(stateFromIDB ?? initialStateFromIDB)))

      // Watches for changes in the state to update the value at the IndexedDB
      watch(
        () => this.state,
        async(val) => {
          await set(this.storeName, JSON.stringify(val), indexedDB)
        },
        { deep: true },
      )

      this.isInitialized.value = true
    }
  }

  /**
    * Resets all values to the initial state.
    */
  async reset() {
    const initialStateFromIDB: string | undefined = await get(this.initialStoreName, indexedDB)

    if (initialStateFromIDB)
      Object.assign(this.state, JSON.parse(initialStateFromIDB))
  }

  /**
    * Deletes all data from the store.
    */
  async delete() {
    await this.reset()
    await del(this.initialStoreName, indexedDB)
    await del(this.storeName, indexedDB)
  }
}
