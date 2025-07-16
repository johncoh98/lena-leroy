'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import React from 'react';

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbzrPPSzsmLUoc71rZFfFUjDyiQ_znnFfZ2yl8qD4OMhS2ewdaIwh8eaamUqTELEQD6gXQ/exec';

type FormFields = {
  fullName: string;
  presenceSoiree: string;
  guestsSoiree: string;
  comment: string;
  additionalGuestsSoiree: string[];
};

export default function RSVPForm() {
  const [form, setForm] = useState<FormFields>({
    fullName: '',
    presenceSoiree: '',
    guestsSoiree: '',
    comment: '',
    additionalGuestsSoiree: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAdditionalGuestChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    setForm(prev => ({
      ...prev,
      additionalGuestsSoiree: prev.additionalGuestsSoiree.map(
        (guest, i) => (i === index ? value : guest)
      ),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validation côté client
    if (!form.fullName.trim()) {
      alert('Veuillez remplir votre nom et prénom');
      return;
    }
    
    if (!form.presenceSoiree) {
      alert('Veuillez indiquer si vous viendrez à la soirée');
      return;
    }

    if (form.presenceSoiree.toLowerCase() !== 'non, avec regrets' && !form.guestsSoiree) {
      alert('Veuillez indiquer combien vous serez pour la soirée');
      return;
    }

    // Log pour debugger
    console.log('📝 Données du formulaire:', form);
    console.log('🔍 Navigateur détecté:', navigator.userAgent.includes('Firefox') ? 'Firefox' : 'Autre');
    
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Préparer les données FormData pour Google Apps Script
      const formData = new FormData();
      formData.append('fullName', form.fullName.trim());
      formData.append('presenceSoiree', form.presenceSoiree);
      formData.append('guestsSoiree', form.guestsSoiree);
      formData.append('comment', form.comment);
      
      // Ajouter les invités supplémentaires
      form.additionalGuestsSoiree.forEach((guest, index) => {
        if (guest.trim()) {
          formData.append(`additionalGuestSoiree${index + 1}`, guest.trim());
        }
      });
      
      // Ajouter timestamp pour traçabilité
      formData.append('timestamp', new Date().toISOString());
      formData.append('browser', navigator.userAgent.includes('Firefox') ? 'Firefox' : navigator.userAgent);

      console.log('📤 Envoi du formulaire vers:', GOOGLE_FORM_URL);

      // Utiliser fetch au lieu de iframe pour une meilleure compatibilité
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Important pour Google Apps Script
        body: formData
      });

      console.log('✅ Réponse reçue, formulaire probablement envoyé avec succès');
      
      // Avec mode no-cors, on ne peut pas vérifier le statut de réponse
      // mais l'absence d'erreur indique généralement un succès
      setIsSubmitting(false);
      setSubmitted(true);

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du formulaire:', error);
      setIsSubmitting(false);
      setSubmitError(true);
    }
  };

  return (
    <div className="invitation-container p-6 md:p-12 rounded-lg max-w-3xl mx-auto">
      <h2 className="title-royal text-lg md:text-xl lg:text-2xl text-center mb-6 md:mb-8">
        <span className="text-accent">C</span>onfirme ta présence
      </h2>
      
      <div className="bg-[rgba(212,175,55,0.1)] border border-[var(--accent)]/20 rounded-lg p-4 mb-6 text-center">
        <p className="text-[var(--accent)] text-xs md:text-sm">
          ⚠️ <strong>Important :</strong> Formulaire optimisé pour tous les navigateurs (Chrome, Firefox, Safari, Edge). 
          En cas de problème, contactez directement les mariés. Votre participation nous tient à cœur !
        </p>
      </div>



      {submitted ? (
        <div className="text-center space-y-4">
          <p className="text-refined text-base md:text-lg">
            Merci pour ta réponse
          </p>
          <p className="text-accent text-base">✦</p>
        </div>
      ) : submitError ? (
        <div className="text-center space-y-4">
          <p className="text-red-400 text-base md:text-lg">
            Erreur lors de l&apos;envoi. Veuillez réessayer.
          </p>
          <button
            onClick={() => setSubmitError(false)}
            className="text-accent underline text-sm"
          >
            Réessayer
          </button>
        </div>
      ) : (
        <form
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
                  onChange={(e) => handleAdditionalGuestChange(e, index)}
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
            disabled={isSubmitting}
            className={`w-full py-2.5 px-5 rounded-lg transition-all duration-300 text-xs md:text-sm ${
              isSubmitting 
                ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed' 
                : 'bg-[rgba(212,175,55,0.1)] hover:bg-[rgba(212,175,55,0.2)] border border-[var(--accent)]/20 text-accent hover:border-[var(--accent)]/40'
            }`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma réponse'}
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
