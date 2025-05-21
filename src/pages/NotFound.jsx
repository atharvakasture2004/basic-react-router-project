import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <p>
        <NavLink to="/">Go back to Home</NavLink>
      </p>
    </div>
  );
}

export default NotFound;