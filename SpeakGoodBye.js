 (function(window) {
     var speakWord = "Good Bye";
     var byeSpeaker = { // byeSpeaker object with literal
         speak: function(name) { // speak method attached to function
             console.log(speakWord + " " + name);
         }
     };
     window.byeSpeaker = byeSpeaker; // Exposed to global scope
 })(window); //IEFE