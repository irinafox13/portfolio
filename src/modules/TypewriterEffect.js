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
 export default class TypewriterEffect {
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