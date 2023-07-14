// familyuserId
// Bday
// ProNoun
// Religion

const { Schema, model } = require('mongoose');

const familyuserSchema = new Schema({

    familyuserId: {

        type: String,
        required: true,

    },

    birthDay: {

        type: Date,
        required: true,
    },
    proNoun: {

        type: String,
        required: true,
    },
    religion: {

        type: String,

    },

});

const FamilyUser = model('FamilyUser', familyuserSchema);

module.exports = FamilyUser;
