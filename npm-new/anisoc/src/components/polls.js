import "../index.css";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas neque at justo tincidunt egestas. Integer mauris diam, fringilla eget gravida condimentum, lacinia ut justo. Proin cursus dolor a laoreet luctus. Vestibulum vitae feugiat quam, condimentum dictum eros. Morbi eleifend lorem sit amet bibendum dignissim. ";

const polls = [
  {
    title: "Poll 1",
    description: placeholderText,
  },
  {
    title: "Poll 2",
    description: placeholderText,
  },
  {
    title: "Poll 3",
    description: placeholderText,
  },
];

function Poll(props) {
  return (
    <>
      <div className="poll">
        <p className="item-title">{props.title}</p>
        <p className="item-description">{props.description}</p>
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
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Polls;
