import { translations } from './translations.js';
import { initializeLanguageSelector } from './languageManager.js';
import { initializeNavigation } from './components/navigation.js';

window.translations = translations;

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeLanguageSelector();
});