import { useEffect } from "react";
import Link from "next/link";
import HeadObject from "../components/head";
import { motion } from "framer-motion";
import Question from "../components/Question";
import Person from "../components/Person";
import Footer from "../components/Footer";
// import Prize from "../components/Prize";
import Workshop from "../components/Workshop";
import Sponsor from "../components/Sponsor";
import Card from "../components/Card";
// import Announcement from "../components/Announcement";

const Sponsors = [
  {
    companyName: "Sticker Mule",
    logo: "/logos/sticker-mule-logo-light-bg.svg",
    website: "https://www.stickermule.com/",
  },
];

export default function Home() {
  useEffect(() => {
    console.log("Sign up for NeoHacks!");
  });

  return (
    <div>
      <HeadObject />
      <main>
        <section className="m-0 bg-navy">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-50 flex flex-col p-12 pb-16 space-y-5 md:p-24 md:pt-48"
          >
            <h1 className="text-5xl font-black text-white md:text-8xl font-ramona">
              NeoHacks
            </h1>
            <h3 className="w-2/3 text-xl text-white font-fira md:text-2xl md:w-full">
              August 6-7th, 2022 &middot; Hybrid
            </h3>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 px-6 text-base font-medium bg-white rounded-full font-inter md:text-lg w-min"
            >
              <Link href="/register">Register</Link>
            </motion.button>
          </motion.div>
          <img
            src="/cliff.svg"
            alt="cliff"
            className="relative z-0 w-full md:-mt-64 -mt-60"
          />
        </section>
        <section>
          <h2 className="pb-4 md:leading-loose md:pb-0">
            Welcome to <span className="font-ramona text-navy">NeoHacks</span>!
          </h2>
          <p className="text-lg ">
            NeoHacks is a 36-hour hackathon taking place on August 6th to 7th where
            hundreds of students from around the world will come together
            virtually and in person to learn new skills, meet new friends, and build awesome
            projects. We provide beginner-friendly workshops, mentorship, fun
            games, and more.
          </p>
        </section>
        <section>
          <h2>FAQ</h2>
          <div className="grid grid-cols-1 gap-10 mt-4 md:grid-cols-2">
            <Question title="Where is this held?">
              NeoHacks is a hybrid hackathon. The in-person event will take
              place in Seattle, Washignton. Location TBD. Participants may also
              join us virtually on Discord from anywhere in the world.
            </Question>
            <Question title="What is a hackathon?">
              A hackathon is a great place to learn new skills, make new
              friends, and have fun. By the end of the hackathon, you will have
              turn in a project for feedback from judges.
            </Question>
            <Question title="Who is eligible to participate?">
              This hackathon is all high school students. We highly encourage
              beginners to participate!
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
          <h2>Prize Tracks</h2>
          <div className="grid grid-cols-1 gap-10 mt-4 md:grid-cols-2">
            <Card type={2} icon="star" color="orange" heading="Best Overall">
              Every project submitted will be entered in this category.
            </Card>
            <Card type={2} icon="pencil" color="red" heading="Most Creative">
              Make your wildest ideas a reality and earn the Most Creative prize!
            </Card>
            <Card type={2} icon="globe" color="blue" heading="Best Web App">
              Create a web application using any technologies of choice. The best web app will win the Best Web App prize!
            </Card>
            <p className="text-lg">
            More prize categories will be announced closer to the event along with prizes for each category!
            </p>
          </div>
        </section>
        {/* <section>
          <h2>Workshops</h2>
          <div className="grid grid-cols-1 gap-10 mt-4 md:grid-cols-2">
            <Workshop
              title="Intro to HTML/CSS"
              hostName="Farhan Ashraf"
              hostPfp="https://ca.slack-edge.com/T0266FRGM-U01UJAYQBL0-2219100ca9ee-512"
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
              hostPfp="https://github.com/rbccwang.png"
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
        </section> */}

        {/* <section>
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
        </section> */}

        <section>
          <h2>Team</h2>
          <div className="grid grid-cols-1 gap-10 mt-4 md:grid-cols-2">
            <Person
              name="Risha Jhangiani"
              role="Lead Organizer."
              pronouns="she/her"
              src="https://github.com/rishadjhangiani.png"
            />
            <Person
              name="Marius Schaefer"
              role="Finance."
              pronouns="he/him"
              src="https://github.com/marius-schaefer.png"
            />
            <Person
              name="Daniel Shubin"
              role="Marketing."
              pronouns="he/him"
              src="https://github.com/minimachines.png"
            />
            <Person
              name="Neta Shubin"
              role="Hacker Experience."
              pronouns="she/her"
              src="https://github.com/minimachines.png"
            />
            <Person
              name="Victor Demunck"
              role="Finance."
              pronouns=""
              src="https://ca.slack-edge.com/T0391D4LXF1-U039KNJFFPD-298f0625fbad-512"
            />
            <Person
              name="Alejandro AB"
              role="Marketing."
              pronouns=""
              src="https://ca.slack-edge.com/T0391D4LXF1-U03A8G7CF5W-e880107dfe2a-512"
            />
            <Person
              name="Carter Oxford"
              role="Logistics."
              pronouns=""
              src="https://ca.slack-edge.com/T0391D4LXF1-U039W7CJTLL-11c5f9e6cccc-512"
            />
            <Person
              name="Bai Xue"
              role="Finance."
              pronouns=""
              src="https://ca.slack-edge.com/T0391D4LXF1-U039FB5AHMK-2d26f9e8e824-512"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
