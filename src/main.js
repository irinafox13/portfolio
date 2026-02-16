import TypewriterEffect from '@/modules/TypewriterEffect'
import MenuObserver from '@/modules/MenuObserver'

const texts = ["HTML layout designer", "Frontend-developer"]
new TypewriterEffect(document.querySelector('[data-js-typewritten]'), texts)
new MenuObserver();