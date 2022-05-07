require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "dark-gray",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"001215337f694fb4a44264582520d507" 
        }
      });
      
      var camera = new Camera({
        position: [
          87.5668, // lon
          43.8429, // lat
          5000// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
          x: 116.4125,
          y: 39.8953,
          z: 5000
        },
        tilt: 80,
        heading: 270
      })
      
      var camera3 = new Camera({
        position: {
          x: -90.1905,
          y: 38.6302,
          z: 5000
        },
        tilt: 80,
        heading:270
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [v1,v2,v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
      
      
   
    v1.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    v2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
      
      v3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
       position: {
          x: -71.0096,
          y: 42.3675,
          z: 5000
        },
        tilt: 80,
        heading:270
      });
    });


    });
