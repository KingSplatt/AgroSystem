import './Login.css';
import logo from './img/login.png';

function App() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form>
    
          <label>
            <input type="text" name="name" placeholder='Usuario' />
          </label>
            <br/>
          <label>
            <input type="password" name="name" placeholder='Contraseña' />
          </label>
            <br/>
          <button type="submit">Ingresar</button>
        </form>

    
      </header>
    </div>
  );
}

export default App;
