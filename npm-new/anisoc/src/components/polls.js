import "../index.css";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas neque at justo tincidunt egestas. Integer mauris diam, fringilla eget gravida condimentum, lacinia ut justo. Proin cursus dolor a laoreet luctus. Vestibulum vitae feugiat quam, condimentum dictum eros. Morbi eleifend lorem sit amet bibendum dignissim. ";

const polls = [
  {
    Title: "Poll 1",
    Description: placeholderText,
  },
  {
    Title: "Poll 2",
    Description: placeholderText,
  },
  {
    Title: "Poll 3",
    Description: placeholderText,
  },
];

function Poll(props) {
  return (
    <>
      <div className="poll">
        <p className="item-title">{props.Title}</p>
        <p className="item-description">{props.Description}</p>
        <a href="#" className="item-button">
          Vote Here
        </a>
      </div>
    </>
  );
}

function Polls() {
  return (
    <div className="polls" id="Polls">
      <div className="title"> Polls </div>
      <div className="polls-container">
        {polls.map((item, index) => {
          if (index > 1) return <></>;

          return (
            <Poll
              key={index}
              Title={item.Title}
              Description={item.Description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Polls;
