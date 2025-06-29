// pages/AddCreator.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!formData.name || !formData.url) {
      setError('Name and URL are required.');
      return;
    }

    const { error } = await supabase.from('creators').insert([formData]);

    if (error) {
      setError(error.message);
    } else {
      navigate('/creators');
    }
  };

  return (
    <main className="container">
      <h2>Add New Creator</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name *
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          YouTube URL *
          <input type="url" name="url" value={formData.url} onChange={handleChange} required />
        </label>

        <label>
          Description
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>

        <label>
          Image URL
          <input type="url" name="imageURL" value={formData.imageURL} onChange={handleChange} />
        </label>

        <button type="submit">Add Creator</button>
      </form>
    </main>
  );
}

export default AddCreator;
