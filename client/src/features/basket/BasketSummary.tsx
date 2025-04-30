import {TableContainer,Paper,Table,TableBody,TableRow,TableCell,} from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";

interface Props{
  subtotal?: number;
}
export default function BasketSummary({subtotal}:Props) {
  const {basket}=useAppSelector(state =>state.basket);
  
  if(subtotal===undefined)
    subtotal= basket?.items.reduce((sum, item) => sum + item.quantity * item.price, 0) ?? 0;
  
  const deliveryFee = subtotal > 200000 ? 0 : 30000;

  return (
    <>
      <TableContainer component={Paper} variant={"outlined"}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>مجموع هزینه کالا ها</TableCell>
              <TableCell align="right">{subtotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>هزینه ارسال*</TableCell>
              <TableCell align="right">{deliveryFee}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>جمع کل</TableCell>
              <TableCell align="right">{subtotal + deliveryFee}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span style={{ fontStyle: "italic" }}>
                  *هزینه ارسال برای سفارشات بالای دویست هزار تومان رایگان می باشد
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
