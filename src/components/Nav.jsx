import { NavLink } from 'react-router-dom'; 

function Nav(props) {
  return (
    <nav>
      <ul>
        {props.links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.url}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;