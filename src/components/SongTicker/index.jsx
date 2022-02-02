import { SongIcon } from "../Icons/SongIcon"
import styles from "./styles.module.css"

export default function SongTicker ({ songName }) {
	return (
		<div className={styles.song}>
			<SongIcon />
			<div className={styles.ticker}>
				<p className={styles.songName}>{songName}</p>
				<p className={styles.songName}>{songName}</p>
			</div>
		</div>
	)
}