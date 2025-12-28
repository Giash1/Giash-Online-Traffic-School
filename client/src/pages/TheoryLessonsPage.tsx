import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, TrafficCone, Shield, Car, Leaf, AlertTriangle } from 'lucide-react';
import { getLocalizedLessons } from '../data/lessonData';
import { useLanguage } from '../context/LanguageContext';
import { t, TranslationKey } from '../i18n';

const TheoryLessonsPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const lessons = getLocalizedLessons(language).map((lesson) => {
    const description = t(language, `lesson${lesson.id}.desc` as TranslationKey);
    // Extract question count from description (e.g., "- 32 questions" or "- 32 frågor")
    const questionMatch = description.match(/(\d+)\s*(questions?|frågor?|প্রশ্ন|أسئلة|سؤالاً|سوالات)/i);
    const questionCount = questionMatch ? questionMatch[1] : null;
    const descWithoutCount = questionCount 
      ? description.replace(/\s*-\s*\d+\s*(questions?|frågor?|প্রশ্ন|أسئلة|سؤالاً|سوالات)/i, '').trim()
      : description;
    
    return {
      ...lesson,
      title: t(language, `lesson${lesson.id}.title` as TranslationKey),
      description: descWithoutCount,
      questionCount
    };
  });

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px'
      }}>
        {/* Page Title */}
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px',
          background: 'linear-gradient(135deg, #7e11d6 0%, #9333ea 100%)',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '12px',
            color: 'white'
          }}>
            {t(language, 'theory.title')}
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.95, color: 'white' }}>
            {t(language, 'theory.description')}
          </p>
        </div>

        {/* Lessons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {lessons.map((lesson) => {
            const iconMap: Record<number, any> = {
              1: BookOpen,
              2: TrafficCone,
              3: AlertTriangle,
              4: Car,
              5: Leaf,
              6: Shield
            };
            const IconComp = iconMap[lesson.id] || BookOpen;

            return (
              <div
                key={lesson.id}
                onClick={() => navigate(`/lesson/${lesson.id}`)}
                style={{
                  backgroundColor: 'white',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#7e11d6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', marginTop: '8px' }}>
                  <IconComp size={24} color="#7e11d6" />
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111827',
                    margin: 0,
                    flex: 1
                  }}>
                    {lesson.title}
                  </h3>
                  {lesson.questionCount && (
                    <div style={{
                      backgroundColor: '#7e11d6',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      whiteSpace: 'nowrap'
                    }}>
                      {lesson.questionCount} Q
                    </div>
                  )}
                </div>

                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  margin: '0 0 16px 0',
                  lineHeight: '1.5'
                }}>
                  {lesson.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '8px',
                  color: '#7e11d6',
                  fontWeight: 700
                }}>
                  <span>{t(language, 'theory.openSection')}</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Add More Lessons Notice */}
        <div className="more-lessons">
          <p>{t(language, 'theory.moreSoon')}</p>
        </div>
      </main>
    </div>
  );
};

export default TheoryLessonsPage;
