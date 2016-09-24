module.exports = function(bot) {
  // bot.hear(/test/, function(res) {
  //   return res.send("The better bot is running!");
  // });
  // bot.hear(/Hello!/, function(res) {
  //   return res.send("Sup")
  // });
  // bot.hear(/hubot/i, function(res) {
  //   return res.send("Will the real hubot please stand up?")
  // });
  // bot.respond(/What's your favorite food?/, function(res) {
  //   return res.send("Computer Chips!");
  // });

  // Palindorme
  bot.respond(/Is (.*) a palindrome?/i, function(msg) {
    var word;
    word = msg.match[1];
    var reversedWord = word.split('').reverse().join('');
    if(word === reversedWord) {
      return msg.reply("Yes! " + word.toUpperCase() + " is a palindrome!");
    } else {
      return msg.reply("Umm... " + word.toUpperCase() + " is not a palindrome... try tacocat!" );
    }
  });

  // Magic 8-Ball
  bot.respond(/Hal, (.*)?/i, function(msg) {
    var answers = ['Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.', 'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.', 'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.', 'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.', 'The future is uncertain.', 'I would rather not say.', 'Who cares?', 'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];

    var answer = answers[Math.floor(Math.random() * answers.length)];
    return msg.reply(answer);
  });

  // Heads or Tails
  bot.respond(/Flip Coin/i, function (msg) {
    var heads = 0;
    var tails = 0;
    var x = Math.floor(Math.random() * 2)
    if (x === 0) {
      return msg.send("It's Heads! http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg");
    } else {
      return msg.send("It's Tails! http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-tail.jpg");
    }

  });

};
