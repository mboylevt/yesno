var models = [
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"One", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Two", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Three", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Four", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Five", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Six", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Seven", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Eight", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Nine", "category":"jewelry"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Ten", "category":"jewelry"},
];

var GLOBAL_YES = "yes";
var GLOBAL_NO = "no";

var PhotoBox = React.createClass({

  getInitialState: function () {
    return {
      clicks: 0,
      yes: 0,
      no: 0,
      percent: 0,
    }
  },

  onLabelChanged: function(e) {
      this.setState({clicks: this.state.clicks+1});
      console.log("Clicked on " + e.currentTarget.id);
      e.currentTarget.setAttribute("checked", "true");
      switch(e.currentTarget.value) {
        case "yes":
          document.getElementById(e.currentTarget.name + "-no").removeAttribute("checked");
          break;
        case "no":
          document.getElementById(e.currentTarget.name + "-yes").removeAttribute("checked");
          break;
      }

      var yesCount = 0;
      var noCount = 0;
      document.querySelectorAll('[checked=true]').forEach(
        function(title) {
          if(title.id.includes("-yes")) {
            yesCount++;
          }
          else {
            noCount++;
          }
        }
      );
      this.setState({
        clicks: this.state.clicks+1,
        yes: yesCount,
        no: noCount,
        percent: (yesCount/(yesCount+noCount))*100,
      })
  },

  render: function() {
    var self = this;
    var modelMap = models.map(function(model){
       var localMap = <div className="image-container">
          <img src={model.url} />
          <p className="titletext"> Title: {model.title} </p>
          <p className="titletext"> Category: {model.category} </p>
          <form>
              <div className="cboxes">
                <label><input
                        type="radio"
                        id={model.title + "-yes"}
                        name={model.title}
                        value="yes"
                        onClick={self.onLabelChanged} />Yes</label>
                <label><input
                        type="radio"
                        id={model.title + "-no"}
                        name={model.title}
                        value="no"
                        onClick={self.onLabelChanged} />No</label>
              </div>
          </form>
        </div>
        return localMap});
    return (
      <div>
          <div className="stateReport">
            yes: {this.state.yes}            no: {this.state.no}            percent: {this.state.percent.toFixed(0)}% accurate
          </div>
          <div>
              {modelMap}
          </div>
      </div>
    )
  }
});


ReactDOM.render(
  <PhotoBox/>,
  document.getElementById('photos')
);
