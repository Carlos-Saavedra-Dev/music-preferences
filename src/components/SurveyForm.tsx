import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { SurveyData } from '../types';

const GENRES = [
  'Pop',
  'Rock',
  'Hip Hop',
  'Jazz',
  'Clásica',
  'Electrónica',
  'R&B',
  'Country',
  'Folk',
  'Metal',
];

interface Props {
  onSubmit: (data: SurveyData) => void;
}

const SurveyForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SurveyData>({
    name: '',
    age: '',
    genre: '',
    hoursPerDay: '',
    attendsConcerts: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SurveyData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SurveyData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.age) newErrors.age = 'La edad es requerida';
    if (!formData.genre) newErrors.genre = 'El género musical es requerido';
    if (!formData.hoursPerDay) newErrors.hoursPerDay = 'Las horas por día son requeridas';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({
        name: '',
        age: '',
        genre: '',
        hoursPerDay: '',
        attendsConcerts: false,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
          placeholder="Ingresa tu nombre"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
          Edad
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          max="120"
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.age ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
          placeholder="Ingresa tu edad"
        />
        {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
      </div>

      <div>
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
          Género Musical Favorito
        </label>
        <select
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.genre ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
        >
          <option value="">Selecciona un género</option>
          {GENRES.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {errors.genre && <p className="mt-1 text-sm text-red-500">{errors.genre}</p>}
      </div>

      <div>
        <label htmlFor="hoursPerDay" className="block text-sm font-medium text-gray-700 mb-1">
          Horas de Música por Día
        </label>
        <input
          type="number"
          id="hoursPerDay"
          name="hoursPerDay"
          value={formData.hoursPerDay}
          onChange={handleChange}
          min="0"
          max="24"
          step="0.5"
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.hoursPerDay ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
          placeholder="Horas por día"
        />
        {errors.hoursPerDay && (
          <p className="mt-1 text-sm text-red-500">{errors.hoursPerDay}</p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="attendsConcerts"
          name="attendsConcerts"
          checked={formData.attendsConcerts}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="attendsConcerts" className="ml-2 block text-sm text-gray-700">
          Asisto frecuentemente a conciertos
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        <Send className="w-4 h-4" />
        Enviar Encuesta
      </button>
    </form>
  );
};

export default SurveyForm;