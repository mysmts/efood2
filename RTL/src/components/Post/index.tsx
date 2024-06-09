import React from 'react';
import styles from './Post.module.css';

interface PostProps {
  imageUrl: string;
  children: React.ReactNode;
}

const Post: React.FC<PostProps> = ({ imageUrl, children }) => {
  return (
    <div className={styles.post}>
      <img className={styles.postImage} src={imageUrl} alt="Post" />
      <p className={styles.postText}>{children}</p>
      <div data-testid="post-comments-wrapper">
        <div>
          <ul className={styles.postComments} data-testid="post-comments" />
          <form className={styles.postCommentsForm}>
            <textarea className={styles.postCommentsFormTextarea} required />
            <button className={styles.postCommentsFormButton} type="submit" data-testid="comment-button">
              Comentar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;

