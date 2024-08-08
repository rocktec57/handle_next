import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = AOS.init({
    offset: 100,
    duration: 300,
    easing: 'ease-in-sine',
    delay: 50,
  });
});
