import CallForPapers from '~/pages/CallForPapers';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import Members from '~/pages/Members';
import News from '~/pages/News';
import Others from '~/pages/Others';
import Publications from '~/pages/Publications';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/news', component: News },
   { path: '/introduction', component: Introduction },
   { path: '/members', component: Members },
   { path: '/publications', component: Publications },
   { path: '/callforpapers', component: CallForPapers },
   { path: '/others', component: Others },
   { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
