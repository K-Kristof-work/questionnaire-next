// src/components/QuestionnaireComponent.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  text: string;
}

export default function QuestionnaireComponent() {
  const [answers, setAnswers] = useState<boolean[]>(Array(150).fill(false));
  const [result, setResult] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const handleAnswerChange = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = !newAnswers[index];
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const totalYes = answers.filter(answer => answer).length;
    // Replace this with your custom calculation logic
    setResult(`Total "Yes" answers: ${totalYes} out of ${answers.length}`);
  };

  const totalPages = Math.ceil(answers.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = answers.slice(startIndex, endIndex);

  const progress = (currentPage / totalPages) * 100;

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Questionnaire</h1>
          <p className="text-gray-600 mb-4">
            Page {currentPage} of {totalPages}
          </p>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-4">
          {currentQuestions.map((answer, index) => {
            const actualIndex = startIndex + index;
            return (
              <div key={actualIndex} 
                   className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Label htmlFor={`question-${actualIndex}`} className="text-sm">
                  Question {actualIndex + 1}
                </Label>
                <Switch
                  id={`question-${actualIndex}`}
                  checked={answer}
                  onCheckedChange={() => handleAnswerChange(actualIndex)}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between mt-6">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          
          {currentPage === totalPages ? (
            <Button onClick={calculateResult}>
              Calculate Result
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          )}
        </div>

        {result && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-900">Result:</h3>
            <p className="text-green-800">{result}</p>
          </div>
        )}
      </Card>
    </div>
  );
}