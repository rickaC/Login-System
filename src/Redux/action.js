import {firebase} from "../Firebase/firebase"

export function startAddingPost(post){
    console.log('here');
    return (dispatch) =>{
        return firebase.ref('posts').update({[post.id]:post}).then(()=>{
            dispatch(addPost(post));
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export function startLoadingPost(){
    return (dispatch)=>{
        console.log(dispatch);
        return firebase.ref('posts').once('value').then((snapshot)=>{
            let posts = []

            snapshot.forEach((childSnapshot)=>{
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPost(index, id){
    return (dispatch)=>{
        return firebase.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        })
    }
}

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

//adding post