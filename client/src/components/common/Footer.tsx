import React from 'react';
import { t } from '../../i18n';
import { useLanguage } from '../../context/LanguageContext';

// SVG icons for social media (simple inline for demo)
const icons = {
    youtube: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.116C19.403 3.5 12 3.5 12 3.5s-7.403 0-9.39.57A2.994 2.994 0 0 0 .502 6.186C0 8.174 0 12 0 12s0 3.826.502 5.814a2.994 2.994 0 0 0 2.108 2.116C4.597 20.5 12 20.5 12 20.5s7.403 0 9.39-.57a2.994 2.994 0 0 0 2.108-2.116C24 15.826 24 12 24 12s0-3.826-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ),
  facebook: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ),
  twitter: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
  ),
  instagram: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  ),
  linkedin: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
  )
};

const socialLinks = [
  { name: 'facebook', url: '#' },
  { name: 'twitter', url: '#' },
  { name: 'instagram', url: '#' },
  { name: 'linkedin', url: '#' },
  { name: 'youtube', url: '#' }
];

const Footer: React.FC = () => {
  const { language } = useLanguage();
  return (
    <footer style={{
      width: '100%',
      background: 'linear-gradient(90deg, #7e11d6 0%, #9333ea 100%)',
      color: 'white',
      padding: '24px 0 12px 0',
      position: 'relative',
      marginTop: '40px',
      minHeight: 90
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0 24px',
        position: 'relative'
      }}>
        {/* Left social icon */}
        <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
          {icons.facebook}
        </a>
        {/* Contact info */}
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 18 }}>{t(language, 'footer.contact')}</div>
          <div style={{ fontSize: 15 }}>{t(language, 'footer.email')}</div>
          <div style={{ fontSize: 15 }}>{t(language, 'footer.location')}</div>
        </div>
        {/* Right social icon */}
        <div style={{ display: 'flex', gap: 16 }}>
          <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer">{icons.twitter}</a>
          <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer">{icons.instagram}</a>
          <a href={socialLinks[3].url} target="_blank" rel="noopener noreferrer">{icons.linkedin}</a>
          <a href={socialLinks[4].url} target="_blank" rel="noopener noreferrer">{icons.youtube}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
