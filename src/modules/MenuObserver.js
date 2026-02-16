export default class MenuObserver {
  constructor() {
      this.menuItems = ['about', 'projects', 'contacts'];
      this.menuAnchors = document.querySelectorAll('.banner__menu-anchor');
      this.observer = null;
      this.currentActive = null;
      
      this.init();
  }
  
  init() {
      this.createObserver();
      this.observeSections();
      this.addClickListeners();
      this.setInitialActive();
  }
  
  createObserver() {
      const options = {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: '0px 0px -30% 0px'
      };
      
      this.observer = new IntersectionObserver((entries) => {
          this.handleIntersection(entries);
      }, options);
  }
  
  handleIntersection(entries) {
      let mostVisibleSection = null;
      let highestRatio = 0;
      
      entries.forEach(entry => {
          if (entry.intersectionRatio > highestRatio) {
              highestRatio = entry.intersectionRatio;
              mostVisibleSection = entry.target.id;
          }
      });
      
      if (mostVisibleSection && mostVisibleSection !== this.currentActive) {
          this.updateActiveMenu(mostVisibleSection);
          this.currentActive = mostVisibleSection;
      }
  }
  
  setInitialActive() {
      for (const id of this.menuItems) {
          const section = document.getElementById(id);
          if (section && this.isElementInViewport(section)) {
              this.updateActiveMenu(id);
              this.currentActive = id;
              return;
          }
      }
      // Если ничего не видно, активируем первую секцию
      this.updateActiveMenu(this.menuItems[0]);
  }
  
  isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  updateActiveMenu(activeId) {
      this.menuAnchors.forEach(anchor => {
          const isActive = anchor.getAttribute('href') === `#${activeId}`;
          anchor.classList.toggle('banner__menu-anchor--current', isActive);
      });
  }
  
  observeSections() {
      this.menuItems.forEach(id => {
          const section = document.getElementById(id);
          if (section) {
              this.observer.observe(section);
          }
      });
  }
  
  addClickListeners() {
      this.menuAnchors.forEach(anchor => {
          anchor.addEventListener('click', (e) => {
              e.preventDefault();
              const targetId = anchor.getAttribute('href').substring(1);
              const targetSection = document.getElementById(targetId);
              
              if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
              }
          });
      });
  }
}
