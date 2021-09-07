const responses = ["It is Certain.", 
                  "It is decidedly so.", 
                  "Without a doubt.", 
                  "Yes definitely.", 
                  "You may rely on it.", 
                  "As I see it, yes.",
                  "Most likely",
                  "Outlook good.",
                  "Yes.",
                  "Signs point to yes.",
                  "Reply hazy, try again.",
                  "Ask again later.",
                  "Better not tell you now.",
                  "Cannot predict now.",
                  "Concentrate and ask again.",
                  "Don't count on it.",
                  "My sources say no.",
                  "Outlook not so good.",
                  "Very doubtful.",
                  "My reply is no.",
                  "My sources say no."];

document.getElementById("69").addEventListener("click", () => {
  var randomChoice = Math.floor(Math.random() * responses.length);
  document.getElementById("420").innerText = responses[randomChoice];
});
