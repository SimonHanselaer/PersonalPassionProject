import GraphQLJSON from 'graphql-type-json';
import shortid from 'shortid';


export default {
  JSON: GraphQLJSON,

  Query: {
    hello: (root, { name }) => `Hello ${name || 'World'}!`,
    media: (root, args, { db }) => db.get('media').value()
  },

  Mutation: {
    addMediaItem: (root, { input }, { pubsub, db }) => {
      const mediaItem = {
        id: shortid.generate(),
        mediaItemId: input.mediaItemId,
        mediaTitle: input.mediaTitle,
        mediaImage: input.mediaImage
      }

      db
        .get('media')
        .push(mediaItem)
        .last()
        .write()

      pubsub.publish('media', { mediaItemAdded: mediaItem })

      return mediaItem
    }
  },

  Subscription: {
    mediaItemAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('media')
    }

  },
}
