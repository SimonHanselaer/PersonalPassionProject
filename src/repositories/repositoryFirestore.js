import { db } from "./../main";
import firebase from "firebase";
// import store from "../store/index";

export default {
    async addUser(props) {
        let addNewUser = db.collection("users").doc(props.id);

        addNewUser.get().then(docSnapshot => {
            if (!docSnapshot.exists) {
                addNewUser.set({ plexUsername: "", watched: [], watchedSeries: [], playedGames: [], name: props.name, friends: [], image: props.image });

                db.collection("lists")
                    .doc(props.id)
                    .set({ name: "Watchlist", count: 0, userId: props.id });
            }
        });
    },
    async addUserList(name) {
        db.collection("lists").add({
            name: name,
            count: 0,
            userId: localStorage.uid
        });
    },
    async addWatchlistItem(data) {
        db.collection("lists").doc(localStorage.uid).get().then(doc => {
            if (!doc.data().thumbnails || !doc.data().thumbnails.length < 4) {
                db.collection("lists").doc(localStorage.uid).update({ thumbnails: firebase.firestore.FieldValue.arrayUnion(data.src) });
            }
        });


        let addItem = db
            .collection("lists")
            .doc(localStorage.uid)
            .collection("media")
            .doc(data.id.toString());

        addItem.get().then(docSnapshot => {
            if (docSnapshot.exists) {
                alert("media item is already on watchlist");
            } else {
                addItem.set({
                    name: data.title,
                    image: data.src,
                    type: data.type,
                    duration: data.duration,
                    releaseDate: data.releaseDate,
                    addedOn: firebase.firestore.FieldValue.serverTimestamp(),
                    userId: localStorage.uid
                });
                let updateCount = db.collection("lists").doc(localStorage.uid);
                updateCount.update({
                    count: firebase.firestore.FieldValue.increment(1)
                });
            }
        });
    },
    async getLists() {
        let data = [];
        const listRef = db
            .collection("lists")
            .where("userId", "==", localStorage.uid);

        listRef
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(doc => {
                    data.push({
                        id: doc.id,
                        name: doc.data().name,
                        count: doc.data().count,
                        thumbnails: doc.data().thumbnails
                    });
                });
            })
            .catch(error => {
                alert("Error getting documents: ", error);
            });

        return data;
    },
    async getListName(id) {
        let name = db
            .collection("lists")
            .doc(id)
            .get()
            .then(doc => {
                return doc.data().name;
                //   self.name = doc.data().name;
            });
        return name;
    },
    async getListItems(id) {
        const list = db
            .collection("lists")
            .doc(id)
            .collection("media");

        const listItems = list.get().then(querySnapshot => {
            let data = [];

            querySnapshot.forEach(doc => {
                data.push({
                    id: doc.id,
                    name: doc.data().name,
                    image: doc.data().image,
                    type: doc.data().type,
                    releaseDate: doc.data().releaseDate,
                    duration: doc.data().duration,
                    addedOn: doc.data().addedOn
                });
            });
            return data;
        });
        return listItems;
    },
    async getWatchedMedia() {
        let plexUsername = await db.collection("users").doc(localStorage.uid).get().then(doc => { return doc.data().plexUsername });

        let data = [];
        const watchedRef = db.collection("watched").where("username", "==", plexUsername);

        const watchedItems = await watchedRef.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                data.push(doc.data());
                db.collection("watched").doc(doc.id).delete()
            })
            return data;
        });

        return watchedItems
    },
    async addToWatched(props) {
        db.collection("users")
            .doc(localStorage.uid)
            .update({
                watched: firebase.firestore.FieldValue.arrayUnion({ mediaId: props.id.toString(), timestamp: props.timestamp })
            });
    },

    async addToWatchedSeries(props) {
        db.collection("users")
            .doc(localStorage.uid)
            .update({
                watchedSeries: firebase.firestore.FieldValue.arrayUnion({ mediaId: props.id.toString(), timestamp: props.timestamp })
            });
    },

    async addToPlayedGames(props) {
        db.collection("users")
            .doc(localStorage.uid)
            .update({
                playedGames: firebase.firestore.FieldValue.arrayUnion({ mediaId: props.id.toString(), timestamp: props.timestamp })
            });
    },

    async getWatchedMediaItems() {
        let data = [];
        let dataMovies = await db
            .collection("users")
            .doc(localStorage.uid)
            .get()
            .then(doc => {
                return doc.data().watched;
            });

        data = data.concat(dataMovies);

        let dataSeries = await db
            .collection("users")
            .doc(localStorage.uid)
            .get()
            .then(doc => {
                return doc.data().watchedSeries;
            });

        data = data.concat(dataSeries);

        let dataGames = await db
            .collection("users")
            .doc(localStorage.uid)
            .get()
            .then(doc => {
                return doc.data().playedGames;
            });

        data = data.concat(dataGames);

        return data;
    },

    async addItemToList(data) {

        db.collection("lists").doc(data.listId).get().then(doc => {
            if (!doc.data().thumbnails || !doc.data().thumbnails.length < 4) {
                db.collection("lists").doc(data.listId).update({ thumbnails: firebase.firestore.FieldValue.arrayUnion(data.src) });
            }
        });

        let addItem = db
            .collection("lists")
            .doc(data.listId)
            .collection("media")
            .doc(data.id.toString());

        addItem.get().then(docSnapshot => {
            if (docSnapshot.exists) {
                alert("media item is already on list");
            } else {
                addItem.set({
                    name: data.title,
                    image: data.src,
                    type: data.type,
                    duration: data.duration,
                    releaseDate: data.releaseDate,
                    addedOn: firebase.firestore.FieldValue.serverTimestamp(),
                    userId: localStorage.uid
                });
                let updateCount = db.collection("lists").doc(data.listId);
                updateCount.update({
                    count: firebase.firestore.FieldValue.increment(1)
                });
            }
        });
    },

    async getUser() {
        let data = await db.collection("users").doc(localStorage.uid).get().then(user => {
            return user.data();
        })

        return data;
    },

    async getUsers() {
        let usersRef = await db.collection("users").get().then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(user => {
                if (user.id != localStorage.uid) {
                    data.push({ name: user.data().name, image: user.data().image, id: user.id, watchedCount: user.data().watched.length });
                }
            })
            return data;
        })

        return usersRef;
    },

    async addFriend(id) {
        db.collection("users").doc(localStorage.uid).update({
            friends: firebase.firestore.FieldValue.arrayUnion(id)
        });
    },

    async getFriends() {
        const friends = await db.collection("users").doc(localStorage.uid).get().then(user => { return user.data().friends });

        let data = [];

        for (let i = 0; i < friends.length; i++) {
            let listData = [];
            let friendName = await db.collection("users").doc(friends[i]).get().then(user => {
                return user.data().name
            })

            const listRef = db
                .collection("lists")
                .where("userId", "==", friends[i]);

            listRef
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(doc => {
                        listData.push({
                            id: doc.id,
                            name: doc.data().name,
                            count: doc.data().count,
                            thumbnails: doc.data().thumbnails
                        });
                    });
                })

            const friendData = {
                friendId: friends[i],
                friendName: friendName, listData: listData
            }

            data.push(friendData);
        }

        return data
    },

    async addPlexUsername(name) {
        db.collection("users").doc(localStorage.uid).update({ plexUsername: name });
    },

    async addUsername(name) {
        db.collection("users").doc(localStorage.uid).update({ name: name })
    },

    async deleteFromList(props) {
        db.collection("lists").doc(props.listId).collection("media").doc(props.itemId).delete();
        let updateCount = db.collection("lists").doc(props.listId);
        updateCount.update({
            count: firebase.firestore.FieldValue.increment(-1)
        })
    },

    async deleteList(prop) {
        db.collection("lists").doc(prop).delete();
    },

    async getNewWatchlistItems() {
        db.collection("addToWatchlist").where("userId", "==", localStorage.uid).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.addWatchlistItem(doc.data())
                db.collection("addToWatchlist").doc(doc.id).delete()
            })
        });

    },

    async getLastWatchedMovie() {
        let lastWatchedMovie = await db.collection("users").doc(localStorage.uid).get().then(user => {
            let index = user.data().watched.length - 1;
            return user.data().watched[index];
        })

        return lastWatchedMovie;
    },

    async getLastWatchedSerie() {
        let lastWatchedSerie = await db.collection("users").doc(localStorage.uid).get().then(user => {
            let index = user.data().watchedSeries.length - 1;
            return user.data().watchedSeries[index];
        })

        return lastWatchedSerie;
    }

};
