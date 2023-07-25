// familyuserId
// Bday
// ProNoun
// Religion

const { Schema, model } = require('mongoose');

const { formatedCreatedAt } = require("../utils/helpers");

const familyuserSchema = new Schema({

    dateOfBirth: {

        type: Date,
        required: true,
        default: Date.now,
        get: formatedCreatedAt,
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
