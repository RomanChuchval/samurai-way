

type rerenderTreeProps = {

}

let rerenderEntireTree = (props:rerenderTreeProps) => {
     console.log('State changed')
 }
let state = {
    dialogsPage: {
        messages: [
            {message: 'Lorem ipsum dolor sit ae laudantium magni modi neque, obcaecati perspiciatis porro qui quidem quisquam quos rerum sed sequi vel veniam vero voluptatum! Blanditiis expedita explicabo non placeat voluptates.\n'},
            {message: 'How Are you?'},
            {message: 'What a day!', myMessage: 's.myMessage'},
            {message: 'hahahha lol!'},
            {message: 'Go home!', myMessage: 's.myMessage'},
            {message: 'How match it cost?'},
            {message: 'Yo!', myMessage: 's.myMessage'},
        ],

        dialogs: [
            {id: '1', name: 'Roman'},
            {id: '2', name: 'Lera'},
            {id: '3', name: 'Dimych'},
            {id: '4', name: 'Sergey'},
            {id: '5', name: 'Pavel'},
            {id: '6', name: 'Andrew'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!', likeCount: 12},
            {id: 2, message: 'How Are you?', likeCount: 11},
            {id: 3, message: 'What a day!', likeCount: 23},
            {id: 4, message: 'hahahha lol!', likeCount: 43},
            {id: 5, message: 'Go home!', likeCount: 13},
            {id: 6, message: 'How match it cost?', likeCount: 4},
            {id: 7, message: 'Yo!', likeCount: 123},
        ],
    },
    navbar: {
        friends: [
            {name: 'Roman'},
            {name: 'Dimych'},
            {name: 'Viktor'},
        ]
    }
}


 export const addPost = (postMessage:string): void => {
     let newPost = {
         id: 8,
         message: postMessage,
         likeCount: 0,
     }
 }

//     state.profilePage.posts.push(newPost)
//      rerenderEntireTree()
// }
//
// type subscribePropsType = {
//     observer: () => {}
// }
// export const subscribe = (props: subscribePropsType) => {
//     rerenderEntireTree = props.observer;
// }
//
export default state;