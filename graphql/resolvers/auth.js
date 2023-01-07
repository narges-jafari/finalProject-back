const bcrypt = require('bcryptjs')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  searchUserById: async (args) => {
    // await connect();
    const result = await User.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    return result
  },
  
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
        role: args.userInput.role,
  
      })
      const result = await user.save()
      return { ...result._doc, password: null, _id: result.id }
    } catch (err) {
      throw err
    }
  },
  user: async ({ creator }) => {
    const user = await User.findOne({ _id: creator.toString() })
    return { creator: user._id, username: user.username }
  },
  login: async ({ username, password }) => {
    const user = await User.findOne({ username })
    if (!user) {
      throw new Error('user is not ')
    }
    const isEqual = await bcrypt.compare(password, user.password)

    if (!isEqual) {
      throw new Error('password id wrong')
    }
    const token = jwt.sign({ userId: user.id, username: user.username }, 'somesuprtkey', {
      expiresIn: '1h'
    })
    return { userId: user.id, token, tokenExpiration: 1 }
  }
}
