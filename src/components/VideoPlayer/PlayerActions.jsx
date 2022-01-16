import styles from './styles.module.css'
import { Heart, Comment, Share } from '../Icons/PlayerIcons'

export default function PlayerActions ({
  likes = 12,
  comments = 12,
  shares = 12,
  hearted = false
}) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title='like'>{likes}</strong>
      </div>

      <div className={styles.action}>
        <Comment />
        <strong title='comment'>{comments}</strong>
      </div>

      <div className={styles.action}>
        <Share />
        <strong title='share'>{shares}</strong>
      </div>
    </aside>
  )
}
