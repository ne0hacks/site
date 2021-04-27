import { useEffect } from "react";
import Link from "next/link";
import HeadObject from "../components/head";
import { motion } from "framer-motion";
// import Nav from "../components/nav";
import Question from "../components/Question";
import Person from "../components/Person";
import Footer from "../components/Footer";
import Prize from "../components/Prize";
import Workshop from "../components/Workshop";
import Sponsor from "../components/Sponsor";

const Sponsors = [
  {
    companyName: "Hack Club Bank",
    logo:
      "https://cloud-lsj5acqf8-hack-club-bot.vercel.app/0powered-by-hack-club.png",
    website: "https://bank.hackclub.com",
  },
];

export default function Home() {
  useEffect(() => {
    console.log("Sign up for NeoHacks!");
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      {/* <Nav /> */}
      <main>
        <section className="bg-navy m-0">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-12 md:p-24 flex flex-col space-y-5 md:pt-48 relative z-50"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white font-ramona">
              NeoHacks
            </h1>
            <h3 className="font-fira text-white text-xl md:text-2xl w-2/3 md:w-full">
              June 25-27, 2021 • Virtual
            </h3>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-white font-inter text-base md:text-lg font-medium p-2 px-6 w-min"
            >
              <a href="https://airtable.com/shrhuP6sBAWskOiqT">Register</a>
            </motion.button>
          </motion.div>
          <img
            src="/cliff.svg"
            alt="cliff"
            className="w-full relative z-0 -mt-64"
          />
        </section>
        <section>
          <h2 className="md:leading-loose pb-4 md:pb-0">
            Welcome to <span className="font-ramona text-navy">NeoHacks</span>!
          </h2>
          <p className="text-lg ">
            NeoHacks is a 48-hour hackathon taking place June 25-27, 2021 where
            hundreds of students from around the world will come together
            virtually to learn new skills, meet new friends, and build awesome
            projects. We provide beginner-friendly workshops, mentorship, fun
            games, and more. The first day of the event will be workshop based
            where you will get a chance to gain new skills. The second day will
            be dedicated towards your building your product.
          </p>
        </section>
        <section>
          <h2>FAQ</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Question title="Where is this held?">
              Due to COVID-19, NeoHacks is completely virtual and will take
              place on Zoom and Discord.
            </Question>
            <Question title="What is a hackathon?">
              A hackathon is a great place to learn new skills, make new
              friends, and have fun. By the end of the hackathon, you will have
              turn in a project for feedback from judges.
            </Question>
            <Question title="Who is eligible to participate?">
              This hackathon is open to anyone regardless of their identity. We
              highly encourage beginners to participate!
            </Question>
            <Question title="How can I prepare for a hackathon?">
              No advanced preparation is necessary! We have workshops tailored
              to those who are new to coding and intro workshops to help
              beginner hackers.
            </Question>
          </div>
        </section>
        <section>
          <h2>Prizes</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Prize icon="/star.svg" title="Best Overall">
              You'll each win a Google Home Mini. (Up to 4 team members)
            </Prize>
            <Prize icon="/lightbulb.svg" title="Most Creative Idea">
              You'll each win a Google Home Mini. (Up to 4 team members)
            </Prize>

            <Prize icon="/globe.svg" title="Best Web Project">
              You'll each win a Sublime Text License as well as some other
              random stuff.
            </Prize>
            <Prize icon="/phone.svg" title="Best Mobile App">
              You'll each win a Google Home Mini. (Up to 4 team members)
            </Prize>
            <Prize icon="/sparkles.svg" title="Best Workshop Hack">
              Attend a workshop and base your project off what you learned at
              that workshop. Be sure to tell us which workshop you attended and
              how you took your project further after the workshop.
            </Prize>
          </div>
        </section>
        <section>
          <h2>Workshops</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Workshop title="Intro to HTML/CSS">
              This workshop serves as an introduction to web development with
              HTML and CSS.
            </Workshop>
            <Workshop title="Intro to Figma">
              Learn how to use Figma, a free design and prototyping software, to
              develop the UI for your project.
            </Workshop>
            <Workshop title="Intro to Databases">
              Know the basics of web development and want to take it further?
              Learn how to set up a database and use it in your project.
            </Workshop>
            <Workshop title="Intro to React (Next.js)">
              Learn the basics of react using the Next.js framework to build
              modern, dynamic websites.
            </Workshop>
            <Workshop title="Intro to Python">
              This workshop serves as a basic introduction to python, a
              powerful, general-purpose programming language with a diverse
              range of applications.
            </Workshop>
          </div>
        </section>
        <section>
          <h2 className="pb-4">Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {Sponsors.map(({ logo, companyName, website }) => {
              return (
                <Sponsor
                  logo={logo}
                  companyName={companyName}
                  website={website}
                />
              );
            })}
          </div>
        </section>
        <section>
          {/* <h2>Judges</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Person
              name="Guillermo Rauch"
              role="Founder of Vercel."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Guillermo Rauch"
              role="Founder of Vercel."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Guillermo Rauch"
              role="Founder of Vercel."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Guillermo Rauch"
              role="Founder of Vercel."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
          </div> */}
        </section>
        <section>
          <h2>Team</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Person
              name="Risha"
              role="Lead Organizer."
              pronouns="she/her"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Marius"
              role="Hack Clubber."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Daniel Katz"
              role="Hack Clubber."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Daniel S."
              role="Hack Clubber."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Neta"
              role="Hack Clubber."
              pronouns="she/her"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Ella"
              role="Another Hack Clubber."
              pronouns="she/her"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
