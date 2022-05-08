import React from "react";
import Image from "next/image";

let date = new Date();

function About() {
  const project = {
    name: "Living Room Remodel",
    customer: "Joe Shmoe",
    description: "This project came out great! The Owner was Super Happy",
    finishDate: "July, 2022",
    price: 1500,
    city: "Corona",
    pictures: [
      {
        name: "front of the house",
        date: date.toDateString(),
        location: "Corona, Ca",
        url: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        name: "back of the house",
        date: date.getDate(),
        location: "Corona, Ca",
        url: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        name: "inside of the house",
        date: date.getDate(),
        location: "Corona, Ca",
        url: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ],
  };

  return (
    <div className="bg-slate-100">
      <h1 className="mt-4 pt-4 text-center text-3xl">Recent Projects</h1>
      <article className="relative my-4  xl:hover:mx-4 xl:hover:scale-110">
        <figure className="relative h-[30vh] w-full max-w-2xl rounded">
          <Image
            src={project.pictures[0].url}
            alt="house"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </figure>
        <figcaption className="font-anek text-slate-800">
          <h2 className="bg-slate-300 px-2 pt-2 text-xl font-bold">
            {project.name}
          </h2>
          <p className="truncate bg-slate-300 px-2 ">{project.description}</p>
          <p className="absolute bottom-8 right-0 bg-slate-300 px-2">
            {project.finishDate}
          </p>
          <p className="absolute top-0 left-0 border-b-4 border-r-4 border-slate-500 bg-slate-300 px-4 pt-2 text-xl">
            {project.city}
          </p>
        </figcaption>
      </article>
    </div>
  );
}

export default About;
