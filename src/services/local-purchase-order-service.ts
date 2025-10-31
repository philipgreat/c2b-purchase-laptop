// src/lib/purchaseDB.ts
// A lightweight IndexedDB wrapper for purchase order records.

export interface PurchaseOrder {
  id?: number; // Auto-increment primary key
  timestamp: string; // e.g., "2025-10-31T09:00:00Z"
  customerName: string;
  itemName: string;
  manufactureDate: string;
  price: number;
  email: string;
  signatureBase64: string;
  notes?: string;
}

// --- internal helpers ---
const DB_NAME = "PurchaseOrderDB";
const STORE_NAME = "purchase_orders";
const DB_VERSION = 1;

// open (or create) database
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("customerName", "customerName", { unique: false });
        store.createIndex("itemName", "itemName", { unique: false });
        store.createIndex("timestamp", "timestamp", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// --- CRUD functions ---

/** Add a new purchase order */
export async function addPurchaseOrder(order: PurchaseOrder): Promise<number> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const req = store.add(order);
    req.onsuccess = () => resolve(req.result as number);
    req.onerror = () => reject(req.error);
  });
}

/** Get all purchase orders */
export async function getAllOrders(): Promise<PurchaseOrder[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result as PurchaseOrder[]);
    req.onerror = () => reject(req.error);
  });
}

/** Find orders by customer name (case-insensitive) */
export async function findOrdersByCustomer(name: string): Promise<PurchaseOrder[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME).index("customerName");
    const lower = name.toLowerCase();
    const results: PurchaseOrder[] = [];
    store.openCursor().onsuccess = (e) => {
      const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
      if (cursor) {
        const record = cursor.value as PurchaseOrder;
        if (record.customerName.toLowerCase().includes(lower)) results.push(record);
        cursor.continue();
      } else resolve(results);
    };
    tx.onerror = () => reject(tx.error);
  });
}

/** Find orders by item name */
export async function findOrdersByItem(item: string): Promise<PurchaseOrder[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME).index("itemName");
    const lower = item.toLowerCase();
    const results: PurchaseOrder[] = [];
    store.openCursor().onsuccess = (e) => {
      const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
      if (cursor) {
        const record = cursor.value as PurchaseOrder;
        if (record.itemName.toLowerCase().includes(lower)) results.push(record);
        cursor.continue();
      } else resolve(results);
    };
    tx.onerror = () => reject(tx.error);
  });
}

/** Delete an order by ID */
// export async function deleteOrder(id: number): Promise<void> {
//   const db = await openDB();
//   return new Promise((resolve, reject) => {
//     const tx = db.transaction(STORE_NAME, "readwrite");
//     const store = tx.objectStore(STORE_NAME);
//     const req = store.delete(id);
//     req.onsuccess = () => resolve();
//     req.onerror = () => reject(req.error);
//   });
// }
