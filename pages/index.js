import { useEffect } from "react";
import Link from "next/link";
import HeadObject from "../components/head";
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
          <div className="p-12 md:p-24 flex flex-col space-y-5 md:pt-48 relative z-50">
            <h1 className="text-5xl md:text-8xl font-black text-white font-ramona">
              NeoHacks
            </h1>
            <h3 className="font-fira text-white text-xl md:text-2xl w-2/3 md:w-full">
              June 25-27, 2021 • Virtual
            </h3>

            <button className="rounded-full bg-white font-inter text-base md:text-lg font-medium p-2 px-6 w-min">
              <Link href="/">
                <a>Register</a>
              </Link>
            </button>
          </div>
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
            games, and more.
          </p>
        </section>
        <section>
          <h2>FAQ</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Question title="Where is this held?">
              Lorem ipsum dolor sit amet. Snapchat HQ. It’s a dummy place which
              has no real value for anybody that lives in or around it.
            </Question>
            <Question title="Where is this held?">
              Lorem ipsum dolor sit amet. Snapchat HQ. It’s a dummy place which
              has no real value for anybody that lives in or around it.
            </Question>
            <Question title="Where is this held?">
              Lorem ipsum dolor sit amet. Snapchat HQ. It’s a dummy place which
              has no real value for anybody that lives in or around it.
            </Question>
            <Question title="Where is this held?">
              Lorem ipsum dolor sit amet. Snapchat HQ. It’s a dummy place which
              has no real value for anybody that lives in or around it.
            </Question>
            <Question title="Where is this held?">
              Lorem ipsum dolor sit amet. Snapchat HQ. It’s a dummy place which
              has no real value for anybody that lives in or around it.
            </Question>
            <Question title="Where is this held?">
              Lorem ipsum dolor sit amet. Snapchat HQ. It’s a dummy place which
              has no real value for anybody that lives in or around it.
            </Question>
          </div>
        </section>
        <section>
          <h2>Prizes</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Prize icon="/star.svg" title="Best Overall">
              You'll each win a Google Home Mini. (Up to 4 team members)
            </Prize>
          </div>
        </section>
        <section>
          <h2>Workshops</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Workshop title="Intro to Web Dev">
              This workshop serves as an introduction to web development with
              HTML and CSS.
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
          <h2>Judges</h2>
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
          </div>
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
              role="Nobody."
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
