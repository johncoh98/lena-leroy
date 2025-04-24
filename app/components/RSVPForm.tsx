'use client';

import { useState } from 'react';

const GOOGLE_FORM_URL = "https://script.google.com/macros/s/AKfycbzMif7i3kH5Elrc1qpOVNRIeXLXCQTbSnxqi_MxVv_Yrq1FLt5S0Pr1hZcO9FmXecF2fQ/exec";

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: '',
    guests: '',
    presenceMairie: '',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Erreur serveur', response);
        alert('Une erreur est survenue. Merci de réessayer plus tard.');
      }
    } catch (error) {
      console.error('Erreur réseau', error);
      alert('Une erreur est survenue. Merci de réessayer plus tard.');
    }
  };

  return (
    <section className="mb-12 max-w-2xl mx-auto text-center bg-[var(--primary)] border border-[var(--button-bg)] p-8 rounded-3xl shadow-lg">
      <h3 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Confirme ta présence</h3>

      {submitted ? (
        <p className="text-[var(--accent-dark)] text-lg font-semibold">Merci pour ta réponse 💌</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <Input label="Ton nom" name="name" type="text" onChange={handleChange} required />
          <Input label="Nombre de personnes" name="guests" type="text" onChange={handleChange} required />
          <div className="flex flex-col">
            <label htmlFor="presenceMairie" className="text-sm font-medium text-[var(--foreground)] mb-1">
              Viendras-tu à la mairie ?
            </label>
            <select
              name="presenceMairie"
              required
              className="p-3 border border-[var(--button-bg)] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-hover)]"
              onChange={handleChange}
            >
              <option value="">Choisir une option</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
              <option value="pas encore sûr">Pas encore sûr</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="comment" className="text-sm font-medium text-[var(--foreground)] mb-1">
              Message pour les mariés (optionnel)
            </label>
            <textarea
              name="comment"
              rows={4}
              placeholder="Un petit mot doux..."
              className="p-3 border border-[var(--button-bg)] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-hover)]"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-white font-semibold py-3 px-6 rounded-full transition duration-200 shadow-md"
          >
            💌 Envoyer
          </button>
        </form>
      )}
    </section>
  );
}

function Input({
  label,
  name,
  type,
  required,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-[var(--foreground)] mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="p-3 border border-[var(--button-bg)] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-hover)]"
        onChange={onChange}
      />
    </div>
  );
}
