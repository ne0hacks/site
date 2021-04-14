import { useEffect } from "react";
import HeadObject from "../components/head";
// import Nav from "../components/nav";
import Question from "../components/Question";
import Person from "../components/Person";

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
          <div>
            <Person
              name="Guillermo Rauch"
              role="Founder of Vercel."
              pronouns="he/him"
              src="https://lh3.googleusercontent.com/proxy/URpVZvntl_AYWBZhXQtfjdYdblBlFbIEWwfmEmORfqYVWdzPgRBovfvG9OaW1erSVznJWNjJsdCL2-JY46J8iTzOe45dKok"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
