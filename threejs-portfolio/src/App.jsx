import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';

const App = () => {
    return (
        <main className='max-w-8xl mx-auto relative'>
            <Navbar />
            <Hero />
            <About />
            {/* /*
            <Projects />
            */}
            <Experience />
            <Contact />
            <Footer />
        </main>
    )
}
export default App;
