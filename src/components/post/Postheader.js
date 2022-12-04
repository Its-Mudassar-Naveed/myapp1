import { post } from "hooks";
import { Container } from "react-bootstrap";
import { data } from "../../Data/Data";
import { Link } from "react-router-dom";
import "./posts.css";
function Postheader() {
  console.log(data);
  return (
    <>
      <div>
        {data.map((posts) => (
          <Container>
            <div>
              <div className="d-flex align-items-center">
                <span>
                  <Link to={{ pathname: `/Userprofile/${posts.userId}` }}>
                    <img
                      src={posts.picture}
                      alt=""
                      className="rounded-circle"
                    />
                  </Link>
                </span>
                <p className="ml-5"> {posts.Username}</p>
                <p className="mt-5 ">{posts.postDescription}</p>
              </div>

              <img src={posts.ProfileImage} alt="" />
              <ul className="post-icon">
                <li>{posts.icon}</li>
                <li>{posts.Commenticon}</li>
              </ul>
            </div>
          </Container>
        ))}
      </div>
    </>
  );
}
export default Postheader;
