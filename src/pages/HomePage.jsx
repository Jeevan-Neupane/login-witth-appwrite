import { useSelector } from "react-redux";
import HeroBanner from "../components/HeroBanner";
import AlterNative from "../components/Alternative";

function HomePage() {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      {user ? <HeroBanner /> : <AlterNative>Log in To See</AlterNative>}
    </div>
  );
}

export default HomePage;
