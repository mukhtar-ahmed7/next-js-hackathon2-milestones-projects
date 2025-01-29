
import Image from 'next/image'
import Link from 'next/link'
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Calculator UI",
      image: "/prj1.png",
      description: "A simple calculator UI for basic arithmetic operations, featuring a clean design, responsive layout, and user-friendly interface.",
      link: "https://simple-calculator-ui.vercel.app/"
    },
    {
      id: 2,
      title: "Countdown Timer UI",
      image: "/pro2.jpg",
      description: "A countdown timer UI visually displays the remaining time, offering a sleek, interactive, and intuitive interface.",
      link: "https://countdown-timer-ui.vercel.app/"
    },
    {
      id: 3,
      title: "Weather UI",
      image: "/pro3.png",
      description: "Plan your day with confidence using this user-friendly weather UI featuring sunrise, sunset, and rain predictions.",
      link: "https://weather-ui-coral.vercel.app/"
    },
    {
      id: 4,
      title: "Developer Landing Page UI",
      image: "/pro4.jpg",
      description: "A responsive developer landing page showcasing portfolio, skills, and projects with a clean and modern design.",
      link: "https://developer-landing-page-ui.vercel.app/"
    },
    {
      id: 5,
      title: " Website on HTML5 and CSS3",
      image: "/pro5.jpeg",
      description: "Explore a beautifully crafted HTML and CSS website showcasing impressive design and interactive features.",
      link: "https://html-css-website-delta.vercel.app/"
    },
    {
      id: 6,
      title: "Portfolio on HTML5 and CSS3",
      image: "/pro6.png",
      description: "This portfolio showcases my creativity, technical expertise, and attention to detail, perfectly adapting to all screen sizes.",
      link: "https://portfolio-html-css-five-kappa.vercel.app/"
    }
  ]
  return (
    <section id="projects" className=" bg-gray-100 " data-aos="zoom-in-up">
      <div className="bg-deepBlue h-full w-full flex flex-col items-center py-16 px-20 "data-aos="zoom-in-up">
        {/* Centered Top Heading */}
<div className="text-center mb-6"data-aos="zoom-in-up">
          {/* <h1 className="text-xl sm:text-xl md:text-4xl underline underline-offset-8 decoration-2 decoration-gray-500 font-bold tracking-wide py-4 text-white transition-all duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_5px_rgba(255,165,0,0.8)]" data-aos="zoom-in-up">
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500" data-aos="zoom-in-up">
              My Projects
            </span>
          </h1> */}
          <h1
  className="
    text-2xl        /* Default for very small screens */
    sm:text-3xl     /* Adjusted for small screens */
    md:text-4xl     /* Adjusted for medium screens */
    lg:text-5xl     /* Adjusted for large screens */
    xl:text-6xl     /* Adjusted for xl screens */
    underline underline-offset-8 decoration-2 decoration-gray-500 
    font-bold tracking-wide py-4 text-white
    transition-all duration-300 hover:scale-110 
    hover:shadow-[0px_0px_20px_5px_rgba(255,165,0,0.8)]
  "
  data-aos="zoom-in-up"
>
  <span
    className="
      bg-clip-text text-transparent bg-gradient-to-r 
      from-orange-500 via-purple-500 to-blue-500
    "
    data-aos="zoom-in-up"
  >
    My Projects
  </span>
</h1>

          <h3 className="mt-4 text-md sm:text-xl md:text-2xl lg:text-3xl  text-gray-300 font-semibold tracking-wider" data-aos="zoom-in-up">
            Explore my latest creative and functional designs crafted with precision.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {projects.map((project) => (
            <div key={project.id} className="bg-blue-400 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" data-aos="fade-up">
              <div className="flex justify-center mt-4" data-aos="zoom-in-up">
          <Image 
           src={project.image || "/placeholder.svg"} alt={`${project.title} image`}
           width={150} 
           height={150} 
           className="w-[400px] h-40 object-cover transition-transform duration-300 hover:scale-110" data-aos="zoom-in-up" />
              </div>
              
              <div className="p-4 text-center" data-aos="zoom-in-up">
          <h3 className="text-2xl text-blue-950 font-bold underline underline-offset-4 mb-2" data-aos="zoom-in-up">{project.title}</h3>
          <p className="text-gray-950 mb-4 transition-colors duration-300 hover:text-white hover:bg-blue-950">{project.description}</p>
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-orange-500" data-aos="zoom-in-up">View Project</button>
          </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}