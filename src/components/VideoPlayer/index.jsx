import { useRef, useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

import PlayerActions from './PlayerActions'
import VideoDescription from '../VideoDescription/index'

export default function VideoPlayer ({ author, description, albumCover, songName, src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoElement } = video
    playing ? videoElement.pause() : videoElement.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={src}
        loop
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <PlayerActions />
      <VideoDescription 
        albumCover={albumCover}
        author={author}
        description={description}
        songName={songName}
      />
    </div>
  )
}
