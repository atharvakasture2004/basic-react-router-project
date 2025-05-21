import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Header name="Atharva Kasture" /> 
      <Outlet /> 
      <Footer />
    </>
  );
}

export default RootLayout;