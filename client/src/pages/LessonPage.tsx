import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { getLessonByIdLocalized } from '../data/lessonData';
import LessonContent from '../components/lessons/LessonContent';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const { language } = useLanguage();

  const lesson = getLessonByIdLocalized(Number(lessonId), language);

  if (!lesson) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#374151', marginBottom: '16px' }}>
            {t(language, 'lesson.notFound')}
          </h2>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#7e11d6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            {t(language, 'lesson.backToDashboard')}
          </button>
        </div>
      </div>
    );
  }

  const currentPage = lesson.pages[currentPageIndex];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === lesson.pages.length - 1;

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      setCurrentPageIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPageIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{ padding: '0 20px' }}>
      {/* Lesson Info */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '32px'
      }}>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <BookOpen size={28} color="#7e11d6" />
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#111827',
              margin: 0
            }}>
              {lesson.title}
            </h1>
          </div>
          <p style={{ color: '#6b7280', fontSize: '1rem', margin: 0 }}>
            {lesson.description}
          </p>
        </div>

        {/* Progress Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <span style={{ color: '#6b7280', fontSize: '0.95rem', fontWeight: '600' }}>
            {t(language, 'lesson.pageOf', { current: currentPageIndex + 1, total: lesson.pages.length })}
          </span>
          <div style={{
            flex: 1,
            height: '8px',
            backgroundColor: '#e5e7eb',
            borderRadius: '999px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${((currentPageIndex + 1) / lesson.pages.length) * 100}%`,
              height: '100%',
              backgroundColor: '#7e11d6',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <LessonContent page={currentPage} />
      </div>

      {/* Navigation Buttons */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px'
      }}>
        <button
          onClick={handlePreviousPage}
          disabled={isFirstPage}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            backgroundColor: isFirstPage ? '#e5e7eb' : 'white',
            color: isFirstPage ? '#9ca3af' : '#374151',
            border: '2px solid #e5e7eb',
            borderRadius: '10px',
            cursor: isFirstPage ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.2s',
            opacity: isFirstPage ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (!isFirstPage) {
              e.currentTarget.style.borderColor = '#7e11d6';
              e.currentTarget.style.color = '#7e11d6';
            }
          }}
          onMouseLeave={(e) => {
            if (!isFirstPage) {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.color = '#374151';
            }
          }}
        >
          <ArrowLeft size={20} />
          {t(language, 'lesson.previous')}
        </button>

        <div
          aria-label="Quick page navigation"
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            overflowX: 'auto',
            maxWidth: '520px',
            padding: '6px 4px'
          }}
        >
          {lesson.pages.map((p, index) => {
            const isActive = index === currentPageIndex;

            return (
              <button
                key={p.id ?? index}
                title={p.title}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => {
                  setCurrentPageIndex(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  minWidth: '40px',
                  height: '32px',
                  padding: '0 10px',
                  borderRadius: '10px',
                  border: `2px solid ${isActive ? '#7e11d6' : '#e5e7eb'}`,
                  backgroundColor: isActive ? '#7e11d6' : 'white',
                  color: isActive ? 'white' : '#374151',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  transition: 'all 0.2s',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#7e11d6';
                    e.currentTarget.style.color = '#7e11d6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNextPage}
          disabled={isLastPage}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            backgroundColor: isLastPage ? '#e5e7eb' : '#7e11d6',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: isLastPage ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.2s',
            opacity: isLastPage ? 0.5 : 1,
            boxShadow: isLastPage ? 'none' : '0 4px 12px rgba(126, 17, 214, 0.3)'
          }}
          onMouseEnter={(e) => {
            if (!isLastPage) {
              e.currentTarget.style.backgroundColor = '#6b0fb8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLastPage) {
              e.currentTarget.style.backgroundColor = '#7e11d6';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          {isLastPage ? t(language, 'lesson.completed') : t(language, 'lesson.next')}
          {!isLastPage && <ArrowRight size={20} />}
        </button>
      </div>
      </div>
    </div>
  );
};

export default LessonPage;
