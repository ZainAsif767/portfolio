import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Work.scss";
import { images } from "../../constants";

const works = [
  { name: "Homes", imgUrl: images.homesP, projectLink: "https://homes-gules.vercel.app/", codeLink: "https://github.com/ZainAsif767/homes", title: "Homes Angular App", description: "App built on AngularIO for practice purpose", tags: ['Angular'] },
  { name: "Bliss Textile", imgUrl: images.blissTextile, projectLink: "https://bliss-textile.vercel.app/", codeLink: "https://github.com/ZainAsif767/bliss_textile", title: "Bliss Textile Industry", description: "Web made on ReactJS for Bliss Textile", tags: ['React'] },
  { name: "Musab's Portfolio", imgUrl: images.Musab, projectLink: "https://musab-portfolio.vercel.app/", codeLink: "https://github.com/ZainAsif767/musab_portfolio", title: "Musab's Portfolio", description: "Portfolio Website made using ReactJS + Vite", tags: ['React'] },
  { name: "Tour of heroes", imgUrl: "", projectLink: "", codeLink: "https://github.com/ZainAsif767/tour-of-heroes", title: "Tour Of Heroes", description: "Angular web tutorial for practice purpose", tags: ['Angular'] },
  { name: "Filmpire", imgUrl: images.filmpire, projectLink: "https://filmpirex.netlify.app/", codeLink: "https://github.com/ZainAsif767/Filmpire", title: "Filmpire", description: "Movie application made using React, Alan AI, Redux toolkit", tags: ['React'] },
  { name: "Acadist", imgUrl: images.Acadist, projectLink: "", codeLink: "https://github.com/ZainAsif767/Acadist", title: "Acadist", description: "Acadist is a fullstack LMS app uses Postgres/Express for BE and React for FE", tags: ['React'] }
]
const Work = () => {
  // const [works, setWorks] = useState([]);
  // const [filterWork, setFilterWork] = useState([]);
  // const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  // const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);

  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);

  //     if (item === "All") {
  //       setFilterWork(works);
  //     } else {
  //       setFilterWork(works.filter((work) => work.tags.includes(item)));
  //     }
  //   }, 500);
  // };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      {/* <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div> */}

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
