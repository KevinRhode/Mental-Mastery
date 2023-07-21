// familyuserId
// Bday
// ProNoun
// Religion

const { Schema, model } = require('mongoose');

const familyuserSchema = new Schema({

    dateOfBirth: {

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
