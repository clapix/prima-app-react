import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header>
      <Navbar /> {/* é il nostro camponente Navbar non una qualsiasi navbar */}
      <h2>sono l'header</h2>
    </header>
  )
}

export default Header;