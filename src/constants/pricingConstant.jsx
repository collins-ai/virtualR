import { BiCheckCircle } from "react-icons/bi"

const pricingOptions = [
  {
    title: "Free", price: "$0", button: "Subscribe",
    icon: <BiCheckCircle className="text-white text-2xl rounded-full" />,
    features: ["Private board sharing", "5 Gb Storage", "Web Analytics", "Private Mode"]
  },
  {
    title: "Pro", price: "$10", button: "Subscribe",
    icon: <BiCheckCircle className="text-white text-2xl rounded-full" />,
    features: ["Private board sharing", "10 Gb Storage", "Web Analytics (Advance)", "Private Mode"]
  },
  {
    title: "Enterprise", price: "$200", button: "Subscribe",
    icon: <BiCheckCircle className="text-white text-2xl rounded-full" />,
    features: ["Private board sharing", "Unlimited Storage", "High Performance Network", "Private Mode"]
  }
]

const heading = `Pricing`

export { heading, pricingOptions }
