import { ProfileHeader, ProfileImage, UserName } from "./style";

export default function Header() {
  return (
    <ProfileHeader>
      <ProfileImage src="/assets/profile.png" alt="Profile Image" />
      <UserName>Baby Yoda</UserName>
    </ProfileHeader>
  );
}
