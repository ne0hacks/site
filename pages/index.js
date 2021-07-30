import { useEffect } from "react";
// import Link from "next/link";
import HeadObject from "../components/head";
import { motion } from "framer-motion";
import Question from "../components/Question";
import Person from "../components/Person";
import Footer from "../components/Footer";
// import Prize from "../components/Prize";
import Workshop from "../components/Workshop";
import Sponsor from "../components/Sponsor";
import Card from "../components/Card";
import Announcement from "../components/Announcement";

const Sponsors = [
  {
    companyName: "Hack Club Bank",
    logo: "https://cloud-lsj5acqf8-hack-club-bot.vercel.app/0powered-by-hack-club.png",
    website: "https://bank.hackclub.com",
  },
  {
    companyName: "Slingshot",
    logo: "/logos/slingshot.png",
    website: "https://slingshotahead.com",
  },
  { 
    companyName: "Qoom",
    logo: "https://cloud-dqudt01co-hack-club-bot.vercel.app/0qoom-logo-official.png",
    website: "https://www.qoom.io/",
];

export default function Home() {
  useEffect(() => {
    console.log("Sign up for NeoHacks!");
  });

  return (
    <div>
      <HeadObject />
      <main>
        <div className="hidden lg:block lg:absolute lg:left-1/4 lg:right-1/4 lg:mt-8">
          <Announcement />
        </div>
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
            second day will be dedicated towards building a project with your
            team.
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
              Every project submitted will be entered in this category. Winners will each receive a mystery prize!
            </Card>
            <Card type={2} icon="pencil" color="red" heading="Most Creative">
              Make your wildest ideas a reality and earn the best creative prize to win a $50 Amazon gift card for your team. (Subject to change)
            </Card>
            <Card type={2} icon="globe" color="blue" heading="Best Web App">
              Create a web application using any technologies of choice for a chance to win a $50 Amazon gift card for your team. (Subject to change)
            </Card>
            <Card
              type={2}
              icon="phone"
              color="purple"
              heading="Best Mobile App"
            >
              Create a mobile application using any technologies of choice for a chance to win a $50 Amazon gift card for your team. (Subject to change)
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
            <Card type={2} icon="globe" color="navy" heading="Best Web App with Qoom Challenge">
              Sponsored by Qoom- Teams must use the Qoom platform to be eligible for this prize. The prizes include: • 1-year Pro Plan package (one per team)- This has a value of $140 • Feature on Qoom Project Gallery (https://www.qoom.io/projects)
            </Card>
          </div>
        </section>
        <section>
          <h2>Workshops</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Workshop
              title="Intro to HTML/CSS"
              hostName="Farhan Ashraf"
              hostPfp="https://github.com/ghost.png"
            >
              This workshop serves as an introduction to web development with
              HTML and CSS.
            </Workshop>
            <Workshop
              title="Intro to Figma"
              hostName="Raghav Poddar"
              hostPfp="https://cdn.discordapp.com/attachments/820189023384633344/862941798803963925/unknown.png"
            >
              Learn how to use Figma, a free design and prototyping software, to
              develop the UI for your project.
            </Workshop>
            <Workshop
              title="Intro to Git/GitHub"
              hostName="Dmytro Budym"
              hostPfp="https://cloud-17ec4f90s-hack-club-bot.vercel.app/0image__1_.jpeg"
            >
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
            <Workshop
              title="Intro to Python"
              hostName="Rebecca Wang"
              hostPfp="https://github.com/rebeccawang06.png"
            >
              This workshop serves as a basic introduction to python, a
              powerful, general-purpose programming language with a diverse
              range of applications.
            </Workshop>
            <Workshop
              title="Intro to AI &amp; ML"
              hostName="Shafin Haque"
              hostPfp="https://raw.githubusercontent.com/App-Dev-League/app-dev-league.github.io/main/assets/img/team/shafin.png"
            >
              This workshop will cover the basics of AI / Machine Learning
              focusing on machine learning models. After this workshop, you will
              be able to create a machine learning model to make a prediction.
            </Workshop>
            <Workshop
              title="Intro to App Dev"
              hostName="Kunal Jain"
              hostPfp="https://github.com/ghost.png"
            >
              The workshop is going to be a gentle introduction into MIT App
              Inventor. By the end, attendees will have developed a simple app
              and have set up an emulator to test apps in the future.
            </Workshop>
            <Workshop
              title="Intro to Machine Learning w/ Kobra"
              hostName="Benjamin Smith &amp; Pranav Teegavarapu"
              hostPfp="https://github.com/kobra-dev.png"
            >
              Learn the basics of ML using Kobra, a visual programming language
              for machine learning. By the end, you will be able to build and
              deploy your own model with Kobra.
            </Workshop>
          </div>
        </section>
        <section>
          <h2 className="pb-4">Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {Sponsors.map(({ logo, companyName, website }) => {
              return (
                <Sponsor
                  key={companyName}
                  logo={logo}
                  companyName={companyName}
                  website={website}
                />
              );
            })}
          </div>
        </section>

        <section>
          <h2>Team</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Person
              name="Risha Jhangiani"
              role="Lead Organizer."
              pronouns="she/her"
              src="https://github.com/rishadjhangiani.png"
            />
            <Person
              name="Marius Schaefer"
              role="Social Media."
              pronouns="he/him"
              src="https://github.com/marius-schaefer.png"
            />

            <Person
              name="Daniel Shubin"
              role="Sponsorships."
              pronouns="he/him"
              src="https://github.com/minimachines.png"
            />
            <Person
              name="Neta Shubin"
              role="Outreach."
              pronouns="she/her"
              src="https://github.com/minimachines.png"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
