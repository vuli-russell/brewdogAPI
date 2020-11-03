import {firestore} from "../firebase";

export const setFav= (user,beer) => {
    if(user){
        firestore.collection("users").doc(user.uid).get()
        .then(r => r.data())
        .then(data => {
            if(data){
                if(!data.favourites.some(fav => fav.id === beer.id)){
                    firestore.collection("users").doc(user.uid).update({favourites:[beer, ...data.favourites]})
                }else{
                    console.log("Already in Favourites")
                }
            } else {
                firestore.collection("users").doc(user.uid).set({favourites:[beer]})
            }
        })
        .catch(e => console.log(e));
    }else {
        alert("Please login to save favourites ")
    }
}

export const removeFav = (user,beer) => {
    firestore.collection("users").doc(user.uid).get()
    .then(r => r.data().favourites)
    .then(data => {
        if(data.findIndex(fav => fav.id===beer.id) >=0){
        data.splice(data.findIndex(fav => fav.id===beer.id),1);
        firestore.collection("users").doc(user.uid).update({favourites:data});
        }
    })
}

export const getFavourites = (user) => {
    if(user){
        return firestore.collection("users").doc(user.uid).get().then(r => r.data().favourites)
    }else{
        console.log("Error - No User Logged In")
    }
}

export const subscribeToFavourites = (user,setFunction) => {
    if(user){
        return firestore.collection("users").doc(user.uid).onSnapshot(r => setFunction(r.data().favourites))
    }else{
        console.log("Error - No User Logged In")
    }
}