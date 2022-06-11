import Link from 'next/link';
import styles from './navbar.module.css';

function Navbar() {
	return (
		<div className={styles.container}>
			<Link href="/">
				<a>Avocado</a>
			</Link>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href="/products/design">
						<a>Design</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/products/development">
						<a>Development</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/products/production">
						<a>Production</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/products/photography">
						<a>Photography</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/contacts">
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
