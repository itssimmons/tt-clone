import { Burger } from '../Icons/Burger'
import styles from './styles.module.css'

export default function Header () {
	return (
		<header className={styles.header}>
			<Burger />
			<nav className={styles.navbar}>
				<a className={styles.link} href='#'>Siguiendo</a>
				<a className={`${styles.link} ${styles.active}`} href='#'>Para ti</a>
			</nav>
		</header>
	)
}