import { Path } from './routes/path';
import { Navbar, Footer } from './components';

function App() {
  return (
    <main className='bg-zinc-100 font-noto-sans flex flex-col'>
      <Navbar />
      <Path />
      <Footer />
    </main>
  );
}

export default App;
