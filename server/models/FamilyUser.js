// familyuserId
// Bday
// ProNoun
// Religion

const { Schema, model } = require('mongoose');

const familyuserSchema = new Schema({

    birthDay: {

        type: Date,
        required: true,
    },
    proNoun: {

        type: String,

    },
    religion: {

        type: String,

    },

});

const FamilyUser = model('FamilyUser', familyuserSchema);

module.exports = FamilyUser;
