'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import React from 'react';

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbw4LSoPCP-EN9lXOa6VQfWnZRd4ASZklzDvz3jb1pOR8g1zYFtyeedu7M9YwaCi6IUV/exec/exec';

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
      // Méthode 1: Essayer avec fetch en mode cors
      console.log('📤 Tentative avec fetch (mode cors)...');
      
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

      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'cors',
        body: formData
      });

      if (response.ok) {
        console.log('✅ Réponse reçue avec succès');
        setIsSubmitting(false);
        setSubmitted(true);
        return;
      } else {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

    } catch (error) {
      console.error('❌ Erreur avec fetch:', error);
      
      // Méthode 2: Essayer avec XMLHttpRequest
      try {
        console.log('🔄 Tentative avec XMLHttpRequest...');
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', GOOGLE_FORM_URL, true);
        
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

        xhr.onload = function() {
          if (xhr.status === 200 || xhr.status === 0) {
            console.log('✅ Envoi réussi avec XMLHttpRequest');
            setIsSubmitting(false);
            setSubmitted(true);
          } else {
            throw new Error(`Erreur XMLHttpRequest: ${xhr.status}`);
          }
        };
        
        xhr.onerror = function() {
          throw new Error('Erreur réseau XMLHttpRequest');
        };
        
        xhr.send(formData);
        
      } catch (xhrError) {
        console.error('❌ Erreur avec XMLHttpRequest:', xhrError);
        
        // Méthode 3: Fallback avec iframe
        try {
          console.log('🔄 Tentative avec méthode de fallback (iframe)...');
          
          // Créer un iframe caché pour l'envoi
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
          
          // Créer un formulaire dans l'iframe
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const formElement = iframeDoc.createElement('form');
            formElement.method = 'POST';
            formElement.action = GOOGLE_FORM_URL;
            
            // Ajouter les champs au formulaire
            const formFields = {
              fullName: form.fullName.trim(),
              presenceSoiree: form.presenceSoiree,
              guestsSoiree: form.guestsSoiree,
              comment: form.comment,
              timestamp: new Date().toISOString(),
              browser: navigator.userAgent.includes('Firefox') ? 'Firefox' : navigator.userAgent
            };
            
            Object.entries(formFields).forEach(([key, value]) => {
              if (value) {
                const input = iframeDoc.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                formElement.appendChild(input);
              }
            });
            
            // Ajouter les invités supplémentaires
            form.additionalGuestsSoiree.forEach((guest, index) => {
              if (guest.trim()) {
                const input = iframeDoc.createElement('input');
                input.type = 'hidden';
                input.name = `additionalGuestSoiree${index + 1}`;
                input.value = guest.trim();
                formElement.appendChild(input);
              }
            });
            
            iframeDoc.body.appendChild(formElement);
            formElement.submit();
            
            // Attendre un peu puis considérer comme succès
            setTimeout(() => {
              document.body.removeChild(iframe);
              setIsSubmitting(false);
              setSubmitted(true);
              console.log('✅ Envoi réussi avec méthode de fallback');
            }, 2000);
            
          } else {
            throw new Error('Impossible de créer l\'iframe');
          }
          
        } catch (fallbackError) {
          console.error('❌ Échec de la méthode de fallback:', fallbackError);
          setIsSubmitting(false);
          setSubmitError(true);
        }
      }
    }
  };

  return (
    <div className="invitation-container p-6 md:p-12 rounded-lg max-w-3xl mx-auto">
      <h2 className="title-royal text-lg md:text-xl lg:text-2xl text-center mb-6 md:mb-8">
        <span className="text-accent">C</span>onfirme ta présence
      </h2>
      



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
