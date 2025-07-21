import { linkTitles, totalLinks } from "../constants/footerConstant"

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-t-white/25 flex flex-col items-start gap-10 px-6 py-12 sm:flex-row sm:justify-between md:px-12 lg:px-24">
      {totalLinks.map((links, index) => (
        <div key={index} className="flex flex-col gap-5">
          <p className="font-bold text-lg">{linkTitles[index]}</p>
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={index} className="text-white/50">{link.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  )
}

export default Footer
