import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { heading, totalTestimonials } from "../constants/testimonialConstant"

const Testimonials = () => {
  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: `.testimonial`,
      start: `top 80%`,
      end: `bottom bottom`,
      scrub: 10
    }})
    .from(
      `.testimonial`,
      {x: -100, opacity: 0, stagger: .1}
    )
  })

  return (
    <section id="testimonials" className="bg-black flex flex-col items-center gap-20 px-6 py-20 md:px-12 lg:px-24">
      <h2 className="text-white text-center text-3xl md:text-4xl">{heading}</h2>
      <div className="text-white/50 flex flex-col gap-10 md:flex-row lg:flex-col">
        {totalTestimonials.map((testimonials, index) => (
          <div key={index} className="flex flex-col gap-10 lg:flex-row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial border border-white rounded-lg p-5 flex flex-col justify-between gap-5">
                <p>{testimonial.text}</p>
                <div className="flex items-center gap-5">
                  <div>
                    <img src={testimonial.image} alt="users" className="w-10 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white">{testimonial.user}</span>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
  
export default Testimonials
