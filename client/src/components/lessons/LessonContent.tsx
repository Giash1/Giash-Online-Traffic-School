import React from 'react';
import { LessonPage } from '../../data/lessonData';
import { CheckCircle } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

interface LessonContentProps {
  page: LessonPage;
}

const LessonContent: React.FC<LessonContentProps> = ({ page }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      minHeight: '500px'
    }}>
      {/* Page Title */}
      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '32px',
        paddingBottom: '16px',
        borderBottom: '3px solid #7e11d6'
      }}>
        {page.title}
      </h2>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {page.sections.map((section, index) => (
          <div key={index} style={{
            padding: '24px',
            backgroundColor: '#f9fafb',
            borderRadius: '10px',
            border: '1px solid #e5e7eb'
          }}>
            {/* Main Heading */}
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#7e11d6',
              marginBottom: section.subheading ? '8px' : '16px'
            }}>
              {section.heading}
            </h3>

            {/* Subheading */}
            {section.subheading && (
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#dc2626',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {section.subheading}
              </h4>
            )}

            {/* Content Paragraphs */}
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
                color: '#374151',
                marginBottom: '12px'
              }}>
                {paragraph}
              </p>
            ))}

            {/* Video */}
            {section.video && (
              <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                <VideoPlayer 
                  src={section.video.src}
                  caption={section.video.caption}
                  poster={section.video.poster}
                  captionPosition="above"
                />
              </div>
            )}

            {/* Lists */}
            {section.list && (
              <div style={{ marginTop: '16px' }}>
                {section.list.type === 'bullet' ? (
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {section.list.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '12px',
                        fontSize: '1.05rem',
                        lineHeight: '1.6',
                        color: '#1f2937'
                      }}>
                        <CheckCircle 
                          size={20} 
                          style={{ 
                            color: '#10b981', 
                            marginTop: '2px',
                            flexShrink: 0
                          }} 
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ol style={{
                    paddingLeft: '24px',
                    margin: 0
                  }}>
                    {section.list.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{
                        marginBottom: '12px',
                        fontSize: '1.05rem',
                        lineHeight: '1.6',
                        color: '#1f2937'
                      }}>
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonContent;
