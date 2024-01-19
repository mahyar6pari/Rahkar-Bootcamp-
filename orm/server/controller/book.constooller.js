const User=require("../models/user")
const book=require("../models/book")

  exports.addBookData = async (req, res) => {
      try {
      let data=await book.create({
        name: req.body.name,
        price: req.body.price,
          user_id: req.body.user_id
      });
        res.json(data,200);
      } catch (error) {
        res.json({message:error},400);
      }
    }

    exports.joinedTables = async (req, res) => {

      await User.hasMany(book,{foreignKey:'id'});
      await book.belongsTo(User,{foreignKey:'user_id'});
      let data=await book.findAll({ include:[User]});
      res.json(data)
        
    }


