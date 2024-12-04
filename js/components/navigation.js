export function createNavigation() {
  return `
    <div class="nav-container">
      <div class="nav-links">
        <a href="index.html" data-translate="nav_home">Home</a>
        <a href="profile.html" data-translate="nav_profile">Company Profile</a>
        <a href="products.html" data-translate="nav_products">Products</a>
        <a href="contact.html" data-translate="nav_contact">Contact</a>
      </div>
      <div class="language-selector">
        <label for="languageSelector" data-translate="selectLanguage">Select Language:</label>
        <select id="languageSelector">
          <option value="english">English</option>
          <option value="chinese">中文</option>
        </select>
      </div>
    </div>
  `;
}

export function initializeNavigation() {
  const navElement = document.querySelector('nav');
  if (navElement) {
    navElement.innerHTML = createNavigation();
  }
}