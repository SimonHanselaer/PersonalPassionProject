import { db } from "./../main";
import firebase from "firebase";
import axios from "axios";
// import store from "../store/index";

export default {
    async addUser(id) {
        console.log('adding user, id:' + id);
        let addNewUser = db.collection("users").doc(id);

        addNewUser.get().then(docSnapshot => {
            if (!docSnapshot.exists) {
                addNewUser.set({ plexUsername: "" });

                db.collection("lists")
                    .doc(id)
                    .set({ name: "Watchlist", count: 0, userId: id });
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
                    addedOn: firebase.firestore.FieldValue.serverTimestamp()
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
                        count: doc.data().count
                    })
                });
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });

        return data;
    },
    async getListName(id) {
        let name = db.collection("lists")
            .doc(id)
            .get()
            .then(doc => {
                return doc.data().name
                //   self.name = doc.data().name;
            });
        return name
    },
    async getListItems(id) {
        const list = db.collection("lists")
            .doc(id)
            .collection("media");

        const listItems = list.get()
            .then(querySnapshot => {
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
                return data
            });
        return listItems
    },
    async getWatchedMedia() {
        return axios.get(`https://store.zapier.com/api/records?secret=PersonalPassionProject`);
    },
    async addToWatched(id) {
        db.collection("users").doc(localStorage.uid).update({
            watched: firebase.firestore.FieldValue.arrayUnion(id)
        })
    },

    async getWatchedMediaItems() {
        let data = [];
        data = await db.collection("users").doc(localStorage.uid).get().then(doc => {
            return doc.data().watched
        });
        return data;
    }
};
