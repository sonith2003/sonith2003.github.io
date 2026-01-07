import React from "react";
const skills = [
  "HTML5", "CSS3", "JavaScript", "React.js", 
  "Git", "GitHub", "Responsive Design", "Bootstrap", "REST APIs", "VS Code"
];
export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}