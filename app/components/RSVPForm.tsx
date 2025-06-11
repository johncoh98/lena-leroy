'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import React from 'react';

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbx4MeA-pZRZqnJcwKWIL-OpuzVISTlvfy-Ds2rinHpQ-xME_t9jnotw2QVxakhwZhnlMA/exec';

type FormFields = {
  fullName: string;
  presenceSoiree: string;
  guestsSoiree: string;
  presenceMairie: string;
  guestsMairie: string;
  comment: string;
  additionalGuestsSoiree: string[];
  additionalGuestsMairie: string[];
};

export default function RSVPForm() {
  const [form, setForm] = useState<FormFields>({
    fullName: '',
    presenceSoiree: '',
    guestsSoiree: '',
    presenceMairie: '',
    guestsMairie: '',
    comment: '',
    additionalGuestsSoiree: [],
    additionalGuestsMairie: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'guestsSoiree') {
      const guestsCount = parseInt(value) || 0;
      setForm(prev => ({
        ...prev,
        [name]: value,
        additionalGuestsSoiree: Array(Math.max(0, guestsCount - 1)).fill('')
      }));
    } else if (name === 'guestsMairie') {
      const guestsCount = parseInt(value) || 0;
      setForm(prev => ({
        ...prev,
        [name]: value,
        additionalGuestsMairie: Array(Math.max(0, guestsCount - 1)).fill('')
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAdditionalGuestChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
    type: 'soiree' | 'mairie'
  ) => {
    const { value } = event.target;
    setForm(prev => ({
      ...prev,
      [type === 'soiree' ? 'additionalGuestsSoiree' : 'additionalGuestsMairie']: prev[type === 'soiree' ? 'additionalGuestsSoiree' : 'additionalGuestsMairie'].map(
        (guest, i) => (i === index ? value : guest)
      ),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      // Clear old hidden fields
      [...formRef.current.querySelectorAll('input[type="hidden"]')].forEach(el => el.remove());

      // Add hidden inputs for additional guests
      form.additionalGuestsMairie.forEach((guest, index) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = `additionalGuestMairie${index + 1}`;
        input.value = guest;
        formRef.current?.appendChild(input);
      });

      form.additionalGuestsSoiree.forEach((guest, index) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = `additionalGuestSoiree${index + 1}`;
        input.value = guest;
        formRef.current?.appendChild(input);
      });

      formRef.current.submit();
      setSubmitted(true);
    }
  };

  return (
    <div className="invitation-container p-6 md:p-12 rounded-lg max-w-3xl mx-auto">
      <h2 className="title-royal text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-10">
        <span className="text-accent">C</span>onfirme ta présence
      </h2>

      <iframe name="hidden_iframe" ref={iframeRef} style={{ display: 'none' }} />

      {submitted ? (
        <div className="text-center space-y-4">
          <p className="text-refined text-base md:text-lg">
            Merci pour ta réponse
          </p>
          <p className="text-accent text-base">✦</p>
        </div>
      ) : (
        <form
          ref={formRef}
          action={GOOGLE_FORM_URL}
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
        >
          <TextInput
            label="Nom & Prénom"
            name="fullName"
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
          {form.presenceMairie.toLowerCase() !== 'non, avec regrets' && (
            <>
              <TextInput
                label="Combien serez-vous pour la mairie ?"
                name="guestsMairie"
                type="number"
                min="1"
                required
                onChange={handleChange}
              />
              {form.additionalGuestsMairie.map((_, index) => (
                <TextInput
                  key={`mairie-guest-${index}`}
                  label={`Nom & Prénom de l'invité ${index + 2}`}
                  name={`additionalGuestMairie${index + 1}`}
                  required
                  onChange={(e) => handleAdditionalGuestChange(e, index, 'mairie')}
                />
              ))}
            </>
          )}

          <SelectInput
            label="Viendras-tu à la soirée ?"
            name="presenceSoiree"
            required
            options={['Oui', 'Non, avec regrets', 'Pas encore sûr']}
            onChange={handleChange}
          />
          {form.presenceSoiree.toLowerCase() !== 'non, avec regrets' && (
            <>
              <TextInput
                label="Combien serez-vous pour la soirée ?"
                name="guestsSoiree"
                type="number"
                min="1"
                required
                onChange={handleChange}
              />
              {form.additionalGuestsSoiree.map((_, index) => (
                <TextInput
                  key={`soiree-guest-${index}`}
                  label={`Nom & Prénom de l'invité ${index + 2}`}
                  name={`additionalGuestSoiree${index + 1}`}
                  required
                  onChange={(e) => handleAdditionalGuestChange(e, index, 'soiree')}
                />
              ))}
            </>
          )}

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
  name: string;
  type?: 'text' | 'number';
  required?: boolean;
  min?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ label, name, type = 'text', required = false, min, onChange }: TextInputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-refined text-xs md:text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        min={min}
        onChange={onChange}
        className="w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[var(--accent)]/20 rounded-lg p-2.5 text-refined text-xs md:text-sm focus:outline-none focus:border-[var(--accent)]/40 transition-colors"
      />
    </div>
  );
}

type SelectInputProps = {
  label: string;
  name: string;
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
