import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { span, heading, totalFeatures } from "../constants/featuresConstant"

const Features = () => {
  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: `.feature`,
      start: `top 80%`,
      end: `bottom bottom`,
      scrub: 10
    }})
    .from(
      `.feature`,
      {x: -100, opacity: 0, stagger: .1}
    )
  })

  return (
    <section id="features" className="bg-black flex flex-col items-center gap-20 px-6 py-20 md:px-12 lg:px-24">
      <div className="flex flex-col items-center text-center">
        <span className="uppercase font-semmibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">{span}</span>
        <h2 className="text-white text-3xl md:text-4xl">{heading}</h2>
      </div>
      <div className="flex flex-col gap-10">
        {totalFeatures.map((features, index) => (
          <div key={index} className="flex flex-col gap-10 md:flex-row md:justify-center">
            {features.map((feature, index) => (
              <div key={index} className="feature flex gap-3 md:basis-[30%]">
                <div>
                  {feature.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl">{feature.title}</h3>
                  <p className="text-white/50">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
