import Head from 'next/head';
import Intro from '../components/intro/intro';
import Services from '../components/services/services';
import Testimonial from '../components/testimonial/testimonial';
import { data } from '../data';

export default function Home({ services }) {
	return (
		<>
			<Head>
				<title>Next main</title>
				<meta name="description" content="My first Next.js app" />
			</Head>
			<Intro />
			<Services services={services} />
			<Testimonial />
		</>
	);
}

export async function getStaticProps(context) {
	const response = data; // Как будто загрузил

	return {
		props: { services: response },
	};
}
