// Generated by CoffeeScript 1.3.1
(function() {

  $(document).on('selectstart', function() {
    return false;
  }).on('ready', function() {
    window.loader = new LoaderWidget();
    loader.message('Downloading');
    window.app = new Euphony();
    app.initScene();
    return app.initMidi(function() {
      return app.loadBuiltinPlaylist(function(playlist) {
        window.player = new PlayerWidget('#player');
        player.setPlaylist(playlist);
        player.on('pause', app.pause);
        player.on('resume', app.resume);
        player.on('stop', app.stop);
        player.on('play', app.start);
        player.on('setprogress', app.setProgress);
        player.on('settrack', function(trackId) {
          if (!((0 <= trackId && trackId < playlist.length))) {
            return;
          }
          return loader.message('Loading MIDI', function() {
            return app.loadBuiltinMidi(trackId, function() {
              return loader.stop(function() {
                return player.play();
              });
            });
          });
        });
        app.on('progress', player.displayProgress);
        return player.show(function() {
          var candidates, hash, id;
          hash = window.location.hash.slice(1);
          if (hash) {
            return player.setTrack(parseInt(hash, 10) - 1);
          } else {
            candidates = [3, 5, 6, 7, 10, 11, 12, 13, 14, 16, 19, 30];
            id = Math.floor(Math.random() * candidates.length);
            return player.setTrack(candidates[id]);
          }
        });
      });
    });
  });

}).call(this);
