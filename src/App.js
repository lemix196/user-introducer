import styles from './App.module.css';

import Card from './components/UI/Card';
import UserForm from './components/Users/UserForm';


function App() {
  return (
    <div className={styles.app}>
      <Card>
        <UserForm />
      </Card>
    </div>
  );
}

export default App;
