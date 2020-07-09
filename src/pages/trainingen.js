import React from "react";
import PageLayout from "../components/page-layout";

const IndexPage = () => (
  <PageLayout title="Trainingen">
    <section>
      <h2 className="text-lg font-semibold">Jeugd</h2>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <h3 className="font-semibold">U8</h3>
          <ul>
            <li className="mt-2">Woensdag: 17:00 - 18:00</li>
            <li className="mt-2">Zondag: 08:30 - 09:30</li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">U10</h3>
          <ul>
            <li className="mt-2">Woensdag: 17:00 - 18:00</li>
            <li className="mt-2">Zondag: 08:30 - 09:30</li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">U12</h3>
          <ul>
            <li className="mt-2">Woensdag: 17:00 - 18:00</li>
            <li className="mt-2">Donderdag: 17:45 - 18:45</li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">U14</h3>
          <ul>
            <li className="mt-2">Woensdag: 18:00 - 19:00</li>
            <li className="mt-2">Donderdag: 17:45 - 18:45</li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">U16</h3>
          <ul>
            <li className="mt-2">Woensdag: 18:00 - 19:00</li>
            <li className="mt-2">Donderdag: 17:45 - 18:45</li>
          </ul>
        </li>
      </ul>
    </section>
    <section className="mt-8">
      <h2 className="text-lg font-semibold">Senioren</h2>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <h3 className="font-semibold">Divisie 2</h3>
          <ul>
            <li className="mt-2">Dinsdag: 21:15 - 22:15</li>
            <li className="mt-2">Donderdag: 20:45 - 21:45</li>
          </ul>
        </li>

        <li>
          <h3 className="font-semibold">Dinoz</h3>
          <ul>
            <li className="mt-2">Maandag: 21:15 - 22:15</li>
            <li className="mt-2">Donderdag: 22:00 - 23:00</li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">ijshockij Hasselt</h3>
          <ul>
            <li className="mt-2">Woensdag: 22:15 - 23:15</li>
          </ul>
        </li>
      </ul>
    </section>
    <section className="mt-8">
      <h2 className="text-lg font-semibold">Andere</h2>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <h3 className="font-semibold">Rookies</h3>
          <ul>
            <li className="mt-2">Zondag: 08:30 - 09:30</li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">Goalies</h3>
          <ul>
            <li className="mt-2">Zondag: 08:30 - 09:30</li>
          </ul>
        </li>
      </ul>
    </section>
  </PageLayout>
);

export default IndexPage;
