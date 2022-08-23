const bcrypt = require('bcryptjs')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  createUser: async args => {
    try {
      const exitstingUser = await User.findOne({ email: args.userInput.email })
      if (exitstingUser) {
        throw new Error('user exit')
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12)

      const user = new User({
        username: args.userInput.username,
        email: args.userInput.email,
        password: hashPassword,
        fullName: args.userInput.fullName,
        birthdate: args.userInput.birthdate,
        nationalcode: args.userInput.nationalcode
      })
      const result = await user.save()
      return { ...result._doc, password: null, _id: result.id }
    } catch (err) {
      throw err
    }
  },
  user: async ({userId})  => { 
    const user = await User.findOne({_id:userId.toString()})
    return { userId: user._id ,username:user.username }
  }
  ,
  login: async ({ username, password }) => { 
    const user = await User.findOne({ username })
    const isEqual = await bcrypt.compare(password, user.password)
      const token = jwt.sign({ userId: user.id, username: user.username }, 'somesuprtkey', {
      expiresIn: '1h'
    })
    return { userId: user.id, token, tokenExpiration: 1 }
  }

}
