import { useState, useEffect } from "react";
import UserListItem from "../UserListItem/UserListIem";
import { updateFollowers } from "components/api/api";
import { Box, BackButton, Container } from "./userList.styles";
import Filter from "components/filter/filter";
import LoadMoreButton from "components/LoadMore/LoadMore";

function UserList() {
  const [users, setUsers] = useState([]);  
  const [displayedUsers, setDisplayedUsers] = useState(4);
  const [filter, setFilter] = useState("all");
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


  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers =
    filter === "following"
      ? users.filter((user) => following.includes(user.id))
      : filter === "follow"
      ? users.filter((user) => !following.includes(user.id))
      : users;


  return (
<Container>
    <BackButton to="/">Back</BackButton>
    <Filter
      value={filter}
      onChange={handleFilterChange}
      options={[
        { value: "all", label: "Show all" },
        { value: "follow", label: "Follow" },
        { value: "following", label: "Following" },
      ]}/>
    <Box>
    {filteredUsers.slice(0, displayedUsers).map((user) => (
      <UserListItem
        key={user.id}
        user={user}
        following={following}
        handleFollowClick={handleFollowClick}/>
    ))}
  </Box>
  {displayedUsers < filteredUsers.length && (
  <LoadMoreButton onClick={handleLoadMore}/>
)}
</Container>
  );
}

export default UserList;