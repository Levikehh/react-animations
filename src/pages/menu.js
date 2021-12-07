import * as React from "react";
import { useRef } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuToggle } from "./menutoggle";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import "../index.css";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

const data = [
  { title: "test title 1", count: 28 },
  { title: "test title 2", count: 321 },
  { title: "test title 3", count: 54 },
  { title: "test title 4", count: 1 },
  { title: "test title 5", count: 9 },
  { title: "test title 6", count: 654 },
];

/* const dataAnimationVariations = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
}; */
const dataAnimationVariations = {
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
  initial: {
    x: -100,
    opacity: 0,
  },
};

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <AnimatePresence>
        <DragDropContext>
          <Droppable droppableId="from">
            {(provided) => (
              <motion.div
                style={{ color: "#fff" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
                initial={{ y: -50 }}
                animate={{ y: 0 }}
              >
                {data.map(({ title, count }, index) => {
                  return (
                    <Draggable key={title} draggableId={title} index={index}>
                      {(provided) => (
                        <motion.div
                          className="testItem"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          initial="initial"
                          custom={index}
                          animate="animate"
                          variants={dataAnimationVariations}
                        >
                          <h1>{title}</h1>
                          <h3>{count}</h3>
                        </motion.div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </motion.div>
            )}
          </Droppable>
        </DragDropContext>
      </AnimatePresence>
    </>
  );
};
