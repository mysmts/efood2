import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://http2.mlstatic.com/D_NQ_NP_845573-MLB46151728655_052021-O.webp">
        Pequeno Voldemort.
      </Post>
    </div>
  );
}

export default App;
