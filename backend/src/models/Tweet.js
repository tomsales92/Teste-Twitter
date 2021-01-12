const { v4: uuid_v4 } = require('uuid');
module.exports = class Tweet {
    constructor( name, text) {
        this.id = uuid_v4();
        this.name = name;
        this.text = text;
    }
}