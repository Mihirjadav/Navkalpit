import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../utils/adminApi";
import PrimaryButton from "../../components/PrimaryButton";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [imgData, setImgData] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  function readFileAsDataURL(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  }

  async function handleImage(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      const data = await readFileAsDataURL(f);
      setImgData(data);
    } catch (err) {
      console.error(err);
      alert("Failed to read image");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !price) {
      alert("Please provide at least a name and price");
      return;
    }
    setSaving(true);
    await addProduct({ name, price, sku, stock, description, img: imgData });
    setSaving(false);
    navigate("/admin/products/manage");
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <label className="block">
          <div className="text-sm font-medium mb-1">Product name *</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product name"
            className="w-full border rounded-md px-3 py-2"
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block">
            <div className="text-sm font-medium mb-1">Price *</div>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full border rounded-md px-3 py-2"
            />
          </label>
          <label className="block">
            <div className="text-sm font-medium mb-1">SKU</div>
            <input
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="SKU"
              className="w-full border rounded-md px-3 py-2"
            />
          </label>
        </div>

        <label className="block">
          <div className="text-sm font-medium mb-1">Stock</div>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Stock quantity"
            className="w-full border rounded-md px-3 py-2"
          />
        </label>

        <label className="block">
          <div className="text-sm font-medium mb-1">Description</div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            rows={4}
          />
        </label>

        <label className="block">
          <div className="text-sm font-medium mb-1">Image (upload)</div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full"
          />
          {imgData && (
            <img
              src={imgData}
              alt="preview"
              className="mt-2 w-40 h-40 object-cover rounded-md"
            />
          )}
        </label>

        <PrimaryButton type="submit" className="inline-block">
          {saving ? "Saving..." : "Add Product"}
        </PrimaryButton>
      </form>
    </div>
  );
}
