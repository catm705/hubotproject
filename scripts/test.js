module.exports = function(bot) {
  bot.hear(/test/, function(res) {
    return res.send("The better bot is running!");
  });
  bot.hear(/Hello!/, function(res) {
    return res.send("Sup")
  });
  bot.hear(/hubot/i, function(res) {
    return res.send("Will the real hubot please stand up?")
  });
  bot.respond(/What's your favorite food?/, function(res) {
    return res.send("Computer Chips!");
  });

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

  // Blah

  // Blah
};
