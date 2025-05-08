import React from "react";
import hireMe from "../assets/images/newHireMe1.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg: text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          If you're in search of Fullstack development, UI/UX design, and Quality Assurance services, feel free to reach out to me. I specialize in full-stack development, crafting intuitive user interfaces, and ensuring high-quality, bug-free applications. With hands-on experience in manual testing, UI testing, and test case writing, I can help ensure your product's reliability and smooth performance. Let's collaborate to build robust, user-friendly web applications and maintain top-notch quality throughout the development process. Explore my portfolio and get in touch to discuss how we can bring your projects to life. Let’s create exceptional digital experiences together!
          </p>
          <a href="#contact">
            <button className="btn-primary mt-10">Say Hello</button>
          </a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
