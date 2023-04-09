import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar';
import Content from './Components/content';
import Container from './Components/container';
import styles from './Style/styles.module.css'


function App() {
  return (
    <Container>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </Container>
  );
}

export default App;
