import React, { useState } from 'react';
import { Music, Users, Clock, Mic2 } from 'lucide-react';
import SurveyForm from './components/SurveyForm';
import ResultsTable from './components/ResultsTable';
import { SurveyData } from './types';

function App() {
  const [submissions, setSubmissions] = useState<SurveyData[]>([]);

  const handleSubmit = (data: SurveyData) => {
    setSubmissions([...submissions, data]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">
              Encuesta de Preferencias Musicales
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comparte tus gustos y hábitos musicales con nosotros.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <SurveyForm onSubmit={handleSubmit} />
          </div>

          {submissions.length > 0 && (
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Resultados de la Encuesta
                </h2>
              </div>
              <ResultsTable submissions={submissions} />
            </div>
          )}
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <div className="flex justify-center gap-8 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span>Seguimiento de hábitos de escucha</span>
            </div>
            <div className="flex items-center gap-2">
              <Mic2 className="w-5 h-5 text-indigo-600" />
              <span>Compartir preferencias musicales</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
