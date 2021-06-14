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
import Card from "../components/Card";

const Sponsors = [
  {
    companyName: "Hack Club Bank",
    logo: "https://cloud-lsj5acqf8-hack-club-bot.vercel.app/0powered-by-hack-club.png",
    website: "https://bank.hackclub.com",
  },
];

export default function Home() {
  useEffect(() => {
    console.log("Sign up for NeoHacks!");
  });

  return (
    <div>
      <HeadObject />
      {/* <Nav /> */}
      <main>
        <section className="bg-navy m-0">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-12 pb-16 md:p-24 flex flex-col space-y-5 md:pt-48 relative z-50"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white font-ramona">
              NeoHacks
            </h1>
            <h3 className="font-fira text-white text-xl md:text-2xl w-2/3 md:w-full">
              July 30 - Aug 1, 2021 • Virtual
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
            className="w-full relative z-0 md:-mt-64 -mt-60"
          />
        </section>
        <section>
          <h2 className="md:leading-loose pb-4 md:pb-0">
            Welcome to <span className="font-ramona text-navy">NeoHacks</span>!
          </h2>
          <p className="text-lg ">
            NeoHacks is a 48-hour hackathon taking place July 30 - Aug 1, 2021
            where hundreds of students from around the world will come together
            virtually to learn new skills, meet new friends, and build awesome
            projects. We provide beginner-friendly workshops, mentorship, fun
            games, and more. The first day of the event will be a workshop-based
            learnathon where you will get a chance to gain new skills. The
            second day will be dedicated towards your building a project with
            your team.
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
            <Question title="What if I don't have a team?">
              There will be several team formation opportunities before and
              during the event. Although working with a team (of 1-4 hackers) is
              highly encouraged, you may choose to work alone.
            </Question>
          </div>
        </section>
        <section>
          <h2>Prizes</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card type={2} icon="star" color="orange" heading="Best Overall">
              Every project submitted will be entered in this category. Winners
              will each receive a Discord Nitro subscription along with a $50
              Amazon gift-card.
            </Card>
            <Card type={2} icon="pencil" color="red" heading="Most Creative">
              You'll each win a $20 gift-card along with a one-year license for
              Sketch, a design platform used by over one million people — from
              freelancers, to the world’s largest teams.
            </Card>
            <Card type={2} icon="globe" color="blue" heading="Best Web App">
              Create a web application using any technologies of choice for a
              chance to win a $25 Amazon gift card for each member of your team.
            </Card>
            <Card
              type={2}
              icon="phone"
              color="purple"
              heading="Best Mobile App"
            >
              Create a mobile application using any technologies of choice for a
              chance to win a $25 Amazon gift card for each member of your team.
            </Card>
            <Card
              type={2}
              icon="sparkles"
              color="turquoise"
              heading="Best Workshop Hack"
            >
              Attend a workshop and base your project off what you learned at
              that workshop. Be sure to tell us which workshop you attended and
              how you took your project further after the workshop.
            </Card>
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
            <Workshop title="Intro to Git/GitHub">
              Learn the basics of Git and GitHub, a useful tool every developer
              should be familiar with. At the end of the workshop, you will be
              able to create your first pull request.
            </Workshop>
            <Workshop
              title="Intro to Next.js (React)"
              hostName="Sam Poder"
              hostPfp="https://github.com/sampoder.png"
            >
              Learn the basics of Next.js, a React framework to build modern,
              dynamic websites.
            </Workshop>
            <Workshop
              title="Expansion 101"
              hostName="Galicia Gordon"
              hostPfp="https://github.com/galiciagordon.png"
            >
              Attend the Expansion 101 Workshop to learn about Galicia's tips
              for team formation and project brainstorming session to find a
              team and project that inspires you to build something great.
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
              name="Risha Jhangiani"
              role="Lead Organizer."
              pronouns="she/her"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Marius Schaefer"
              role="Social Media."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Daniel Katz"
              role="Operations."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Daniel Shubin"
              role="Sponsorships."
              pronouns="he/him"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Neta Shubin"
              role="Outreach."
              pronouns="she/her"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            />
            <Person
              name="Ella"
              role="Branding."
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
