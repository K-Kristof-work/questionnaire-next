// src/app/page.tsx
'use client';

import QuestionnaireComponent from '@/components/QuestionnaireComponent';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <QuestionnaireComponent />
      </div>
    </main>
  );
}