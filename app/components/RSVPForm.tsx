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
    <div className="invitation-container p-6 md:p-12 rounded-lg max-w-3xl mx-auto">
      <h2 className="title-royal text-xl md:text-2xl lg:text-3xl text-center mb-8 md:mb-12">
        <span className="text-accent">C</span>onfirme ta présence
      </h2>

      {submitted ? (
        <div className="text-center space-y-4">
          <p className="text-refined text-base md:text-lg">
            Merci pour ta réponse
          </p>
          <p className="text-accent text-lg">✦</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
          <div className="space-y-1.5">
            <label htmlFor="comment" className="block text-refined text-xs md:text-sm">
              Message pour les mariés (optionnel)
            </label>
            <textarea
              name="comment"
              rows={3}
              className="w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[var(--accent)]/20 rounded-lg p-2.5 text-refined text-xs md:text-sm focus:outline-none focus:border-[var(--accent)]/40 transition-colors"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[rgba(212,175,55,0.1)] hover:bg-[rgba(212,175,55,0.2)] border border-[var(--accent)]/20 text-accent py-2.5 px-5 rounded-lg transition-all duration-300 text-xs md:text-sm hover:border-[var(--accent)]/40"
          >
            Envoyer ma réponse
          </button>
        </form>
      )}
    </div>
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
    <div className="space-y-1">
      <label htmlFor={name} className="block text-refined text-xs md:text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        onChange={onChange}
        className="w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[var(--accent)]/20 rounded-lg p-2.5 text-refined text-xs md:text-sm focus:outline-none focus:border-[var(--accent)]/40 transition-colors"
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
    <div className="space-y-1">
      <label htmlFor={name} className="block text-refined text-xs md:text-sm">
        {label}
      </label>
      <select
        name={name}
        required={required}
        onChange={onChange}
        className="w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[var(--accent)]/20 rounded-lg p-2.5 text-refined text-xs md:text-sm focus:outline-none focus:border-[var(--accent)]/40 transition-colors appearance-none"
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
