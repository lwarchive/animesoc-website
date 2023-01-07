import members from "./data/committee.json";
import parse from "html-react-parser";

interface FavouriteAnime {
  displayName: string;
  link: string;
}

interface CommitteeProps {
  name: string;
  role: string;
  course: string;
  favouriteAnime: FavouriteAnime;
  trivia: string;
  portrait: string;
}

function CommitteeMember(props: CommitteeProps) {
  return (
    <>
      <div className="committee-member max-w-sm grow">
        <img
          className="object-scale-down aspect-square"
          src={`${props.portrait}`}
          alt={props.name}
        />
        <div className="committee-member-info">
          <p className="item-title">{props.name}</p>
          <p className="item-subtitle">{props.role}</p>
          <p className="committee-course">{props.course}</p>
          <p className="item-description">{parse(props.trivia)}</p>
          <p className="committee-anime">
            <i className="material-icons">favorite</i>
            <span> Anime:</span>
            <a href={props.favouriteAnime.link}>
              {" "}
              {props.favouriteAnime.displayName}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

function Committee() {
  return (
    <div className="committee-members flex flex-col " id="committee-members">
      <div className="backdrop-blur-sm rounded-sm">
        <div className="title">Committee</div>
        <div className="committee-container flex flex-col lg:flex-row">
          {members.committeeMembers.map((item, index) => {
            return (
              <CommitteeMember
                key={index}
                name={item.name}
                role={item.role}
                course={item.course}
                favouriteAnime={item.favouriteAnime}
                trivia={item.trivia}
                portrait={item.portrait}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Committee;
