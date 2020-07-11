import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import PageLayout from "../components/page-layout";

const PRACTICES = [
  {
    title: "Jeugd",
    groups: [
      {
        name: "U8",
        practices: [
          { day: "Woensdag", time: "17:00 - 18:00" },
          { day: "Zondag", time: "08:30 - 09:30" },
        ],
      },
      {
        name: "U10",
        practices: [
          { day: "Woensdag", time: "17:00 - 18:00" },
          { day: "Zondag", time: "08:30 - 09:30" },
        ],
      },
      {
        name: "U12",
        practices: [
          { day: "Woensdag", time: "17:00 - 18:00" },
          { day: "Donderdag", time: "17:45 - 18:45" },
        ],
      },
      {
        name: "U14",
        practices: [
          { day: "Woensdag", time: "18:00 - 19:00" },
          { day: "Donderdag", time: "17:45 - 18:45" },
        ],
      },
      {
        name: "U16",
        practices: [
          { day: "Woensdag", time: "18:00 - 19:00" },
          { day: "Donderdag", time: "17:45 - 18:45" },
        ],
      },
    ],
  },
  {
    title: "Senioren",
    groups: [
      {
        name: "Divisie 2",
        practices: [
          { day: "Dinsdag", time: "21:15 - 22:15" },
          { day: "Donderdag", time: "20:45 - 21:45" },
        ],
      },
      {
        name: "Dinoz",
        practices: [
          { day: "Maandag", time: "21:15 - 22:15" },
          { day: "Donderdag", time: "22:00 - 23:00" },
        ],
      },
      {
        name: "ijshockij Hasselt",
        practices: [{ day: "Woensdag", time: "22:15 - 23:15" }],
      },
    ],
  },
  {
    title: "Andere",
    groups: [
      {
        name: "Rookies",
        practices: [{ day: "Zondag", time: "08:30 - 09:30" }],
      },
      {
        name: "Goalies",
        practices: [{ day: "Zondag", time: "08:30 - 09:30" }],
      },
    ],
  },
];

const Trainingen = () => (
  <PageLayout title="Trainingen">
    {PRACTICES.map(({ title, groups }, index) => (
      <section key={title} className={index === 0 ? null : "mt-8"}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ name, practices }) => (
            <li key={name}>
              <h3 className="font-semibold">{name}</h3>
              <ul>
                {practices.map(({ day, time }) => (
                  <li key={`${day}${time}`} className="mt-2 flex items-baseline">
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      fixedWidth
                      className="mr-2 text-royal-500"
                    />
                    <span className="w-24 mr-2">{day}:</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    ))}
  </PageLayout>
);

export default Trainingen;
