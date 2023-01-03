import titleCopy from "./data/home.json";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-title-bg">
          <div className="home-title flex flex-col text-center lg:flex-row pt-8 pb-8">
            <img
              className="w-40 lg:w-2/12"
              src={titleCopy.logo}
              alt={titleCopy.logoAlt}
            />
            <div className="my-5 mx-5 lg:w-1/2">
              <div className="text-base lg:text-lg">
                {titleCopy.higherTitle}
              </div>
              <div className="text-lg lg:text-4xl">{titleCopy.subtitle}</div>
              <div className="text-5xl lg:text-6xl">{titleCopy.title}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
