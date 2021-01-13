import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { firebasestore, firestore } from "../firebase/firebase";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  // const newComment = {
  //     dishId: dishId,
  //     rating: rating,
  //     author: author,
  //     comment: comment
  // };
  // newComment.date = new Date().toISOString();

  // return fetch(baseUrl + 'comments',{
  //     method: 'POST',
  //     body: JSON.stringify(newComment),
  //     headers: {"Content-Type": "application/json"},
  //     credentials: "same-origin"
  // })
  // .then(response => {
  //     if (response.ok) {
  //         return response;
  //     } else {
  //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //         error.response = response;
  //         throw error;
  //     }
  // },
  // error => {
  //     throw error;
  // })
  // .then(response => response.json())
  // .then(response => dispatch(addComment(response)))
  // .catch(error => {console.log('post comments', error.message);
  // alert ('Your comment could not be posted\nError: '+ error.message);});

  return firestore
    .collection("comments")
    .add({
      author: author,
      dish: dishId,
      rating: rating,
      comment: comment,
      createdAt: firebasestore.FieldValue.serverTimestamp(),
      updatedAt: firebasestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => {
      firestore
        .collection("comments")
        .doc(docRef.id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const _id = doc.id;
            let comment = { _id, ...data };
            dispatch(addComment(comment));
          } else {
            console.log("No such document!");
          }
        });
    })
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

//   return fetch(baseUrl + "dishes")
//     .then(
//       (response) => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error(
//             "Error" + response.status + ": " + response.statusText
//           );
//           error.response = response;
//           throw error;
//         }
//       },
//       (error) => {
//         var errmess = new Error(error.message);
//         throw errmess;
//       }
//     )
//     .then((response) => response.json())
//     .then((dishes) => dispatch(addDishes(dishes)))
//     .catch((error) => dispatch(dishesFailed(error.message)));

    return firestore.collection('dishes').get()
    .then(snapshot => {
        let dishes = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            const _id = doc.id;
            dishes.push({_id, ...data});
        });
        return dishes;
    })
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchComments = () => (dispatch) => {
//   return fetch(baseUrl + "comments")
//     .then(
//       (response) => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error(
//             "Error" + response.status + ": " + response.statusText
//           );
//           error.response = response;
//           throw error;
//         }
//       },
//       (error) => {
//         var errmess = new Error(error.message);
//         throw errmess;
//       }
//     )
//     .then((response) => response.json())
//     .then((comments) => dispatch(addComments(comments)))
//     .catch((error) => dispatch(commentsFailed(error.message)));

    return firestore.collection('comments').get()
    .then(snapshot => {
      let comments = [];
      snapshot.forEach(doc=> {
        const data = doc.data();
        const _id= doc.id;
        comments.push({_id, ...data});
      });
      return comments;
    })
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  // return fetch(baseUrl + "promotions")
  //   .then(
  //     (response) => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         var error = new Error(
  //           "Error" + response.status + ": " + response.statusText
  //         );
  //         error.response = response;
  //         throw error;
  //       }
  //     },
  //     (error) => {
  //       var errmess = new Error(error.message);
  //       throw errmess;
  //     }
  //   )
  //   .then((response) => response.json())
  //   .then((promos) => dispatch(addPromos(promos)))
  //   .catch((error) => dispatch(promosFailed(error.message)));

  return firestore.collection('promotions').get()
    .then(snapshot =>{
      let promos = [];
      snapshot.forEach(doc=> {
        const data = doc.data();
        const _id = doc.id;
        promos.push({_id, ...data});
      });
      return promos;
    })
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  // return fetch(baseUrl + "leaders")
  //   .then(
  //     (response) => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         var error = new Error(
  //           "Error" + response.status + ": " + response.statusText
  //         );
  //         error.response = response;
  //         throw error;
  //       }
  //     },
  //     (error) => {
  //       var errmess = new Error(error.message);
  //       throw errmess;
  //     }
  //   )
  //   .then((response) => response.json())
  //   .then((leaders) => dispatch(addLeaders(leaders)))
  //   .catch((error) => dispatch(leadersFailed(error.message)));

  return firestore.collection('leaders').get()
  .then(snapshot=>{
    let leaders = [];
    snapshot.forEach(doc=>{
      const data = doc.data();
      const _id = doc.id;
      leaders.push({_id, ...data});
    });
    return leaders;
  })
  .then((leaders) => dispatch(addLeaders(leaders)))
  .catch((error) => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

export const postFeedback = (
  firstname,
  lastname,
  telnum,
  email,
  agree,
  contactType,
  message
) => (dispatch) => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message,
  };

  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((respone) => respone.json())
    .then((respone) =>
      alert("Thank you for your feedback!" + JSON.stringify(respone))
    )
    .catch((error) => {
      console.log("post feedback", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};
