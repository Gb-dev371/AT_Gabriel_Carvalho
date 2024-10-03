// Home.js
import React from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import VideoCard from "../components/VideoCard";
import ToggleSwitch from "../components/ToggleSwitch";
import "./Home.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkN0Hewx10lOF1FKN05QcrHmiW1SWVIZxwzFwgcsJ71GsWuF2ayyKcWvOIxt_bGrl_LE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_btU1oK3umwECTc1mggSLYkCLTQBvDp0GF-2r3nbYcNm9ldt0_1zetnktIgleI2PD4P4&usqp=CAU",
  "https://i.cbc.ca/1.5932663.1614640043!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/bitcoin-graphic.jpg",
];

const Home = () => {
  return (
    <main
      className="home"
      style={{
        padding: "20px",
        backgroundColor: "#f7f7f7",
        textAlign: "center",
      }}
    >
      <div className="grid-container">
        <div className="grid-item">
          <h3>What is Bitcoin?</h3>
          <p>
            Bitcoin is a decentralized digital currency without a central bank
            or single administrator.
          </p>
        </div>
        <div className="grid-item">
          <h3>How Does Bitcoin Work?</h3>
          <p>
            Learn the underlying technology that powers Bitcoin, including
            blockchain and mining.
          </p>
        </div>
      </div>

      <section id="carousel-section">
        <h2>Bitcoin Evolution</h2>
        <Carousel images={images} />
      </section>

      <section id="cards-section">
        <h2>Bitcoin Information</h2>
        <div className="cards">
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlQDD-Jkgr6-UG-LrtAxVEDGJoBZSyh1kllynyOOcJ8uob4-rtQc3K8_mgmX5J2c672w&usqp=CAU"
            title="What is Bitcoin?"
            description="Bitcoin is a decentralized cryptocurrency."
          />
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNHYziEqyopAnKhu1RRoVVM1Zb4PjiC2vxeIFnD-Lq2JoSsr_xvaK-DwrQ5gSYOP6034&usqp=CAU"
            title="Mining Bitcoin"
            description="Learn how Bitcoin mining works."
          />
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlQDD-Jkgr6-UG-LrtAxVEDGJoBZSyh1kllynyOOcJ8uob4-rtQc3K8_mgmX5J2c672w&usqp=CAU"
            title="What is Bitcoin?"
            description="Bitcoin is a decentralized cryptocurrency."
          />
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNHYziEqyopAnKhu1RRoVVM1Zb4PjiC2vxeIFnD-Lq2JoSsr_xvaK-DwrQ5gSYOP6034&usqp=CAU"
            title="Mining Bitcoin"
            description="Learn how Bitcoin mining works."
          />
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlQDD-Jkgr6-UG-LrtAxVEDGJoBZSyh1kllynyOOcJ8uob4-rtQc3K8_mgmX5J2c672w&usqp=CAU"
            title="What is Bitcoin?"
            description="Bitcoin is a decentralized cryptocurrency."
          />
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNHYziEqyopAnKhu1RRoVVM1Zb4PjiC2vxeIFnD-Lq2JoSsr_xvaK-DwrQ5gSYOP6034&usqp=CAU"
            title="Mining Bitcoin"
            description="Learn how Bitcoin mining works."
          />
        </div>
      </section>

      <section id="progress-section">
        <h2>Bitcoin Adoption</h2>
        <ProgressBar progress={75} />
      </section>

      <section className="video-section">
        <h2>Educational Videos</h2>

        <VideoCard
          videoUrl="https://www.youtube.com/embed/L-Qhv8kLESY"
          videoTitle="What is Bitcoin?"
          description="Learn the basics of Bitcoin and how it works in this introductory video."
        />

        <VideoCard
          videoUrl="https://www.youtube.com/embed/bBC-nXj3Ng4"
          videoTitle="How Bitcoin Works Under the Hood"
          description="A deep dive into the technology that makes Bitcoin work under the hood."
        />

        <VideoCard
          videoUrl="https://www.youtube.com/embed/f7RmmvKW8W4"
          videoTitle="Bitcoin Mining Explained"
          description="Understand how Bitcoin mining works and why it's essential for the network."
        />
        <VideoCard
          videoUrl="https://www.youtube.com/embed/L-Qhv8kLESY"
          videoTitle="What is Bitcoin?"
          description="Learn the basics of Bitcoin and how it works in this introductory video."
        />

        <VideoCard
          videoUrl="https://www.youtube.com/embed/bBC-nXj3Ng4"
          videoTitle="How Bitcoin Works Under the Hood"
          description="A deep dive into the technology that makes Bitcoin work under the hood."
        />

        <VideoCard
          videoUrl="https://www.youtube.com/embed/f7RmmvKW8W4"
          videoTitle="Bitcoin Mining Explained"
          description="Understand how Bitcoin mining works and why it's essential for the network."
        />
      </section>
      <ToggleSwitch />
    </main>
  );
};

export default Home;
