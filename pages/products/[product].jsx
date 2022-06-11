import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/products.module.css';
import { data } from '../../data';

function Product({ product }) {
	return (
		<div className={styles.container}>
			<div className={styles.cardL}>
				{product.images.map((item) => (
					<div key={item.id} className={styles.imgContainer}>
						<Image
							src={item.url}
							alt="img"
							width="100%"
							height="100%"
							objectFit="cover"
							layout="responsive"
						/>
					</div>
				))}
			</div>
			<div className={styles.cardS}>
				<h1 className={styles.title}>{product.title}</h1>
				<p className={styles.desc}>{product.longDesc}</p>
				<Link href="/contacts">
					<a className={styles.link}>Contact</a>
				</Link>
			</div>
		</div>
	);
}

export default Product;

export async function getStaticProps(context) {
	const name = context.params.product;
	const product = data.find((item) => item.name === name); // Как будто загрузил

	return {
		props: { product }, // will be passed to the page component as props
	};
}

export async function getStaticPaths() {
	const products = data; // Как будто загрузил
	const paths = products.map((item) => ({
		params: { product: item.name },
	}));

	return {
		paths,
		fallback: true,
	};
}
