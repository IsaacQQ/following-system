import { UserCard, BackGroundImg, NickName, Button, Img, Tweets, Followers } from "./userCard.styled";
import picture from '../../img/picture2 1.png'

function UserListItem({ user, following, handleFollowClick }) {
    return (
      <UserCard>
        <BackGroundImg src={picture}></BackGroundImg>
        <NickName>{user.user}</NickName>
        <Img src={user.avatar} alt="avatar" />
        <Tweets>Tweets: {user.tweets}</Tweets>
        <Followers>
          Followers: {user.followers.toLocaleString('en-US') + (following.includes(user.id) ? 1 : 0)}
        </Followers>
        <Button onClick={() => handleFollowClick(user.id)} isFollowing={following.includes(user.id)}>
          {following.includes(user.id) ? "Following" : "Follow"}
        </Button>
      </UserCard>
    );
  }
  
  export default UserListItem;