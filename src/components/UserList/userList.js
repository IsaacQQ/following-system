import { useState, useEffect } from "react";
import UserListItem from "../UserListItem/UserListIem";
import { updateFollowers } from "components/api/api";
import { Box, LoadMore } from "./userList.styles";


function UserList() {
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem("following")) || []
  );

  const [displayedUsers, setDisplayedUsers] = useState(4);

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
      localStorage.setItem(
        "following",
        JSON.stringify(following.filter((userId) => userId !== id))
      );
    } else {
      setFollowing([...following, id]);
      const user = users.find((user) => user.id === id);
      updateFollowers(id, user.followers + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(following));
  }, [following]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLoadMore = () => {
    setDisplayedUsers(displayedUsers + 4);
  };


  return (
    <Box>
      {users.slice(0, displayedUsers).map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          following={following}
          handleFollowClick={handleFollowClick}
        />
      ))}
      {displayedUsers < users.length && (
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      )}
    </Box>
  );
}

export default UserList;