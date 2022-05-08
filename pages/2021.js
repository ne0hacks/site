import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import HeadObject from "../components/head";

ChartJS.register(ArcElement, Tooltip, Legend);

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

const RecapPage = () => {
  return (
    <>
      <HeadObject />
      <main>
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
              <p>
                In 2021, we had 381 hackers from 26 different countries register
                for the event. See the country breakdown below.
              </p>
              <article className="mx-auto w-96">
                <Pie data={countryData} />
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default RecapPage;
