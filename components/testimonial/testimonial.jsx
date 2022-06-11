import Image from 'next/image';
import Circle from '../circle/circle';
import styles from './testimonial.module.css';
import { users } from '../../data';

function Testimonial() {
	return (
		<div className={styles.container}>
			<Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
			<h1 className={styles.title}>Testimonials</h1>
			<div className={styles.wrapper}>
				{users.map((user) => (
					<div key={user.id} className={styles.card}>
						<Image src={`/img/${user.logo}`} alt="logo" width={30} height={30} />
						<p className={styles.comment}>{user.comment}</p>
						<div className={styles.person}>
							<Image
								className={styles.avatar}
								src={`/img/${user.avatar}`}
								alt="logo"
								width={45}
								height={45}
								objectFit="cover"
							/>
							<div className={styles.info}>
								<span className={styles.username}>{user.name}</span>
								<span className={styles.jobTitle}>{user.title}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Testimonial;
