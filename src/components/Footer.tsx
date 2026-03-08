import React from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-brand">Dr. Túlio Kalife — CRM 157171</p>
          <p className="footer-address">{t('contact.address')}</p>
          <p className="footer-phone">
            <a href="tel:+551147123148">{t('contact.phone')}</a>
            {' · '}
            <a href="https://www.tuliootorrino.com" target="_blank" rel="noopener noreferrer">
              {t('contact.website')}
            </a>
          </p>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Dr. Túlio Kalife. {t('footer.rights')}
        </p>
      </div>

      <style>{`
        .site-footer {
          padding: 2.5rem 2rem 1.5rem;
          border-top: 1px solid #e2e8f0;
          text-align: center;
          background: #f7fafc;
        }
        .footer-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .footer-info {
          margin-bottom: 1.25rem;
        }
        .footer-brand {
          font-weight: 600;
          color: #0f4d3f;
          font-size: 1rem;
          margin-bottom: 0.35rem;
        }
        .footer-address {
          color: #718096;
          font-size: 0.85rem;
          margin-bottom: 0.25rem;
        }
        .footer-phone {
          font-size: 0.85rem;
        }
        .footer-phone a {
          color: #1a6b5a;
          text-decoration: none;
        }
        .footer-phone a:hover {
          text-decoration: underline;
        }
        .footer-copy {
          color: #a0aec0;
          font-size: 0.8rem;
          border-top: 1px solid #e2e8f0;
          padding-top: 1rem;
          margin-top: 0;
        }
      `}</style>
    </footer>
  );
}