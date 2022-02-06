import styles from './styles.module.css'
import { Heart, Comment, Share } from '../Icons/PlayerIcons'

export default function Actions ({
  likes = 123,
  comments = 123,
  shares = 123,
  hearted = false,
  author,
  srcPhoto
}) {
  const handleLike = () => {
    alert('liked')
  }

  const handleComment = () => {
    alert('commented')
  }

  const handleShare = () => {
    alert('shared')
  }

  const handleFollow = () => {
    alert('followed')
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.avatarWrapper}>
        <a href={`/user/${author}`} className={styles.avatarLink}>
          <img className={styles.avatar} src={srcPhoto} alt={author} />
        </a>
        <div onClick={handleFollow} className={styles.follow}></div>
      </div>
      <div className={styles.actions}>
        <button onClick={handleLike} className={styles.action}>
          <Heart width={45} fill='white' />
          <span title='like'>{likes}</span>
        </button>
        <button onClick={handleComment} className={styles.action}>
          <Comment width={45} />
          <span title='comment'>{comments}</span>
        </button>
        <button onClick={handleShare} className={styles.action}>
          <Share width={45} />
          <span title='share'>{shares}</span>
        </button>
      </div>
    </aside>
  )
}
