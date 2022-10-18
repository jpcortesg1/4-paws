export const productColumns = [
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
    },
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },
];

//temporary data
export const productRows = [
  {
    id: 1,
    stock: 10,
    username: "Cuido razas pequeñas",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Stock",
    brand: "dogchow",
    price: 35000,
  },
  {
    id: 2,
    stock: 1,
    username: "Juguetes1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "Juguetes",
    status: "StockinOrder",
    price: 42000,
  },
  {
    id: 3,
    stock: 0,
    username: "juguetes2",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "jugeutes2",
    status: "OutofStock",
    price: 45000,
  },
  {
    id: 4,
    username: "Juguete3",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "Juguetes3",
    status: "Stock",
    price: 16000,
  },
  {
    id: 5,
    stock: 1,
    username: "cuido2",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "marcaCuido2",
    status: "StockinOrder",
    price: 22000,
  },
  {
    id: 6,
    stock: 10,
    username: "cuido3",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "marcaCuido3",
    status: "Stock",
    price: 15000,
  },
  {
    id: 7,
    stock: 1,
    username: "cuido4",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "marcaCuido4",
    status: "StockinOrder",
    price: 44000,
  },
  {
    id: 8,
    stock: 10,
    username: "utilidad1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "maracUtilidad1",
    status: "Stock",
    price: 36000,
  },
  {
    id: 9,
    stock: 0,
    username: "Juguete4",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "snow@gmail.com",
    status: "OutofStock",
    price: 6500,
  },
  {
    id: 10,
    stock: 10,
    username: "Juguete3",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "snow@gmail.com",
    status: "Stock",
    price: 6500,
  },
];