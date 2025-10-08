// Simple client-side admin API using localStorage for demo purposes
const PRODUCTS_KEY = "nav_products";
const ORDERS_KEY = "nav_orders";
const BLOGS_KEY = "nav_blogs";

const delay = (ms = 150) => new Promise((res) => setTimeout(res, ms));

function read(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (e) {
    return [];
  }
}

function write(key, data) {
  localStorage.setItem(key, JSON.stringify(data || []));
}

// Products
export async function listProducts() {
  await delay();
  return read(PRODUCTS_KEY);
}

export async function addProduct(product) {
  await delay();
  const items = read(PRODUCTS_KEY);
  const id = Date.now();
  const p = { id, ...product };
  items.unshift(p);
  write(PRODUCTS_KEY, items);
  return p;
}

export async function updateProduct(id, updates) {
  await delay();
  const items = read(PRODUCTS_KEY).map((p) =>
    p.id === id ? { ...p, ...updates } : p
  );
  write(PRODUCTS_KEY, items);
  return items.find((p) => p.id === id);
}

export async function deleteProduct(id) {
  await delay();
  const items = read(PRODUCTS_KEY).filter((p) => p.id !== id);
  write(PRODUCTS_KEY, items);
  return true;
}

// Orders
export async function listOrders() {
  await delay();
  return read(ORDERS_KEY);
}

export async function addOrder(order) {
  await delay();
  const items = read(ORDERS_KEY);
  const id = Date.now();
  const o = { id, ...order };
  items.unshift(o);
  write(ORDERS_KEY, items);
  return o;
}

// Blogs
export async function listBlogs() {
  await delay();
  return read(BLOGS_KEY);
}

export async function addBlog(blog) {
  await delay();
  const items = read(BLOGS_KEY);
  const id = Date.now();
  const b = { id, createdAt: new Date().toISOString(), ...blog };
  items.unshift(b);
  write(BLOGS_KEY, items);
  return b;
}

export async function updateBlog(id, updates) {
  await delay();
  const items = read(BLOGS_KEY).map((b) =>
    b.id === id ? { ...b, ...updates } : b
  );
  write(BLOGS_KEY, items);
  return items.find((b) => b.id === id);
}

export async function deleteBlog(id) {
  await delay();
  const items = read(BLOGS_KEY).filter((b) => b.id !== id);
  write(BLOGS_KEY, items);
  return true;
}

// Utility: ensure initial sample data exists
export function seedAdminDemo() {
  if (!localStorage.getItem(PRODUCTS_KEY)) {
    write(PRODUCTS_KEY, [
      {
        id: Date.now() - 3,
        name: "Sample PCB A",
        price: "₹1500",
        img: "/assets/images/PCB.webp",
      },
      {
        id: Date.now() - 2,
        name: "Sample PCB B",
        price: "₹2500",
        img: "/assets/images/PCBM.webp",
      },
    ]);
  }
  if (!localStorage.getItem(BLOGS_KEY)) {
    write(BLOGS_KEY, [
      {
        id: Date.now() - 1,
        title: "Welcome to Navkalpit Blog",
        content: "This is a demo blog post.",
      },
    ]);
  }
}

export default {
  listProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  listOrders,
  addOrder,
  listBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  seedAdminDemo,
};
