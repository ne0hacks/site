import { useEffect } from "react";
import Link from "next/link";
import HeadObject from "../components/head";
// import Nav from "../components/nav";
import Question from "../components/Question";
import Person from "../components/Person";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    console.log(
      "Made by Sarthak Mohanty. All Rights Reserved. Want to hire me? https://srtk.me"
    );
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      {/* <Nav /> */}
      <main>
        <section className="bg-navy m-0">
          <div className="p-12 md:p-24 flex flex-col space-y-5 md:pt-48 relative z-50">
            <h1 className="text-5xl md:text-8xl font-black text-white">
              NeoHacks
            </h1>
            <h3 className="font-fira text-white text-xl md:text-2xl w-2/3 md:w-full">
              June 25-27, 2021 • Virtual
            </h3>

            <Link>
              <button className="rounded-full bg-white font-inter text-base md:text-lg font-medium p-2 px-6">
                <a>Register</a>
              </button>
            </Link>
          </div>
          <img
            src="/cliff.svg"
            alt="cliff"
            className="-mt-52 md:-mt-72 w-full relative z-0"
          />
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
          <div></div>
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
