import type { Project } from "../types/ProjectType";

export const projects: Project[] = [
  {
    id: 1,
    title: "Cadesto Fastigheter",
    description:
      "Cadesto är ett fastighetsbolag som fokuserar på arr erbjuda moderna och hållbara bostäder. Webbplatsen är designad och byggd från grunden utifrån företagets kravspec med teknologier såsom Next.js, Tailwind och Sanity.",
    link: {
      url: "https://www.cadestofastigheter.se/",
      text: "Besök sidan här",
    },
    image: "/portfolio/cadesto_mockup.webp",
  },
  {
    id: 2,
    title: "Rick & Morty App",
    description:
      "En mobilapp byggd med React Native, Expo Router och TypeScript. Appen låter användare bläddra bland karaktärer från serien Rick & Morty, se detaljer, spara favoriter och söka/filtera karaktärer.",
    link: {
      url: "https://github.com/lisa-desousa/rick_and_morty_app",
      text: "GitHub-repo",
    },
    image: "/portfolio/rick_morty_mockup.webp",
  },
  {
    id: 3,
    title: "DogApp",
    description:
      "DogApp är en fullstack-applikation byggd med bl.a. React, Express och MySQL. Applikationen gjordes som ett grupparbete med syfte att utveckla samarbetsförmåga och agil metodik.",
    link: {
      url: "https://dog-app-thwi.vercel.app/",
      text: "Besök sidan här",
    },
    image: "/portfolio/dogapp_mockup.webp",
  },
  {
    id: 4,
    title: "Backend med Express",
    description:
      "Databasdesign och backend-utveckling med Express och MySQL. Projektet utgick från kunskapsdomänen 'Biograf' och syftade till att skapa ett REST-API som hanterar data relaterat till filmer, salonger och visningar.",
    link: {
      url: "https://github.com/lisa-desousa/f25d_backend_slutprojekt",
      text: "GitHub-repo",
    },
    image: "/portfolio/backend.webp",
  },
];
