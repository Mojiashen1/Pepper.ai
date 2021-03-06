var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

// Create a connect.js inside the models/ directory that
// exports your MongoDB URI!
var connect = require('./connect.js');

// var db = mongoose.connection;
// db.once('open', function callback () {
// console.log("DB Connected!");
// });

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);

var newsSchema = mongoose.Schema({
  tech:[{
    url: String,
    title: String
    // thumbnail: String
  }],
  news:[{
    url: String,
    title: String
    // thumbnail: String
  }],
  sports:[{
    url: String,
    title: String
    // thumbnail: String
  }]
})

var userSchema = mongoose.Schema({
  state: {
    type: Number,
    required: true,
    default: 0
  },
  // token: {
  //   type: Number
  // },
  facebookId: { //store facebook id here
    type: String,
    required: true
  },
  city: {
    type: String
  },
  topic: String,
  timeToWakeUp: {
    time: String,
    hour: Number,
    minute:Number,
    minuteString: String
    },
  tasks:{
    type: Array
  },
  prevState: {
    type: Number
  },
  firstname:{
    type: String
  },
  profile: {
    type: String
  },
  timezone:{
    type: Number
  },
  locale:{
    type:String
  },
  gender:{
    type:String
  },
  missingDuration:{
    type: String,
    name: "Routine but no duration"
  },
  missingRoutine:{
    type: String,
    name: "Duration but no routine"
  },
  reflectionState:{
    type: Number,
    default: 0
  },
  reflectionAnswer:{
    type: String
  },
  reflectionTime: [
    {
      hour: {
        type: Number,
        default: 21
      },
      minute: {
        type: Number,
        default: 0
      }
    }
  ],
  reflectionQuestion: {
    type: String
  },
  reflection:{
    "title": {
        "media": {
          "url": String,
          "caption": String,
          "credit": String
        },
        "text": {
          "headline": String,
          "text": String
        }
    },
    "events": []
    }
});

newsSchema.plugin(findOrCreate);

module.exports = {
  User: mongoose.model("User", userSchema),
  News: mongoose.model('News', newsSchema)
};
