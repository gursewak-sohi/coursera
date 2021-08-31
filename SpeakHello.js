 (function(window) {
     var speakWord = "Hello";
     var helloSpeaker = { // helloSpeaker object with literal
         speak: function(name) { // speak method attached to function
             console.log(speakWord + " " + name);
         }
     };
     window.helloSpeaker = helloSpeaker; // Exposed to global scope
 })(window); //IEFE