import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const handleDelete = async () => {
    const confirm = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );
    if (!confirm) return;

    const { error } = await supabase.from("creators").delete().eq("name", name);

    if (error) setError(error.message);
    else navigate("/");
  };
  const { name } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("name", name)
        .single();

      if (error) setError("Creator not found");
      else setFormData(data);
    };

    fetchCreator();
  }, [name]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("creators")
      .update(formData)
      .eq("name", name);

    if (error) setError(error.message);
    else navigate("/");
  };

  return (
    <main className="container">
      <h2>Edit Creator</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          YouTube URL
          <input
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL
          <input
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Creator</button>
        <button type="button" className="contrast" onClick={handleDelete}>
          Delete Creator
        </button>
      </form>
    </main>
  );
}

export default EditCreator;
