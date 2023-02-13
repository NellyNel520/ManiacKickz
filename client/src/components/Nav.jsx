import { Link } from "react-router-dom"
const Nav = () => {

  return (
    <header>
      <nav>
        <h1>Maniac Kickz</h1>
        <Link to="/about">About Us</Link>
        <Link to="/about">Add Listing</Link>
        <Link to="/about">Products</Link>
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}

export default Nav
