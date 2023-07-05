import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/myLokasi.vue';
import Cuaca from '../components/myCuaca.vue';
import Stopwatch from '../components/myStopwatch.vue';
import Foto from '../components/myFoto.vue';

const routes = [
  { path: '/', component: Stopwatch},
  { path: '/WidgetFoto', component: Foto},
  { path: '/WidgetLokasi', component: Lokasi },
  { path: '/WidgetCuaca', component: Cuaca },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;