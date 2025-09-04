import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold px-4 sm:px-0">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:hidden left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-[500px] p-4 sm:p-6 lg:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-32 lg:ml-44 sm:mr-32 lg:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* School Logo/Image */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between flex-grow min-w-0">
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300 mt-1">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
