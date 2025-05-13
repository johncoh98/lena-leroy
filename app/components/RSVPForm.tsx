'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbzMif7i3kH5Elrc1qpOVNRIeXLXCQTbSnxqi_MxVv_Yrq1FLt5S0Pr1hZcO9FmXecF2fQ/exec';

type FormFields = {
  fullName: string;
  presenceSoiree: string;
  guestsSoiree: string;
  presenceMairie: string;
  guestsMairie: string;
  comment: string;
};

export default function RSVPForm() {
  const [form, setForm] = useState<FormFields>({
    fullName: '',
    presenceSoiree: '',
    guestsSoiree: '',
    presenceMairie: '',
    guestsMairie: '',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
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
        alert('Une erreur est survenue. Merci de réessayer plus tard.');
      }
    } catch {
      alert('Une erreur est survenue. Merci de réessayer plus tard.');
    }
  };

  return (
    <section className="bg-white/80 text-[var(--foreground)] p-8 rounded-3xl shadow-lg border border-[var(--button-bg)] max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-center">Confirme ta présence</h3>

      {submitted ? (
        <p className="text-[var(--accent-dark)] text-center text-lg font-medium">
          Merci pour ta réponse 💌
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <TextInput label="Nom & Prénom" name="fullName" required onChange={handleChange} />
          <SelectInput
            label="Viendras-tu à la soirée ?"
            name="presenceSoiree"
            required
            options={['Oui', 'Non, avec regrets', 'Pas encore sûr']}
            onChange={handleChange}
          />
          <TextInput
            label="Combien serez-vous pour la soirée ?"
            name="guestsSoiree"
            type="number"
            required
            onChange={handleChange}
          />
          <SelectInput
            label="Viendras-tu à la mairie ?"
            name="presenceMairie"
            required
            options={['Oui', 'Non, avec regrets', 'Pas encore sûr']}
            onChange={handleChange}
          />
          <TextInput
            label="Combien serez-vous pour la mairie ?"
            name="guestsMairie"
            type="number"
            required
            onChange={handleChange}
          />
          <div>
            <label htmlFor="comment" className="block mb-1 text-sm font-medium">
              Message pour les mariés (optionnel)
            </label>
            <textarea
              name="comment"
              rows={3}
              className="w-full p-3 rounded-xl border border-[var(--button-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--button-hover)]"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-white font-semibold py-3 px-6 rounded-full transition shadow"
          >
            💌 Envoyer
          </button>
        </form>
      )}
    </section>
  );
}

type TextInputProps = {
  label: string;
  name: keyof FormFields;
  type?: 'text' | 'number';
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ label, name, type = 'text', required = false, onChange }: TextInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        onChange={onChange}
        className="w-full p-3 rounded-xl border border-[var(--button-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--button-hover)]"
      />
    </div>
  );
}

type SelectInputProps = {
  label: string;
  name: keyof FormFields;
  options: string[];
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function SelectInput({ label, name, options, required = false, onChange }: SelectInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 text-sm font-medium">
        {label}
      </label>
      <select
        name={name}
        required={required}
        onChange={onChange}
        className="w-full p-3 rounded-xl border border-[var(--button-bg)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-hover)]"
      >
        <option value="">Choisir une option</option>
        {options.map((opt) => (
          <option key={opt} value={opt.toLowerCase()}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
