import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@remix-run/react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const navigateToLanding = () => navigate(-1);

  return (
    <header className="bg-white">
      <div className="flex items-center p-4">
        <button onClick={navigateToLanding} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">คูปองของฉัน</h1>
      </div>
    </header>
  );
};

export default Header;
