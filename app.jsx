let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = (props) => {
  let totalScore = props.players.map(e => e.score).reduce((a, b) => { return a + b });
  return (
    <div>
      <header className='header'>
        <table className='stats'>
          <tbody>
            <tr><td>PLAYERS:</td><td>{props.players.length}</td></tr>
            <tr><td>TOTAL POINTS:</td><td>{totalScore}</td></tr>
          </tbody>
        </table>
        <div className='stopwatch'>
          <h2>STOPWATH</h2>
          <p className='stopwatch-time'>0</p>
          <button>START</button>
          <button>RESET</button>
        </div>
      </header>
    </div>
  )
}
const PlayerList = (props) => {
  return (
    <div>
      {
        props.players.map((value, index) => {
          return (
            
              <div key={index} className="player player-name">{value.name}
                <div className="player-score">
                  <button className="counter counter-action decrement">-</button>
                  <span className="counter-score">{value.score}</span>
                  <button className="counter counter-action increment">+</button>
                </div>
              </div>
            
          )
        })
      }
    </div>
  )
}
const PlayerForm = () => {
  return(
    <div className="add-player-form">
      <form>
        <input type="text" placeholder="ENTER TO NAME"/>
        <input type="submit" value="ADD PLAYER"/>
      </form>
    </div>
  )
}



const Application = ({ title, players }) => {
  return (
    <div className='scoreboard'>
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(
  <Application title="Scoreboard" players={PLAYERS} />,
  document.getElementById('container')
);