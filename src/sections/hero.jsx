import { useRef } from "react"
import { Link } from "react-scroll"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { heading, span, paragraph, link1, link2, videos } from "../constants/headerConstant"

const Hero = () => {
  const homeRef = useRef()

  useGSAP(() => {
    gsap.from(
      homeRef.current,
      {opacity: 0, scale: 0, duration: 1, delay: 1}
    )
  })

  return (
    <section id="home" className="bg-black flex flex-col items-center gap-10 px-6 py-20 md:gap-0">
      <div ref={homeRef} className="min-h-[60vh] flex flex-col justify-center items-center gap-5 text-center md:w-1/2">
        <h1 className="text-4xl text-white md:text-5xl">{heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">{span}</span></h1>
        <p className="text-white/50 text-lg">{paragraph}</p>
        <div className="flex justify-center gap-5 text-white text-lg">
          <Link to="workflow" offset={-50} smooth className="bg-gradient-to-r from-orange-400 to-orange-700 px-4 py-2 rounded-lg cursor-pointer hover:scale-105">{link1}</Link>
          <Link to="testimonials" offset={-50} smooth className="bg-black border border-white px-4 py-2 rounded-lg cursor-pointer hover:scale-105">{link2}</Link>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-10">
        {videos.map((video, index) => (
          <video autoPlay muted loop key={index} src={video.src} className="w-[80%] md:w-[40%] border border-orange-700 rounded-lg"></video>
        ))}
      </div>
    </section>
  )
}

export default Hero
