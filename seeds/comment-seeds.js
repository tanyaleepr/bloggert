const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Awesome!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "yesssiiirrrrr"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;