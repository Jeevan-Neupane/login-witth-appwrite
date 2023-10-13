import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlterNative from "../components/Alternative";

function AuthLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    if (!!user) {
      setLoading(false);
      return;
    } else if (!user) {
      setLoading(false);
      navigate("/login");
    }
  }, [user, navigate]);
  return loading ? (
    <AlterNative>Loading...</AlterNative>
  ) : (
    <>{children}</>
  );
}

export default AuthLayout;
