import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { heading, pricingOptions } from "../constants/pricingConstant"

const Pricing = () => {
  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: `.pricing`,
      start: `top 80%`,
      end: `bottom bottom`,
      scrub: 10
    }})
    .from(
      `.pricing`,
      {scale: 0, opacity: 0, stagger: .1}
    )
  })

  return (
    <section id="pricing" className="bg-black flex flex-col items-center gap-20 px-6 py-20 md:px-12 md:items-stretch lg:px-24">
      <h2 className="text-white text-center text-3xl md:text-4xl">{heading}</h2>
      <div className="flex flex-col gap-10 md:flex-row">
        {pricingOptions.map((pricingOption, index) => (
          <div key={index} className="pricing text-white border border-white/50 rounded-xl p-10 md:p-5 lg:p-10 basis-[35%]">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700 text-2xl font-bold mb-5 w-fit">{pricingOption.title}</p>
            <p className="text-2xl font-bold mb-5">{pricingOption.price}<span className="font-normal text-xs text-white/50">/Month</span></p>
            <ul className="flex flex-col gap-3 mb-10 text-white/50">
              {pricingOption.features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  {pricingOption.icon}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full border border-orange-700 p-2 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-700">{pricingOption.button}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
  
export default Pricing
