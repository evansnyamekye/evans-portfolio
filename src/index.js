import ReactDom from 'react-dom';
import AOS from 'aos';
import App from './App';
import './index.css';
import 'aos/dist/aos.css';

AOS.init();

ReactDom.render(<App />, document.querySelector('#root'));
