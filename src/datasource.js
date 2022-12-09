// data columns
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    }
  }
];

// data rows
export const userRows = [
  {
    id: 1,
    username: "Ryan Andrew",
    img:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "ryanandrew@gmail.com",
    age: 34
  },
  {
    id: 2,
    username: "Sheila Dara",
    img:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "sheiladara@gmail.com",
    age: 30
  },
  {
    id: 3,
    username: "Kenji Katsugaya",
    img:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "katsugaya@gmail.com",
    age: 32
  }
];
