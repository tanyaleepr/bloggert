const { Post } = require('../models');

const postData = [
    {
        title: "Tanya Lee Dev goes public!",
        post_content: "Tanya's Portfolio is finally available!",
        user_id: 3
    },
    {
        title: "We are almost done!",
        post_content: "Heroku could never.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;