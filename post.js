fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>postData(data))

/*
1.get the elements where you want the new element
2.create child element
3.set ineertext orinnerHtml
4.appendchild
*/

function postData(posts){
    const postContainer=document.getElementById('post-container')
    for (const post of posts) {
       console.log(post);
        const postDiv=document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML=`
        <h4>user-${post.userId}</h4>
        <h5>Post:Title ${post.title}</h5>
        <p> Post Description: ${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    }
}