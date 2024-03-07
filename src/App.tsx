import React from 'react';
import './App.css';
import bballJson from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// Welcome function that introduces the user to what the site is
function Welcome() {
  return (
    <div>
      <h1>Welcome to the NCAA College Basketball Extravaganza!</h1>
      <p>
        To prepare for March Madness, below is list of all the NCAA college
        basketball teams, their mascots, and locations.
      </p>
    </div>
  );
}

// #2: A team “card” that contains information about each school:
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <p>
          <h2>{oneTeam.school}</h2>
          <h4>Mascot: {oneTeam.name}</h4>
          <h4>
            Location: {oneTeam.city}, {oneTeam.state}
          </h4>
        </p>
      </div>
    );
  }
}

function TeamList() {
  // #3: A list of team cards that shows all the teams on the list.
  return (
    <div className="team-list">
      {bballJson.teams.map((team) => (
        <Team key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
