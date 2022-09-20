import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Alimento Razas pequeñas",
      img: "https://olimpica.vtexassets.com/arquivos/ids/542108/image-b48ba00cc8104b659bd76544d5bf5ed8.jpg?v=637565408390070000",
      customer: "John Smith",
      date: "9 Septemper",
      amount: "$ 78.500",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Juguete para perro",
      img: "https://mundopug.info/wp-content/plugins/aawp/public/image.php?url=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTEzTjJoYkxybVMuanBn",
      customer: "Michael Doe",
      date: "3 Sepeptember",
      amount: "$ 9.000",
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Bebedero perros y gatos",
      img: "https://i.linio.com/p/601294ba1f061c6a60f2e5f77895cf3c-product.jpg",
      customer: "John Smith",
      date: "1 September",
      amount: "$ 35.000",
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Alimento Razas grandes",
      img: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_product_carousel_regular/public/purina-pro-plan-flagship-perros-adult-razas-grandes.png?itok=pkYiAI9L",
      customer: "Jane Smith",
      date: "2 September",
      amount: "$ 92.000",
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Correa para perro",
      img: "https://cf.shopee.com.co/file/29d381b3f894063bf624ea301d4f6760",
      customer: "Harold Carol",
      date: "13 September",
      amount: "$ 20.000",
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650, color: '#f1f1f1' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;