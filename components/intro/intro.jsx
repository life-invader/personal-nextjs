import Image from 'next/image';
import Circle from '../circle/circle';
import styles from './intro.module.css';

function Intro() {
	return (
		<div className={styles.container}>
			<Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
			<Circle backgroundColor="#01c686" right="-40vh" />
			<div className={styles.card}>
				<h1 className={styles.title}>
					<span className={styles.brand}>Avocado</span> Digital Product Agency
				</h1>
				<p className={styles.description}>
					Create live segments and target the right people for messages based on their behaviors
				</p>
				<button className={styles.button}>Discover</button>
			</div>
			<div className={styles.card}>
				<Image
					src="/img/Avocado.png"
					width={1000}
					height={1000}
					objectFit="cover"
					alt="Avocado company logo"
				/>
			</div>
		</div>
	);
}

export default Intro;
