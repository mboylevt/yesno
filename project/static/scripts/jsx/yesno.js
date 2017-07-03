var YesNoNick = React.createClass({
render: function() {
  return (<h2>Welcome to YesNo</h2>)
}
});

var PhotoBox = React.createClass({
render: function() {
  return (
    <span>I am a photo at this time</span>
  )
}
});

ReactDOM.render(
  <YesNoNick/>,
  document.getElementById('content')
);
ReactDOM.render(
  <PhotoBox/>,
  document.getElementById('photos')
);