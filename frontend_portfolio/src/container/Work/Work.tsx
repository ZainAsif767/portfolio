/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Variants, motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { data as cardData } from "./data";
import "./Work.scss";
import { urlFor, client } from "../../client";

interface Work {
  imgUrl: string;
  name: string;
  projectLink?: string;
  codeLink: string;
  title: string;
  description: string;
  tags: string[];
}

interface AnimationProperties {
  y: number;
  opacity: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1, // Each card delays a bit longer than the previous one
    },
  }),
};

const Work = () => {
  const [works, setWorks] = useState<Work[]>(cardData);
  const [filterWork, setFilterWork] = useState(cardData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  const [animateCard, setAnimateCard] = useState<AnimationProperties[]>([
    { y: 0, opacity: 1 },
  ]);
  const [showItems, setShowItems] = useState(3);
  const initialItemsToShow = 3;

  const handleLoadMore = () => {
    setShowItems(showItems + 6);
  };

  const handleShowLess = () => {
    setShowItems(initialItemsToShow);
  };

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    const allTags = new Set<string>();
    works.forEach((work) => {
      work.tags.forEach((tag) => allTags.add(tag));
    });
    const tagsArray = ["All", ...allTags];
    setFilterOptions(tagsArray);
  }, [works]);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {filterOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard.length > -3 ? "visible" : undefined}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.slice(0, showItems).map((work, index) => (
          <motion.div
            className="app__work-item app__flex"
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
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
                  {work.projectLink && (
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  )}
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
          </motion.div>
        ))}
      </motion.div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {showItems < cardData.length && (
          <button onClick={handleLoadMore} className="show-more-btn">
            Show More...
          </button>
        )}
        {showItems > initialItemsToShow && (
          <button onClick={handleShowLess} className="show-less-btn">
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
