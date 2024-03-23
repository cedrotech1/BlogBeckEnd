const { Likes,unLikes } = require("../Database/models");

export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.loggedInUser.id;
    const existingLike = await Likes.findOne({ where: { postId, userId } });

    if (existingLike) {
      await existingLike.destroy();
      res.status(200).json({ message: "Your like removed" });
    } else {
      const existingDislike = await unLikes.findOne({
        where: { postId, userId },
      });
      if (existingDislike) {
        await existingDislike.destroy();
      }
      await Likes.create({ postId, userId });
      res.status(200).json({ message: "Your like added" });
    }
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error("Validation errors:", error.errors);
    } else {
      console.error("Unhandled error:", error);
    }
    return res.status(500).json({
      status: "500",
      message: "Failed to add or remove like",
      error: error.message,
    });
  }
};
