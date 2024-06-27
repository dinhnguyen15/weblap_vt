import CallForPapers from '~/pages/CallForPapers';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Members from '~/pages/Members';
import News from '~/pages/News';
import NewsSubpage from '~/pages/NewsSubpage';
import Projects from '~/pages/Projects';
import Publications from '~/pages/Publications';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/news', component: News },
   { path: '/news/:id', component: NewsSubpage },
   { path: '/members', component: Members },
   { path: '/publications', component: Publications },
   { path: '/callforpapers', component: CallForPapers },
   { path: '/projects', component: Projects },
   { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
