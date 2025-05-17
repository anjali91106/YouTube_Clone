import channelModel from "../Model/channel.model.js";

// Add a new channel
export const createChannel = (req, res) => {
  const { channelId, channelName, Owner, description, channelBanner, subscribers } = req.body;

  const newChannel = new channelModel({
    channelId,
    channelName,
    Owner,
    description,
    channelBanner,
    subscribers,
    videos
  });

  newChannel.save()
    .then(data => res.status(201).json({ message: "Channel created successfully", data }))
    .catch(err => res.status(500).json({ message: "Error creating channel", error: err }));
};

