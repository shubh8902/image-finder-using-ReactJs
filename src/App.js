import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BreadCrumb from './components/BreadCrumb';
import Images from './components/Images';
import { useEffect } from 'react';
import { getImages } from './services/api';
import SnackBar from './components/Snackbar';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] =  useState(5);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
     if (count < 3 || count > 200) {
      setOpen(true);
      return;
     }
     setOpen(false);
     const getData = async () => {
        const res = await getImages(text, count);
        setData(res.data.hits);
     }
     getData();
  }, [text, count]);
  return (
    <div>
      <Navbar />
      <BreadCrumb
      setText={setText}
      setCount={setCount}
      />
      <Images data={data} />
      <SnackBar open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
