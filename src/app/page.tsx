import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { Projects } from '@/components/Projects';
import { Technologies } from '@/components/Technologies';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Menu />
      <Header />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </main>
  );
}
