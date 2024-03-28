const Nav = () => {
	return (
		<nav>
			<a href="/about">About</a>
			<a href="/projects">Projects</a>
			<a href="/blogs">Blogs</a>
			<a href="/photos">Photos</a>
		</nav>
	);
};

const Header = () => {
	return (
		<header>
			<h1>HA</h1>
			<Nav />
			<div className="bars">
				<i className="fa fa-moon"></i>
				<i className="fa fa-bars"></i>
			</div>
		</header>
	);
};

export default Header;
