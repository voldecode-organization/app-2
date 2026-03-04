import './Header.style.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <p>firma.</p>
      </div>

      <div className="header__nav">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </header>
  )
}
