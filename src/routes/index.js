import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import Members from '~/pages/Members';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/introduction', component: Introduction, layout: HeaderOnly },
   { path: '/members', component: Members, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
