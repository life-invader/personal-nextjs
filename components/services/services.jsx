import Link from 'next/link';
import Image from 'next/image';
import styles from './services.module.css';

function Services({ services = [] }) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>What we can do ?</h1>
			<h2 className={styles.subtitle}>Services we can help you with</h2>
			<div className={styles.services}>
				{services.map((service) => (
					<Link key={service.id} href={`/products/${service.name}`} passHref>
						<div className={styles.service}>
							<div className={styles.description}>{service.desc}</div>
							<span className={styles.category}>{service.title}</span>
							<div className={styles.media}>
								{service.video ? (
									<video
										src={`/img/${service.video}`}
										className={styles.video}
										autoPlay
										loop
										muted
									/>
								) : (
									<Image
										src={`/img/${service.photo}`}
										alt="service"
										layout="responsive"
										width="100%"
										height="100%"
										objectFit="cover"
									/>
								)}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Services;
