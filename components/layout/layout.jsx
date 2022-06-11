import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
