const Sequelize = require('sequelize').Sequelize

const sequelize = new Sequelize('mysql://root@localhost:3306/sequelize_plygrd');

(async() => {
    await sequelize.authenticate()

    let Dummy = sequelize.define('dummy', {
        description: Sequelize.STRING
    });
    
let notes = [
    { description: 'Tai chi in the morning' },
    { description: 'Visited friend' },
    { description: 'Went to cinema' },
    { description: 'Listened to music' },
    { description: 'Watched TV all day' },
    { description: 'Walked for a hour' },
];
    await Dummy.sync()
    // await Dummy.bulkCreate(notes)
    let note = await Dummy.findByPk(3)
    console.log("Note #3 ", note.get('description'))
    sequelize.close();
})();

