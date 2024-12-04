const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

[
  {
    id: 1,
    username: "user1",
    email: "user1@example.com",
  },
  {
    id: 2,
    username: "user2",
    email: "user2@example.com",
  },
];

module.exports = mongoose.model("User", userSchema);
