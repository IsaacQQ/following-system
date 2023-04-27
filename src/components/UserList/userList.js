import { useState, useEffect } from "react";
import { updateFollowers } from "components/api/api";

function UserList() {
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem("following")) || []
  );

  useEffect(() => {
    const savedFollowing = localStorage.getItem("following");
    if (savedFollowing) {
      setFollowing(JSON.parse(savedFollowing));
    }
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://63ca3a984f53a004201f12f4.mockapi.io/User");
    const data = await response.json();
    setUsers(data);
  };

 

  const handleFollowClick = (id) => {
    const isFollowing = following.includes(id);
    if (isFollowing) {
      setFollowing(following.filter((userId) => userId !== id));
      const user = users.find((user) => user.id === id);
      updateFollowers(id, user.followers - 1);
      localStorage.setItem("following", JSON.stringify(following.filter((userId) => userId !== id)));
    } else {
      setFollowing([...following, id]);
      const user = users.find((user) => user.id === id);
      updateFollowers(id, user.followers + 1);
    }
  };
useEffect(() => {
  const savedFollowing = localStorage.getItem("following");
  if (savedFollowing) {
    setFollowing(JSON.parse(savedFollowing));
  }
}, []);

useEffect(() => {
  localStorage.setItem("following", JSON.stringify(following));
}, [following]);
  
  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.user}</h3>
          <img src={user.avatar} alt="avatar" />
          <p>Tweets: {user.tweets}</p>
          <p>Followers: {user.followers + (following.includes(user.id) ? 1 : 0)}</p>
          <button onClick={() => handleFollowClick(user.id)}>
            {following.includes(user.id) ? "Unfollow" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList