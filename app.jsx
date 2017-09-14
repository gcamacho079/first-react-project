


function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}

function Player(props) {
  return (

  )
}

function Application(props) {
  return (
    <Header title={props.title}/>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
}

Application.defaultProps = {
  title: "Camper Leaderboard"
}

ReactDOM.render(<Application />, document.getElementById('container'));
