import clsx from "clsx"
import { SongIcon } from "../Icons/SongIcon"
import styles from "./styles.module.css"

export default function SongTicker ({ songName, animate }) {

	const tickerToggleRunning = clsx(styles.tickerWrapper, {
		[styles.tickerRunning]: animate
	})

	return (
		<div className={styles.song}>
			<SongIcon />
			<div className={styles.ticker}>
				<div className={tickerToggleRunning}>
					<p className={styles.songName}>{songName}</p>
					<p className={styles.songName}>{songName}</p>
					<p className={styles.songName}>{songName}</p>
				</div>
			</div>
		</div>
	)
}