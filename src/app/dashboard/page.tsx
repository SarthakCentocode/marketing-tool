import React from "react";
import Card from "../../components/card";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  console.log("change ");
  
  return (
    <Sidebar>
      <div className="flex justify-start">
        <Card
          title="Your Card Title"
          description="This is a description of the card."
          actionText="Click Me"
          icon="path/to/icon.png"
        />
        <Card
          title="Your Card Title"
          description="This is a description of the card."
          actionText="Click Me"
          icon="path/to/icon.png"
        />
        <Card
          title="Your Card Title"
          description="This is a description of the card."
          actionText="Click Me"
          icon="path/to/icon.png"
        />
      
      </div>
    </Sidebar>
  );
};

export default Dashboard;
