require('./instantHello');
/*without the './' will only look for the module in the node modules folder*/
var goodbye=require('./talk/goodbye');
var talk=require('./talk');
/*it will look for a file named talk.js in the same folder,
otherwise it will look for a folder called talk that contains index.js that is why
we don't include the extension .js*/
var question=require('./talk/question');
talk.intro();
talk.hello("Killua");
var answer=question.ask('What is the meaning of Life?');
console.log(answer);
goodbye();
