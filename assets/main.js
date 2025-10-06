// class r{constructor(e,t,s={}){this.element=e,this.texts=t,this.options={typingSpeed:100,erasingSpeed:50,delayAfterTyping:1e3,delayAfterErasing:500,cursor:"_",loop:!0,...s},this.currentTextIndex=0,this.charIndex=0,this.isTyping=!0,this.timeout=null,this.start()}start(){this.isTyping?this.type():this.erase()}type(){if(this.charIndex<=this.texts[this.currentTextIndex].length){const e=this.texts[this.currentTextIndex].substring(0,this.charIndex);this.element.textContent=e+this.options.cursor,this.charIndex++,this.timeout=setTimeout(()=>this.type(),this.options.typingSpeed)}else this.isTyping=!1,this.timeout=setTimeout(()=>this.start(),this.options.delayAfterTyping)}erase(){if(this.charIndex>=0){const e=this.texts[this.currentTextIndex].substring(0,this.charIndex);this.element.textContent=e+this.options.cursor,this.charIndex--,this.timeout=setTimeout(()=>this.erase(),this.options.erasingSpeed)}else this.isTyping=!0,this.currentTextIndex=(this.currentTextIndex+1)%this.texts.length,this.timeout=setTimeout(()=>this.start(),this.options.delayAfterErasing)}destroy(){clearTimeout(this.timeout),this.element.textContent=""}}class o{constructor(){this.menuItems=["about","projects","contacts"],this.menuAnchors=document.querySelectorAll(".banner__menu-anchor"),this.observer=null,this.currentActive=null,this.init()}init(){this.createObserver(),this.observeSections(),this.addClickListeners(),this.setInitialActive()}createObserver(){const e={threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"0px 0px -30% 0px"};this.observer=new IntersectionObserver(t=>{this.handleIntersection(t)},e)}handleIntersection(e){let t=null,s=0;e.forEach(i=>{i.intersectionRatio>s&&(s=i.intersectionRatio,t=i.target.id)}),t&&t!==this.currentActive&&(this.updateActiveMenu(t),this.currentActive=t)}setInitialActive(){for(const e of this.menuItems){const t=document.getElementById(e);if(t&&this.isElementInViewport(t)){this.updateActiveMenu(e),this.currentActive=e;return}}this.updateActiveMenu(this.menuItems[0])}isElementInViewport(e){const t=e.getBoundingClientRect();return t.top<=window.innerHeight&&t.bottom>=0}updateActiveMenu(e){this.menuAnchors.forEach(t=>{const s=t.getAttribute("href")===`#${e}`;t.classList.toggle("banner__menu-anchor--current",s)})}observeSections(){this.menuItems.forEach(e=>{const t=document.getElementById(e);t&&this.observer.observe(t)})}addClickListeners(){this.menuAnchors.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href").substring(1),i=document.getElementById(s);i&&i.scrollIntoView({behavior:"smooth"})})})}}const h=["HTML layout designer","Frontend-developer"];new r(document.querySelector("[data-js-typewritten]"),h);new o;

class MenuObserver {
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

/**
 * Класс для создания эффекта печатной машинки с возможностью циклического вывода текста.
 * Поддерживает печать, стирание текста и каретку.
 * 
 * @example
 * // Создание эффекта
 * const typewriter = new TypewriterEffect(element, ['Текст 1', 'Текст 2'], {
 *   typingSpeed: 150,
 *   loop: false
 * });
 * 
 * // Уничтожение эффекта
 * typewriter.destroy();
 */
class TypewriterEffect {
  /**
   * Создает экземпляр TypewriterEffect
   * @param {HTMLElement} element - DOM-элемент для вывода текста
   * @param {string[]} texts - Массив строк для последовательного вывода
   * @param {Object} [options] - Настройки эффекта
   * @param {number} [options.typingSpeed=100] - Скорость печати (мс)
   * @param {number} [options.erasingSpeed=50] - Скорость стирания (мс)
   * @param {number} [options.delayAfterTyping=1000] - Задержка после печати (мс)
   * @param {number} [options.delayAfterErasing=500] - Задержка после стирания (мс)
   * @param {string} [options.cursor='_'] - Символ каретки
   * @param {boolean} [options.loop=true] - Зацикливание анимации
   */
  constructor(element, texts, options = {}) {
    this.element = element;
    this.texts = texts;
    this.options = {
      typingSpeed: 100, 
      erasingSpeed: 50,
      delayAfterTyping: 1000,
      delayAfterErasing: 500,
      cursor: '_',         
      loop: true,          
      ...options
    };

    this.currentTextIndex = 0;
    this.charIndex = 0;
    this.isTyping = true;
    this.timeout = null;

    this.start();
  }

  /**
   * Запускает процесс печати/стирания
   * @private
   */
  start() {
    if (this.isTyping) {
      this.type();
    } else {
      this.erase();
    }
  }

  /**
   * Анимация печати текста
   * @private
   */
  type() {
    if (this.charIndex <= this.texts[this.currentTextIndex].length) {
      const currentText = this.texts[this.currentTextIndex].substring(0, this.charIndex);
      this.element.textContent = currentText + this.options.cursor;
      this.charIndex++;
      this.timeout = setTimeout(() => this.type(), this.options.typingSpeed);
    } else {
      this.isTyping = false;
      this.timeout = setTimeout(() => this.start(), this.options.delayAfterTyping);
    }
  }

  /**
   * Анимация стирания текста
   * @private
   */
  erase() {
    if (this.charIndex >= 0) {
      const currentText = this.texts[this.currentTextIndex].substring(0, this.charIndex);
      this.element.textContent = currentText + this.options.cursor;
      this.charIndex--;
      this.timeout = setTimeout(() => this.erase(), this.options.erasingSpeed);
    } else {
      this.isTyping = true;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      this.timeout = setTimeout(() => this.start(), this.options.delayAfterErasing);
    }
  }

  /**
   * Останавливает анимацию и очищает элемент
   * @public
   */
  destroy() {
    clearTimeout(this.timeout);
    this.element.textContent = '';
  }
}

const texts = ["HTML layout designer", "Frontend-developer"]
new TypewriterEffect(document.querySelector('[data-js-typewritten]'), texts)
new MenuObserver();
