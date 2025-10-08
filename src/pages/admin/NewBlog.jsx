import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../../utils/adminApi";
import PrimaryButton from "../../components/PrimaryButton";

export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgData, setImgData] = useState("");
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
    const data = await readFileAsDataURL(f);
    setImgData(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addBlog({ title, content, img: imgData });
    setTitle("");
    setContent("");
    setImgData("");
    navigate("/admin/blogs");
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border rounded-md px-3 py-2"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full border rounded-md px-3 py-2 h-48"
        />
        <label className="block">
          <div className="text-sm font-medium mb-1">Image</div>
          <input type="file" accept="image/*" onChange={handleImage} />
          {imgData && (
            <img
              src={imgData}
              alt="preview"
              className="mt-2 w-48 h-32 object-cover rounded"
            />
          )}
        </label>
        <PrimaryButton type="submit">Publish</PrimaryButton>
      </form>
    </div>
  );
}
