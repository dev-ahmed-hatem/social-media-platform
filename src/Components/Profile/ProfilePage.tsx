import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Account from "./Account";
import Posts from "./Posts";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("account");

  const renderContent = () => {
    if (activeTab === "account") {
      return <Account />;
    }
    if (activeTab === "posts") {
      return <Posts />;
    }
    return null;
  };

  return (
    <div className="flex ">
      <Sidebar />
      {renderContent()}
    </div>
  );
};

export default ProfilePage;
