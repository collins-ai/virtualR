import { BiFingerprint } from "react-icons/bi"
import { LuBatteryCharging, LuBotMessageSquare, LuGlobeLock, LuPlugZap, LuShieldHalf } from "react-icons/lu"

const totalFeatures = [
  [
    {icon: <LuBotMessageSquare className="bg-neutral-900 text-orange-700 text-3xl p-1 rounded-full" />, title: "Drag-and-Drop Interface", description: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."},
    {icon: <BiFingerprint className="bg-neutral-900 text-orange-700 text-3xl p-1 rounded-full" />, title: "Multi-Platform Compatibility", description: "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets."},
    {icon: <LuShieldHalf className="bg-neutral-900 text-orange-700 text-3xl p-1 rounded-full" />, title: "Built-in Templates", description: "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments."}
  ],
  [
    {icon: <LuBatteryCharging className="bg-neutral-900 text-orange-700 text-3xl p-1 rounded-full" />, title: "Real-Time Preview", description: "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments."},
    {icon: <LuPlugZap className="bg-neutral-900 text-orange-700 text-3xl p-1 rounded-full" />, title: "Collaboration Tools", description: "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing."},
    {icon: <LuGlobeLock className="bg-neutral-900 text-orange-700 text-3xl p-1 rounded-full" />, title: "Analytics Dashboard", description: "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."}
  ]
]

const span = `feature`
const heading = `Optimise your build process`

export { span, heading, totalFeatures }
