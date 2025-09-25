import { useNavigate } from "react-router-dom";

export function useGoToContact() {
  const navigate = useNavigate();

  const goToContactWithService = (serviceName) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
    window.scrollTo(0, 0); // optional scroll
  };

  return goToContactWithService;
}