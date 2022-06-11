import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.cardL}>
				<h1 className={styles.title}>Avocado creatives</h1>
				<h2 className={styles.linkTitle}>
					<Link href="/contact">
						<a>
							<span className={styles.linkText}>Work with us</span>
							<Image src={'/img/link.png'} alt="image" width="40" height="40" />
						</a>
					</Link>
				</h2>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					12 Adam Street NY <br /> USA
				</div>
				<div className={styles.cardItem}>life-invader</div>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					12 Adam Street NY <br /> USA
				</div>
				<div className={styles.cardItem}>life-invader</div>
			</div>
		</div>
	);
}

export default Footer;
