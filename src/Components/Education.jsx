import { useState, useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { motion } from "framer-motion";
import "./education.css";

export default function Education() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row lg:gap-8 flex-wrap w-full h-full p-2"
    >
      <div className="flex-1 flex flex-row flex-wrap-reverse order-2 lg:order-1 rounded-lg p-1 backdrop-blur-sm my-[140px] lg:my-auto">
        {/* Changed max-w-6xl to max-w-7xl to increase width */}
        <div className="text-white max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl mt-15 hover:rotate-6 duration-300 font-bold mb-10 text-center text-red-400">
              Education Timeline
            </h1>

            <Timeline position="alternate" className="w-full">
              {[
                {
                  year: "2024 - Present",
                  degree: "Master of Computer Applications",
                  institution: "Vellore Institute of Technology",
                  location: "Vellore, Tamil Nadu",
                },
                {
                  year: "2021 - 2024",
                  degree: "Bachelor of Computer Applications",
                  institution: "Techno India Kolkata",
                  location: "Kolkata, West Bengal",
                },
                {
                  year: "2019 - 2021",
                  degree: "Higher Secondary and Secondary Education",
                  institution: "Hariyana Vidya Mandir",
                  location: "Kolkata, West Bengal",
                },
              ].map((item, index) => (
                <TimelineItem key={index} className="my-8">
                  <TimelineOppositeContent
                    sx={{
                      padding: "6px 16px",
                      fontSize: "1.2rem", // Equivalent to text-4xl (36px)
                      "& .MuiTimelineOppositeContent-root": {
                        fontSize: "inherit", // Ensures the size applies properly
                      },
                    }}
                  >
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {item.year}
                    </motion.div>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <TimelineDot
                        sx={{
                          backgroundColor: "#f87171",
                          width: 20,
                          height: 20,
                          boxShadow: "0 0 10px rgba(248, 113, 113, 0.7)",
                        }}
                      />
                    </motion.div>
                    {index !== 3 && (
                      <TimelineConnector
                        sx={{
                          height: 100,
                          backgroundColor: "rgba(255,255,255,0.2)",
                          width: 2,
                        }}
                      />
                    )}
                  </TimelineSeparator>

                  <TimelineContent sx={{ padding: "12px 16px" }}>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="p-6 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                    >
                      <h2 className="text-red-400 text-2xl font-bold mb-2">
                        {item.degree}
                      </h2>
                      <div className="text-xl">
                        <p className="font-medium">{item.institution}</p>
                        <p className="text-gray-400">{item.location}</p>
                      </div>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
