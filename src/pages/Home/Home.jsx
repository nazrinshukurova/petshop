import React from "react";
import Welcome_Section from "../../components/Home_Sections/Welcome_Section";
import DogDashboard from "../../components/DogDashboard/DogDashboard";
import ChoosingDog from "../../components/ChoosingDog/ChoosingDog";
import ArticlesSection from "../../components/Articles/Articles";
import HomeComponent from "../../components/Home/Home";
import Map from "../../components/Map/Map";

const Home = () => {
  return (
    <div className="page_layout">
      <HomeComponent />
      <Welcome_Section />
      <DogDashboard />
      <ChoosingDog />
      <ArticlesSection />
      <Map />
    </div>
  );
};

export default Home;
