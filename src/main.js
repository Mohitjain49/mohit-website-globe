import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import globeRouter from './routes.js';
const pinia = createPinia();

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';

library.add(
    FaIcons.faMapPin,
    FaIcons.faMagnifyingGlass,
    FaIcons.faX,
    FaIcons.faCircleXmark,
    FaIcons.faHouse,
    FaIcons.faArrowLeft,
    FaIcons.faMapLocationDot,
    FaIcons.faDisplay,
    FaIcons.faLaptopCode,
    FaIcons.faExpand,
    FaIcons.faCompress,
    FaIcons.faClock,
    FaIcons.faGear,
    FaIcons.faPaperPlane,
    FaIcons.faGlobe,
    FaIcons.faFileLines,
    FaIcons.faRotateRight,
    FaIcons.faEnvelope
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).
    use(globeRouter).
    use(pinia).
    mount('#app');
