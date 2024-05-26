import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://i.thenile.io/r1000/0849803058616.jpg?r=5ffebdecc01c5">
        Pequeno Voldemort.
      </Post>
    </div>
  );
}

export default App;