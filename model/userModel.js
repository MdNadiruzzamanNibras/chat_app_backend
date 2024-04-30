const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      require: true,
    },
    email: {
      type: "string",
      require: true,
    },
    password: {
      type: "string",
      require: true,
    },
    pic: {
      type: "string",
      require: true,
      default: "https://i.ibb.co/sCSH5Zc/images.png",
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = new mongoose.model("User", userSchema);

module.exports = User;
