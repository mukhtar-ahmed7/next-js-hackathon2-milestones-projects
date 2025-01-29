

import About from './about/page'
import Contact from './contact/page'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './projects/page'
import Skills from './skills/page'

export default function Home() {
  return (
     <div>
       <Header />
         <main>
           <Hero />
           <About />
           <Skills />
           <Projects />
           <Contact />
         </main>
       <Footer />
     </div>
  )
}
