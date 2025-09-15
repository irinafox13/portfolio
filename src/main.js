import TypewriterEffect from '@/modules/TypewriterEffect'
import MenuObserver from '@/modules/MenuObserver'

const texts = ["Frontend-developer", "HTML layout designer"]
new TypewriterEffect(document.querySelector('[data-js-typewritten]'), texts)
new MenuObserver();