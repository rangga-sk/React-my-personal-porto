import { useState } from 'react';
import '../style/workexperience.css'
import { motion, AnimatePresence } from 'framer-motion';

function WorkExperience ({dataExperience}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRole = dataExperience.data[activeIndex];
  let x1 = -50;
  let x2 = 50;

  return (
    <div className="bg-lime-200 wrap-experience" id='halExp'>
      {/* Tabs */}
      <div className="containerHeadJob">
        {dataExperience.data.map((role, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`btn-experience transition duration-300 ${
              index === activeIndex ? "activeDivExp" : ""
            }`}
          >
            {index === activeIndex ? (
              <div>
                <span>{role.judul}</span>
              </div>
            ) : (
            <div>
              <span>{role.judul}</span>
            </div>
            )}
          </div>
        ))}
      </div>

      {/* Content Box */}
      <div className="contentExp">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: x1 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: x2 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{activeRole.judul}</h2>
            <p>{activeRole.date_range}</p>
            <p>{activeRole.desc}</p>
              <div className='divListSkillExp'>
                {activeRole.skills.map((tag, i) => (
                  <span
                    key={i}
                    className="listSkillExp"
                  >
                    {tag}
                  </span>
                ))}
              </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorkExperience;
