//var redux = require("redux");
//
//
//function updateCounter(state, action) {
//    switch(action.type) {
//        case "YES":
//            return state+1;
//        case "NO":
//            return state-1;
//        default:
//            return 0;
//    }
//    return state;
//}
//
//var store = redux.createStore(updateCounter);
//store.subscribe( function() {
//    console.log(store.getState()); });

var models = [
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"One"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Two"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Three"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Four"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Five"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Six"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Seven"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Eight"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Nine"},
  {"url": "http://www.javeacasas.com/images/javea-property.jpg", "title":"Ten"},
];

var PhotoBox = React.createClass({

    onLabelChanged: function(e) {
        console.log("Changed!");
    },

    render: function() {
      var self = this;
      var modelMap = models.map(function(model){
         var localMap = <div className="image-container">
            <img src={model.url} />
            <p className="photo-title"> {model.title} </p>
            <form>
                <div className="cboxes">
                  <label><input
                          type="radio"
                          name={model.title}
                          onChange={self.onLabelChanged} />Yes</label>
                  <label><input
                          type="radio"
                          name={model.title}
                          onChange={self.onLabelChanged} />No</label>
                </div>
            </form>
          </div>
          return localMap});
      return (
        <div>
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
