import Circle from '../components/circle/circle';
import styles from '../styles/contacts.module.css';

function Contacts() {
	return (
		<div className={styles.container}>
			<Circle backgroundColor="green" left="-50vh" top="-20vh" />
			<Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
			<h1 className={styles.title}>Get in touch</h1>
			<form className={styles.form}>
				<input className={styles.inputS} type="text" placeholder="Username" />
				<input className={styles.inputS} type="tel" placeholder="Phone" />
				<input className={styles.inputL} type="email" placeholder="Email" />
				<input className={styles.inputL} type="text" placeholder="Subject" />
				<textarea className={styles.textarea} rows="6" placeholder="Message" />
				<button className={styles.submit} type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contacts;
