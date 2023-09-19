import List from "./List";
import Card from "./UI/Card";

const UserList = ({users, onRemove}) => {
  return (
    <Card className={"mt-5 p-4"}>
      <List users={users} onRemove={onRemove}/>
    </Card>
  );
};

export default UserList;
