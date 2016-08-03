var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

  id: String,

  username: String,

  email: String,

  gamesPlayed: Number,

  gamesWon: Number,

  logs: [{

    playedWith: String, // id

    startTime: Date,

    endTime: Date,

    result: Boolean // 'W'==won 'L'==lost 'N'==no_result

  }],

  google: {

    id: String,

    token: String,

    displayName: String,

    email: String,

    profileUrl: String

  },

  facebook: {

    id: String,

    token: String,

    displayName: String,

    email: String,

    profileUrl: String

  }

});

userSchema.index({id: 1, username: 1, email:1 }, { unique: true });

var User = mongoose.model( 'User' , userSchema );

module.exports = User;
