import { Data } from "../../Data/Data";
function Postheader() {
  console.log(Data);
  return (
    <>
      <div></div>
      <div>
        {Data.map((posts) => (
          <div>
            <p>{posts.Username}</p>
            <img src={posts.ProfileImage} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
export default Postheader;
