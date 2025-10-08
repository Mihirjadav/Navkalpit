import React, { useEffect, useState } from "react";
import { listBlogs, deleteBlog, updateBlog } from "../../utils/adminApi";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    listBlogs().then(setBlogs);
  }, []);

  async function handleDelete(id) {
    if (!confirm("Delete this blog?")) return;
    await deleteBlog(id);
    setBlogs((b) => b.filter((x) => x.id !== id));
  }

  function startEdit(b) {
    setEditingId(b.id);
    setForm({
      title: b.title || "",
      content: b.content || "",
      img: b.img || "",
    });
  }

  async function saveEdit(id) {
    await updateBlog(id, form);
    const updated = await listBlogs();
    setBlogs(updated);
    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({});
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Manage Blogs</h2>
        <div className="text-sm text-gray-500">Total blogs: {blogs.length}</div>
      </div>
      <div className="space-y-4">
        {blogs.map((b) => (
          <div key={b.id} className="card p-4 rounded">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{b.title}</div>
                <div className="text-sm text-gray-500">
                  {new Date(b.createdAt).toLocaleString()}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => startEdit(b)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => handleDelete(b.id)}
                >
                  Delete
                </button>
              </div>
            </div>

            {editingId === b.id && (
              <div className="mt-3 space-y-2">
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                />
                <textarea
                  className="w-full border rounded px-2 py-1"
                  rows={4}
                  value={form.content}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, content: e.target.value }))
                  }
                />
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 bg-brand text-white rounded"
                    onClick={() => saveEdit(b.id)}
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
