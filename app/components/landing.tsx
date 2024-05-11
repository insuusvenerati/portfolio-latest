import { Link } from "@remix-run/react";
import { projects, works } from "~/experience";

type WorkExperienceProps = {
  title: string;
  company: string;
  date: string;
  duties: string[];
};

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

function WorkExperience({ title, company, date, duties }: WorkExperienceProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold"> {title} </h3>
      <p className="text-gray-500 dark:text-gray-400">
        {company} | {date}
      </p>
      <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
        {duties.map((duty, index) => (
          <li key={index}> {duty} </li>
        ))}
      </ul>
    </div>
  );
}

function Project({ title, description, image, url }: ProjectProps) {
  return (
    <Link className="group" to={url}>
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          height={300}
          src={image}
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold group-hover:underline">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </Link>
  );
}

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="py-20 px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sean Norwood
          </h1>
          <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            I do scalable front-end web development (ReactJS) and backend rest / graphql API
            development (JS/ TS) using Postgresql or Mongodb. Developing Docker and Kubernetes
            deployments for development, QA, and production environments on platforms including
            Digital Ocean, Civo, and bare-metal. QA engineering, CI/CD pipeline development, release
            strategy development, and integration engineering.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              {works.map((work, index) => (
                <WorkExperience key={index} {...work} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MailboxIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <a
                  className="text-gray-500 dark:text-gray-400 hover:underline"
                  href="mailto:norwood.sean@gmail.com">
                  norwood.sean@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <a
                  className="text-gray-500 dark:text-gray-400 hover:underline"
                  href="tel:8506370332">
                  8506370332
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <GlobeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <a
                  className="text-gray-500 dark:text-gray-400 hover:underline"
                  href="https://stiforr.tech">
                  https://stiforr.tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MailboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
