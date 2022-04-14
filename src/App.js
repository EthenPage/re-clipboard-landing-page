import React from "react";
import Featuredesc from "./Components/Featuredesc";
import Intro from "./Components/Intro";
import IMAGES from "./Assets/Images";
import Companies from "./Components/Companies";
import Buttons from "./Components/Buttons";
import Footer from "./Components/Footer";

const App = () => {
  const data = [
    {
      id: 0,
      title: "A history of everything you copy",
      desc: "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
    },
    {
      id: 1,
      title: "Keep track of your snippets",
      desc: "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.",
    },
    {
      id: 2,
      title: "Access Clipboard anywhere",
      desc: "Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.",
    },
    {
      id: 3,
      title: "Supercharge your workflow",
      desc: "We’ve got the tools to boost your productivity.",
    },
    {
      id: 4,
      title: "Clipboard for iOS and Mac OS",
      desc: "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.",
    },
    {
      id: 5,
      title: "Quick Search",
      desc: "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      id: 6,
      title: "iCloud Sync",
      desc: "Instantly saves and syncs snippets across all your devices.",
    },
    {
      id: 7,
      title: "Complete History",
      desc: "Retrieve any snippets from the first moment you started using the app.",
    },
    {
      id: 8,
      title: "Create blacklists",
      desc: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    },
    {
      id: 9,
      title: "Plain text snippets",
      desc: "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      id: 10,
      title: "Sneak preview",
      desc: "Quick preview of all snippets on your Clipboard for easy access.",
    },
  ];

  return (
    <>
      <header className="header">
        <img className="resize" src={IMAGES.logo} alt="logo" />
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <Buttons />
      </header>

      <main className="main">
        <section className="snippets">
          <Intro title={data[1].title} desc={data[1].desc} />
          <div className="container">
            <img className="computer" src={IMAGES.computer} alt="computer" />
            <div className="items">
              <Featuredesc title={data[5].title} desc={data[5].desc} />
              <Featuredesc title={data[6].title} desc={data[6].desc} />
              <Featuredesc title={data[7].title} desc={data[7].desc} />
            </div>
          </div>
        </section>

        <section className="access">
          <Intro title={data[2].title} desc={data[2].desc} />
          <img src={IMAGES.devices} alt="devices" />
        </section>

        <section className="suppercharge">
          <Intro title={data[3].title} desc={data[3].desc} />
          <div className="suppercharge__container">
            <div className="sp__items">
              <img className="resize" src={IMAGES.blacklist} alt="blacklist" />
              <Featuredesc title={data[8].title} desc={data[8].desc} />
            </div>
            <div className="sp__items">
              <img className="resize" src={IMAGES.text} alt="text" />
              <Featuredesc title={data[9].title} desc={data[9].desc} />
            </div>
            <div className="sp__items">
              <img className="resize" src={IMAGES.preview} alt="preview" />
              <Featuredesc title={data[10].title} desc={data[10].desc} />
            </div>
          </div>
        </section>

        <section className="companies">
          <Companies />
        </section>

        <section className="action">
          <Intro title={data[4].title} desc={data[4].desc} />
          <Buttons />
        </section>
      </main>
      
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default App;
