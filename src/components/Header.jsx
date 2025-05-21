import Nav from './Nav';

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1> {/* Use props.name directly */}
      <Nav
        links={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
          { name: 'Contact', url: '/contact' },
          {name: 'Blog',url : '/blog'}
        ]}
      />
    </header>
  );
}

export default Header;