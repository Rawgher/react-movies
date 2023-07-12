import Logo from './Logo';
import NavResults from './NavResults';
import SearchBar from './SearchBar';

export default function Nav({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NavResults movies={movies} />
    </nav>
  );
}
