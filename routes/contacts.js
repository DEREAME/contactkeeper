const express = require("express");
const router = express.Router();

//@route  GET  api/contacts
// @desc  Add new Contact
//@access Private
router.get("/", (req, res) => {
  res.send("Get all Contacts");
});

//@route  POST  api/contacts
// @desc  Add new Contact
//@access Private
router.post("/", (req, res) => {
  res.send("Add contact");
});
//@route  PUT api/contacts/:id
// @desc  Update contact
//@access Private
router.put("/:id", (req, res) => {
  res.send("Update contacts");
});

//@route  DELETE api/contacts/:id
// @desc  Delete contact
//@access Private
router.delete("/:id", (req, res) => {
  res.send("Delete contacts");
});

module.exports = router;
