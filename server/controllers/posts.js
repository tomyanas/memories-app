import PostMessage from "../models/postMessage.js";
// https://www.restapitutorial.com/httpstatuscodes.html ---> status codes

export const getPosts = async (req, res) => {
  try{
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const createPost = (req, res) => {
    const {title, message, creator, tags, selectedFile} = req.body;
    try {
        const newPost = new PostMessage({
            title,
            message,
            creator,
            tags,
            selectedFile
        });
        newPost.save();
        res.status(200).json(newPost);

    } catch (error) {
        res.status(404).json({message: error.message});
    }

}



