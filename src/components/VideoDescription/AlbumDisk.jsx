import clsx from 'clsx'
import styles from './styles.module.css'

export default function AlbumDisk({ albumCover, animate }) {
	const albumToggleRunnig = clsx(styles.album, {
		[styles.albumRunning]: animate
	})
	return (
		<a href="#" className={albumToggleRunnig}>
			<img 
				className={styles.albumImage} 
				src={albumCover} 
			/>
		</a>
	)
}
