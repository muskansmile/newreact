import { Link } from "react-router-dom";
function MemberDetails() {
  return (
    <div>
      <h1>Member Details</h1>
      you can go to about page <Link to="/about">About</Link> for more details about us.
         you can also got to horse page to check you horse info <Link to="/horse">Horse Details</Link> for more details about us.
    </div>

  );
}
export default MemberDetails;