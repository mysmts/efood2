import React, { ReactNode } from 'react';
import PostComments from '../PostComments';
import styles from './Post.module.css';

type Props = {
  children: ReactNode;
  imageUrl: string;
};

const Post: React.FC<Props> = ({ children, imageUrl }) => (
  <div className={styles.post}>
    <img className={styles['post-image']} src={imageUrl} alt="Post" />
    <p className={styles['post-text']}>{children}</p>
    <div data-testid="post-comments-wrapper">
      <PostComments />
    </div>
  </div>
);

export default Post;




