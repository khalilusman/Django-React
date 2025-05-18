import { useState, useEffect } from 'react';
import api from './api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/posts/').then((response) => setPosts(response.data));
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
