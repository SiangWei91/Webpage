function updateContent(language) {
  const elements = document.querySelectorAll('[data-translate]');
  const translations = window.translations;
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[language]?.[key]) {
      element.textContent = translations[language][key];
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = language === 'chinese' ? 'zh' : 'en';
  
  localStorage.setItem('selectedLanguage', language);
  document.getElementById('languageSelector').value = language;
}

export function initializeLanguageSelector() {
  const languageSelector = document.getElementById('languageSelector');
  
  // Set initial language from localStorage or default to english
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'english';
  
  // Update content immediately when page loads
  requestAnimationFrame(() => {
    updateContent(savedLanguage);
  });
  
  languageSelector.addEventListener('change', (e) => updateContent(e.target.value));
}