import React from 'react';
import { Music2, Ticket } from 'lucide-react';
import { SurveyData } from '../types';

interface Props {
  submissions: SurveyData[];
}

const ResultsTable: React.FC<Props> = ({ submissions }) => {
  const isFanatic = (hours: number) => hours > 3;
  const isTeenager = (age: number) => age < 18;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Grupo de Edad
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Género
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Horas/Día
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {submissions.map((submission, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">{submission.name}</span>
                  {submission.attendsConcerts && (
                    <Ticket className="ml-2 w-4 h-4 text-indigo-600" />
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">
                  {isTeenager(Number(submission.age)) ? 'Adolescente' : 'Adulto'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">{submission.genre}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">{submission.hoursPerDay}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {isFanatic(Number(submission.hoursPerDay)) ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    <Music2 className="w-3 h-3 mr-1" />
                    Fanático Musical
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Oyente Casual
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;