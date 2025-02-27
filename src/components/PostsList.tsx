import React, { useState, useEffect } from 'react';
import Post from './Post';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

interface PostInfo {
  postId: string;
  authorUserId: string;
  text: string;  
}

interface PostsListProps {
  id: string;
}

function PostsList({ id }: PostsListProps) {
  const [posts, setPosts] = useState<PostInfo[]>([]);

  const jwtToken = AsyncStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //console.log('Posts List - id is: ', id);
        const response = await fetch(process.env.REACT_APP_SERVER_URL + `/post/getbyprofile/${id}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          }
        });
        const postsData: PostInfo[] = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };
    fetchPosts();
  }, [id, jwtToken]);

  return (
    Array.isArray(posts) && posts.length > 0 ? (
      <View>
          {posts.map((post) => (
              <Post postInfo={post} />
          ))}
      </View>
    ) : null
  );
}

export default PostsList;
