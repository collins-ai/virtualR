import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { code, heading, checklistItems } from "../constants/workflowConstant"

const Workflow = () => {
  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: `.workflow`,
      start: `top 80%`,
      end: `bottom bottom`,
      scrub: 5
    }})
    .from(
      `.workflow`,
      {y: 100, opacity: 0, stagger: .2}
    )
  })

  return (
    <section id="workflow" className="bg-black flex flex-col items-center gap-20 px-6 py-20 md:px-12 lg:px-24">
      <h2 className="text-white text-3xl text-center md:text-4xl">{heading}</h2>
      <div className="flex flex-col gap-20 md:flex-row md:items-center">
        <div className="md:basis-[50%]">
          <img src={code} alt="code" />
        </div>
        <div className="flex flex-col gap-10 md:basis-[50%]">
          {checklistItems.map((checklistItem, index) => (
            <div key={index} className="workflow flex gap-3">
              <div>
                {checklistItem.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-xl">{checklistItem.title}</h3>
                <p className="text-white/50">{checklistItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow
