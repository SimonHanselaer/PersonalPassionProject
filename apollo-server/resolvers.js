import GraphQLJSON from 'graphql-type-json';
import shortid from 'shortid';

export default {
  JSON: GraphQLJSON,

  Query: {
    hello: (root, { name }) => `Hello ${name || 'World'}!`,
    users: (root, args, { db }) => db.get('users').value(),
    userLists: (_, { id }, { db }) => {
      return db.get('users').value().filter(userlist => userlist.id == id);
    }

  },

  Mutation: {
    addUser: (root, { input }, { pubsub, db }) => {
      const user = {
        id: input.id,
        lists: [
          {
            id: 1,
            name: "Watchlist",
            media: []
          }
        ]
      }

      const found = db.get('users').value().filter(user => user.id == input.id)

      if (found.length === 0) {
        console.log('getting added');
        db.get('users').push(user).last().write();

        pubsub.publish('users', { userAdded: user });

        return user;
      }

      return user;

    },

    addMediaItem: (root, { input }, { pubsub, db }) => {
      const mediaItem = {
        user_id: input.user_id,
        id: input.id,
        mediaTitle: input.mediaTitle,
        mediaImage: input.mediaImage,
        mediaType: input.mediaType
      }

      const found = db.get('users').value().filter(user => user.id == input.user_id)

      if (found.length === 1) {
        console.log(found[0].lists[0].media);

        found[0].lists[0].media
          .push(mediaItem);

        pubsub.publish('media', { mediaItemAdded: mediaItem })

        return mediaItem
      }

      console.log('not found');

      return mediaItem
    }
  },

  Subscription: {
    userAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('users')
    },

    mediaItemAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('media')
    }

  }
}
