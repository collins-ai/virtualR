import Footer from "./sections/footer"
import Header from "./sections/header"
import Main from "./sections/main"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <div className="bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
