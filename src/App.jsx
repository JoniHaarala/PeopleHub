import { Path } from './routes/path';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className='bg-zinc-100 font-noto-sans flex flex-col'>
      <Navbar />
      <div className='sm:px-16 px-6 py-2 max-w-7xl mx-auto z-0'>
        <Path />
      </div>
    </main>
  );
}

export default App;
