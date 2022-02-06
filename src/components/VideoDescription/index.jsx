import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker'
import styles from './styles.module.css'

export default function VideoDescription({author, description, albumCover, songName, animate}) {
	return (
		<div className={styles.description}>
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
				<SongTicker songName={songName} animate={animate} />
			</div>
			<div>
				<AlbumDisk albumCover={albumCover} animate={animate} />
			</div>
		</div>
	)
}
