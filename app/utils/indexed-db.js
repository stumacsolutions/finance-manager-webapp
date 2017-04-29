/* global indexedDB */
class IndexedDB {
  setupDB () {
    return new Promise((resolve, reject) => {
      if (!global.indexedDB) {
        resolve({})
      }
      const openRequest = indexedDB.open('webapp', 2)
      openRequest.onupgradeneeded = e => {
        this.db = e.target.result
        if (!this.db.objectStoreNames.contains('state')) {
          this.db.createObjectStore('state')
        }
      }

      openRequest.onsuccess = e => {
        this.db = e.target.result
        const transaction = this.db.transaction(['state'], 'readwrite')
        const store = transaction.objectStore('state')
        store.get('state').onsuccess = event => resolve(event.target.result)
      }
    })
  }

  saveStateToDB (data) {
    if (!this.db || !data) return
    const transaction = this.db.transaction(['state'], 'readwrite')
    const store = transaction.objectStore('state')
    store.put(data, 'state')
  }
}
export default new IndexedDB()
