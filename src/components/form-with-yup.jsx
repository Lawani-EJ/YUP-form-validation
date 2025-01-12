import React, { useState } from 'react';
import * as Yup from 'yup';
import '../../src/App.css'; // Import the external CSS

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = async () => {
    const schema = Yup.object({
      name: Yup.string().required('Name is required!'),
      email: Yup.string().email('Invalid email format!').required('Email is required!'),
    });

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      alert('Form is valid! 🚀');
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <div className="form-container">
      <h1>Simple YUP Form 😁👍🏿</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <button type="submit" className="button">
          Submit ✨
        </button>
      </form>
    </div>
  );
}

export default MyForm;
