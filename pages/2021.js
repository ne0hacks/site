import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import HeadObject from "../components/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/nav";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const countryData = {
  labels: [
    "India",
    "Indonesia",
    "United States",
    "Singapore",
    "Canada",
    "Other",
  ],
  datasets: [
    {
      label: "# of registered hackers",
      data: [177, 5, 132, 5, 33, 29],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const skillData = {
  labels: [
    "Never coded",
    "A bit of experience",
    "Taken a coding class",
    "Attended a hackathon",
    "Self proclaimed expert",
  ],
  datasets: [
    {
      label: "Hackers",
      data: [70, 154, 82, 64, 13],
      backgroundColor: "rgba(23, 57, 124, 0.5)",
    },
  ],
};

const RecapPage = () => {
  return (
    <>
      <HeadObject />
      <main>
        <Nav />
        <section>
          <h1 className="pb-8 text-7xl font-ramona">NeoHacks I Recap</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="card">
              <p className="pb-4">
                In 2021, we had 381 hackers from 26 different countries register
                for the event. See the country breakdown below.
              </p>
              <article className="mx-auto w-96">
                <Pie data={countryData} />
              </article>
            </div>
            <div className="card">
              <p className="pb-8">
                Most people who registered were beginners in coding. During the
                event, we hosted 12 beginner-oriented workshops to provide
                inspiration for projects.
              </p>
              <article className="mx-auto w-96">
                <Bar data={skillData} />
              </article>
              <p className="pt-8">
                At the end of the weekend, we had a total of 37 amazing projects
                submitted through{" "}
                <Link
                  href="https://neo-hacks.devpost.com/project-gallery"
                  passHref
                >
                  <a className="text-gray-500 hover:underline">Devpost</a>
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
        <section>
          <p className="max-w-3xl mx-auto text-2xl text-center">
            Thanks to everyone who attended, volunteered, or otherwise
            contributed their time to help make NeoHacks possible! ✨
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default RecapPage;
