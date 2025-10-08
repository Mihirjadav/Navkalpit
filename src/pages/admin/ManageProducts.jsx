import React, { useEffect, useState } from "react";
import {
  listProducts,
  deleteProduct,
  updateProduct,
} from "../../utils/adminApi";
import ProductCard from "../../components/ProductCard";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  async function load() {
    const p = await listProducts();
    setProducts(p);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id) {
    if (!confirm("Delete this product?")) return;
    await deleteProduct(id);
    load();
  }

  function startEdit(p) {
    setEditingId(p.id);
    setForm({
      name: p.name || "",
      price: p.price || "",
      sku: p.sku || "",
      stock: p.stock || "",
      description: p.description || "",
    });
  }

  async function saveEdit(id) {
    await updateProduct(id, form);
    setEditingId(null);
    load();
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({});
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Manage Products</h2>
        <div className="text-sm text-gray-500">
          Total products: {products.length}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="space-y-2">
            <div className="card overflow-hidden">
              <ProductCard img={p.img} name={p.name} price={p.price} />
            </div>
            {editingId === p.id ? (
              <div className="p-3 border rounded space-y-2 bg-card">
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.price}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, price: e.target.value }))
                  }
                />
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.sku}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, sku: e.target.value }))
                  }
                />
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 bg-brand text-white rounded"
                    onClick={() => saveEdit(p.id)}
                  >
                    Save
                  </button>
                  <button
                    className="px-3 py-1 border rounded"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 mt-2">
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => startEdit(p)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
