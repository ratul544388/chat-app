import Container from "./container";
import UserButton from "./user-button";
import { useAuthStore } from "../hooks/use-auth-store";

const Header = () => {
  const { user } = useAuthStore();
  return (
    <header className="h-16 sticky top-0 border-b border-gray-300">
      <Container className="h-full flex items-center justify-between">
        <div>Logo</div>
        {user ? <UserButton /> : ""}
      </Container>
    </header>
  );
};

export default Header;
