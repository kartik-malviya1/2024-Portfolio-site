"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import foundr from '../../public/FoundrGuide.png'
import weather from '../../public/Weather.png'
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  const [activeSection, setActiveSection] = useState("about")
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = ev
      heroRef.current.style.setProperty("--x", `${clientX}px`)
      heroRef.current.style.setProperty("--y", `${clientY}px`)
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop
          const sectionHeight = ref.current.offsetHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault()
    const section = sectionRefs[sectionId as keyof typeof sectionRefs].current
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
  }
  {
    return (
      <div
      ref={heroRef}
      className="min-h-screen text-slate-400 relative z-30 radial-blue py-24">
      <div className="mx-auto flex max-w-7xl justify-around px-6 md:gap-8 mt-0">
        <header className="sticky top-24 h-fit max-w-sm">
          <nav className="grid gap-6">
            <div className="">
              <Link href={'/'} className="cursor-pointer">
              <h1 className="text-5xl font-bold text-slate-200">
                Kartik Malviya
              </h1>
              </Link>
              <p className="text-xl font-medium mt-3 text-slate-200 tracking-tight">
                Front End Developer
              </p>
              <p className="mt-4 max-w-xs">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>
            </div>
            <ul className="grid gap-3 mt-14">
              {["about", "experience", "projects"].map((item) => (
                <li key={item} className="relative">
                  <Link
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`group relative flex items-center font-semibold tracking-widest py-1 text-xs transition-colors duration-300 hover:text-slate-200 ${
                      activeSection === item ? "text-slate-200" : ""
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 h-[1px] w-8 -translate-y-2/3 bg-slate-200 transition-opacity duration-300 ${
                        activeSection === item ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span className="relative ml-10">
                      {item.toUpperCase()}
                    </span>
                    <span
                      className={
                        "absolute bottom-0 left-10 h-[1px] bg-slate-200 transition-all duration-300"
                      }
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <footer className="fixed bottom-24">
            <div className="flex gap-4 items-center ">
              <Link href="https://github.com/kartik-malviya1" target="_blank" className="transition-colors duration-100 hover:text-slate-200">
                <IoLogoGithub className="h-7 w-7" />
              </Link>
              <Link href="https://www.linkedin.com/in/kartik-malviya-data-science/" target="_blank" className="transition-colors duration-100 hover:text-slate-200">
                <IoLogoLinkedin className="h-[1.4rem] w-[1.4rem]" />
              </Link>
              <Link href="https://x.com/Kartikmalviya_" target="_blank" className="transition-colors duration-100 hover:text-slate-200">
                <BsTwitterX className="h-[1.4rem] w-[1.4rem]" />
              </Link>
              <Link href="https://www.instagram.com/kartik_malviya1/" target="_blank" className="transition-colors duration-00 hover:text-slate-200">
                <SiInstagram className="h-[1.4rem] w-[1.4rem]" />
              </Link>
            </div>
          </footer>
        </header>
        <main className="grid gap-24 max-w-[33rem] leading-relaxed">
          <section id="about" ref={sectionRefs.about} className="grid gap-8">
            <p className="max-w-2xl ">
              I&apos;m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
            </p>
            <p className="max-w-2xl"> 
              As a Software Engineer Intern at  {" "}
              <Link href="https://www.incilo.com/" target="_blank" className="text-slate-200 hover:underline font-semibold">
                Incilo
              </Link>
              .{" "} I played a key role in designing and maintaining UI components that drive the frontend of our platform. I focused on ensuring the platform adhered to web accessibility standards and implemented best practices to deliver a user experience that is both inclusive and seamless.
            </p>
            <p className="max-w-2xl">
                Outside of work, I immerse myself in creative pursuits like filmmaking and photography, capturing stories and moments through a visual lens. I also enjoy running to clear my mind and find inspiration, as well as reading books to explore new ideas and perspectives.{" "}
            </p>
            <ol className="group/list">
                <li className="mt-12 max-w-xs -mb-20">
                  <div className="group relative grid pb-1 right-[3.75rem] transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mr-20">
                    <div className="absolute -inset-x-4  -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" ></header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <p className="inline-flex cursor-pointer items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              View My  {" "} 
                              <span className="inline-block">
                                Resume
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </p>
                        </div>
                      </h3>
                    </div>
                  </div>
                </li>
                {/* Add more experience items here */}
              </ol>
          </section>
          <section
            id="experience"
            ref={sectionRefs.experience}
            className="grid gap-12 mt-8"
          >
            <ol className="group/list">
                <li className="mb-12 mt-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" >June — Aug 2024</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="#" target="_blank" rel="noreferrer">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Software Engineer {" "} 
                              <span className="inline-block">
                                Intern
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </Link>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                      During my time as a Software Engineer Intern at Incilo Logistics, I contributed significantly to the development of the company&apos;s main website and landing page. I prioritized design consistency across all components using ShadCN UI and ensured responsiveness for various devices.

                      To achieve this, I leveraged Next.js, TypeScript, and AWS CodeCommit for version control, while maintaining close collaboration with designers to translate ideas into pixel-perfect digital solutions. My role involved more than just coding—it was about building user-first interfaces that combine thoughtful design with robust engineering.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Next js
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Add more experience items here */}
              </ol>
          </section>
          <section
            id="projects"
            ref={sectionRefs.projects}
            className="grid gap-8"
          >
            <ol className="group/list">
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" ><Image src={weather} alt="weather webApp" width={100} height={100} className="object-cover w-[100%] rounded-sm"/></header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://weather-app-project-s.vercel.app/" target="_blank" rel="noreferrer">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Build a Weather App fetching data via API {" "} 
                              <span className="inline-block">
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </Link>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                      I built a sleek weather application using React and Tailwind CSS, leveraging a Weather API to fetch real-time data with Axios. The app features engaging Lottie animations for the sun, adding a dynamic and visually appealing touch.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Tailwind
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Axios
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      <Image src={foundr} alt="Foundrguide" width={100} height={100} className=" w-[100%] object-cover rounded-sm" /></header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://foundrguide.vercel.app" target="_blank" rel="noreferrer">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Build a AI Powered Platform for Founders {" "} 
                              <span className="inline-block">
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                      I designed and developed FoundrGuide, a platform dedicated to helping startup founders make informed decisions. This AI-driven tool provides personalized business advice, detailed book summaries, and actionable strategies tailored to the user’s specific needs. Powered by the Google Gemini AI model, the platform offers dynamic responses by referencing key insights from an extensive library of entrepreneurial books.

                      The system integrates advanced technologies like Next.js and MongoDB for a seamless user experience, while the backend built with Node.js and Express.js ensures reliable performance. FoundrGuide also features an intuitive UI designed using ShadCN UI, making it accessible and easy to navigate for founders seeking mentorship and knowledge
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Next js
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Node js
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Express js
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            MongoDB
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Gemini Api
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Shadcn Ui
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Add more experience items here */}
              </ol>
          </section>
        </main>
      </div>
    </div>
    );
  }
}
