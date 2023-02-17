import { Link } from "react-router-dom"
const Nav = () => {

  return (
    // <header>
      <nav>
      <div className="logo">
        <img alt="logo" src="https://i.postimg.cc/J0vtFyc6/Maniac-Kicks-logo-2.png" />
      </div>
        <Link to="/about">About Us</Link>
        <Link to="/addSneaker">Add Listing</Link>
        <Link to="/sneakers">Products</Link>
        <Link to="/">Home</Link>
      </nav>
    // </header>
  )
}

export default Nav
