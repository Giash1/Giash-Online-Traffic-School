import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileQuestion, Trophy } from 'lucide-react';
import { getLocalizedLessons } from '../data/lessonData';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const lessons = getLocalizedLessons(language);

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
        {/* Welcome Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px',
          background: 'linear-gradient(135deg, #7e11d6 0%, #9333ea 100%)',
          color: 'white',
          position: 'sticky',
          top: '64px',
          zIndex: 1000
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '12px'
          }}>
            {t(language, 'dashboard.readyTitle')}
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>
            {t(language, 'dashboard.readyDescription')}
          </p>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '2px solid transparent'
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
            <FileQuestion size={40} color="#7e11d6" style={{ marginBottom: '16px' }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '8px'
            }}>
              {t(language, 'dashboard.practiceTitle')}
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
              {t(language, 'dashboard.practiceDescription')}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '2px solid transparent'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.borderColor = '#10b981';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            <Trophy size={40} color="#10b981" style={{ marginBottom: '16px' }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '8px'
            }}>
              {t(language, 'dashboard.finalTitle')}
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
              {t(language, 'dashboard.finalDescription')}
            </p>
          </div>
        </div>

        {/* Theory Lessons Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }}>
            {t(language, 'dashboard.theoryTitle')}
          </h2>
          <button
            onClick={() => navigate('/theory-lessons')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#7e11d6',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(126, 17, 214, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6b0fb8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#7e11d6';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t(language, 'dashboard.viewAll')}
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {lessons.slice(0, 3).map((lesson) => (
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
                border: '2px solid transparent'
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <BookOpen size={24} color="#7e11d6" />
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#111827',
                  margin: 0
                }}>
                  {lesson.title}
                </h3>
              </div>
              <p style={{
                color: '#6b7280',
                fontSize: '0.95rem',
                marginBottom: '16px',
                lineHeight: '1.5'
              }}>
                {lesson.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: '1px solid #e5e7eb'
              }}>
                {/* lesson number removed */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
