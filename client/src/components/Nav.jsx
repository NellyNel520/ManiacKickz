import { Link } from "react-router-dom"
const Nav = () => {

  return (
    <header>
      <nav>
        <h1>Maniac Kickz</h1>
        <Link to="/about">About Us</Link>
        <Link to="/addSneaker">Add Listing</Link>
        <Link to="/sneakers">Products</Link>
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}

export default Nav
