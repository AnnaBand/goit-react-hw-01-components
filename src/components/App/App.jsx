import { Profile } from '../../components/Profile/Profile';
import user from '../../json/user.json';
// import { Container } from './App.styled';

export const App = () => {
  const {username, tag, location, avatar, stats} = user
  return (
    <>
      <Profile 
        username={username} 
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
         />
    </>
  );
};