const List = ({ users, onRemove }) => {
  return (
    <>
      {users.length === 0 && <p className="text-center text-slate-500">No Users Data</p>}
      {users.map((user) => (
        <div key={user.id} onClick={() => onRemove(user.id)} className="p-2 mb-2 last:mb-0 border-2 border-indigo-500/50 rounded-md hover:scale-105 cursor-pointer ease-in transition-all">
          {user.name} ({user.age} Tahun)
        </div>
      ))}
    </>
  );
};

export default List;
