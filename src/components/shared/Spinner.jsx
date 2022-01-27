import spinner from '../assets/spin-1s-200.gif';

function Spinner() {
  return <img src={spinner} alt='loading ...' style={{ width: '100px', margin: 'auto', display: 'block' }} />
};

export default Spinner;