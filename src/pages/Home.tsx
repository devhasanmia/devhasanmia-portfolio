import About from "../components/About"
import Banner from "../components/Banner"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { blogsData } from "../data/blogdata"

const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Blog blogs={blogsData.data}/>
        <Contact/>
        
    </div>
  )
}

export default Home