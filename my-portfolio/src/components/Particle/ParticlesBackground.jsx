import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // Load tsparticles options
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#0d47a1", // Replace with your desired background color
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5, width: 1 },
      collisions: { enable: true },
      move: { enable: true, speed: 2, direction: "none", random: false, outMode: "bounce" },
      number: { value: 80 },
      opacity: { value: 0.5 },
      size: { value: 5, random: true },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
