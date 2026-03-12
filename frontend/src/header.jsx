function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <img src="..\velammal-logo.png" alt="logo" />
      </div>

      <ul className="nav-links">
        <a href="./ApplicationPage"><li>Applications</li></a>
        <a href="./PaymentsPage"><li>Payments</li></a>
        <a href="./QueriesPage"><li>Queries</li></a>
        <a href="./ApplicationPage"><li>Communication</li></a>
      </ul>
    </nav>
  );
}

export default Header;