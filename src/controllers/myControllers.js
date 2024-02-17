const sequelize = require('../db/sequelize')

const getAll = (req, res) => {

    const modelName = req.params.modelName; // Nom du modèle passé en paramètre (par exemple, "Car")

    // Utilisation du modèle générique
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }
   
    Model.findAll()
        .then(items => {
            const message = 'La liste a bien été récupérée.'
            res.json({ message, data: items })
        })
        .catch(error => {
            const message = `La liste n'a pas pu être récupérée. Reessayez dans quelques instants`
            res.status(500).json({message, data: error})
        })

} 
  
// const method2 = (req, res)=>{ 
//     res.send("Hello, This was a post Request"); 
// } 
  
module.exports = { 
    getAll, 
    // method2 
}