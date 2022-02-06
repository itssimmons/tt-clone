import { Activity, Home, Profile, Search } from '../Icons/FooterMenuIcons'
import styles from './styles.module.css'

const white = "#fff"
export default function FooterMenu () {
	return (
		<footer>
			<a className={styles.linkIcon} href="#">
				<Home color={white} solid={true}/>
			</a>
			<a className={styles.linkIcon} href="#">
				<Search color={white} />
			</a>
			<div className={styles.add}></div>
			<a className={styles.linkIcon} href="#">
				<Activity color={white} />
			</a>
			<a className={styles.linkIcon} href="#">
				<Profile color={white} />
			</a>
		</footer>
	)
}