import React from 'react';
import './Team.css';
import teamPicture from '../Images/Team 2024.jpg'; // Adjust the path as needed

const Team = () => {
  return (
    <section id="team-section" className="team-section">
      <div id="team-marker"></div>
      <h1 className="section-title">TEAM</h1>
      <img
        src={teamPicture}
        alt="Team"
        className="team-picture"
      />
      <h2>2024 Team Roster</h2>
      <div className="roster content-container">
        <div className="forwards">
          <h3>Forwards</h3>
          <p>ALEJANDRO RUIZ</p>
          <p>JIM RIFF</p>
          <p>JUUSO KATAJA</p>
          <p>ERIC NYBLOM</p>
          <p>JOHN HELENIUS</p>
          <p>AKSELI PELTONIEMI (C)</p>
          <p>OTTO ÅKERBERG</p>
          <p>GLENN KRISTJANKROON</p>
          <p>MARKO SALLERT</p>
          <p>TUOMAS UURINMÄKI</p>
          <p>TOMMI PAAVILAINEN</p>
          <p>PETTER LARSEN</p>
          <p>STEFAN ROGERS</p>
        </div>
        <div className="backs">
          <h3>Backs</h3>
          <p>ARI GALI VALLS</p>
          <p>JARKKO TUORESMÄKI</p>
          <p>TARAS LIUSH</p>
          <p>WIREMU RAHUI</p>
          <p>JAY ROBINSON</p>
          <p>DANIEL KERR</p>
          <p>JURI PODSCHIVALOW</p>
          <p>NICO LAURLA</p>
          <p>SAMU-PETTERI PÄÄKKÖ (VC)</p>
          <p>TOMMI GALI VALLS</p>
          <p>SHANE BREEN</p>
          <p>ILARI KOKKONEN</p>
          <p>MARKUS WINBERG</p>
          <p>ROBBIE STERLING</p>
          <p>ALEXANDER BANNATYNE</p>
          <p>JEMI OLANDER</p>
        </div>
      </div>
      <div className="coaches">
        <p>Marko Sallert <strong>HEAD COACH</strong></p>
        <p>Linus Backman <strong>BACKS COACH</strong></p>
      </div>
    </section>
  );
};

export default Team;