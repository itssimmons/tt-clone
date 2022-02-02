import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker'
import styles from './styles.module.css'

export default function VideoDescription({author, description, albumCover, songName}) {
	return (
		<footer className={styles.description}>
			<div className={styles.textWrapper}>
				<strong>
					<a 
						className={styles.author} 
						href={`/user/${author}`}
					>
						@{author}
					</a>
				</strong>
				<p className={styles.text}>
					{description}
				</p>
				<SongTicker songName={songName} />
			</div>
			<div>
				<AlbumDisk albumCover={albumCover} />
			</div>
		</footer>
	)
}
