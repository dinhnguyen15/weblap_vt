import Header from './Header';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">{children}</div>
      </div>
   );
}

export default DefaultLayout;
