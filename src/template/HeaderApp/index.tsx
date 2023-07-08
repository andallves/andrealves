import { Projects } from '@/components/Projects';
import { Menu } from '@/components/Menu';
import * as Styled from './styles';
import { Technologies } from '@/components/Technologies';
import { AboutMe } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

function HeaderApp() {
  return (
    <Styled.Main>
      <Menu />
      <Header />
      <Projects />
      <Technologies />
      <AboutMe />
      <Footer />
    </Styled.Main>
  );
}

export default HeaderApp;
