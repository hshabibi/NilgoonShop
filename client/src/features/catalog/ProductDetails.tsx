import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid,Divider,TableContainer,Table,TableBody,TableRow,TableCell, TextField } from "@mui/material";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "../basket/basketSlice";
import { fetchProductAsync, productSelectors } from "./catalogSlice";


export default function ProductDetails(){
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { basket, status } = useAppSelector(state => state.basket);
  const product = useAppSelector(state => productSelectors.selectById(state,parseInt(id!)));
  const {status: productStatus} = useAppSelector(state => state.catalog);
  const [quantity, setQuantity] = useState(0);
  const item = basket?.items.find(i => i.productId === product?.id);

  useEffect(() => {
      if (item) setQuantity(item.quantity);
      if (!product && id) dispatch(fetchProductAsync(parseInt(id)))
  }, [id, item, product, dispatch]);

    function handleInputChange(event:any){
      if(event.target.value >= 0){
        setQuantity(event.target.value);
      } 
    }

    function handleUpdateCart(){
      if (!item || quantity > item.quantity) {
        const updatedQuantity = item ? quantity - item.quantity : quantity;
        dispatch(addBasketItemAsync({productId:product?.id!,quantity:updatedQuantity}));
    } else {
        const updatedQuantity = item.quantity - quantity;
        dispatch(removeBasketItemAsync({productId:product?.id!,quantity:updatedQuantity}));
    }
    }

    if(productStatus.includes('pending'))return <LoadingComponent message="...در حال دریافت اطلاعات کالا"/>

    if(!product)return <NotFound/>

      return(
       
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <img src={product.pictureUrl} alt={product.name}style={{width:'100%'}}/>

            </Grid>
            <Grid item xs={6}>
              <Typography variant='h3'>{product.name}</Typography>
              <Divider sx={{mb:2}}/>
              <Typography variant='h4' color='secondary'>{product.price}</Typography>
              <TableContainer>
                <Table>
                      <TableBody>
                          <TableRow>
                            <TableCell>نام محصول</TableCell>
                            <TableCell>{product.name}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>توضیحات</TableCell>
                            <TableCell>{product.description}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>نوع</TableCell>
                            <TableCell>{product.type}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>برند</TableCell>
                            <TableCell>{product.brand}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>موجودی انبار</TableCell>
                            <TableCell>{product.quantityInStock}</TableCell>
                          </TableRow>
                      </TableBody>
                </Table>
              </TableContainer>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                  onChange={handleInputChange}
                  variant="outlined"
                  type="number"
                  label='مقدار در سبد خرید'
                  fullWidth
                  value={quantity}
                  />
                </Grid>
                <Grid item xs={6}>
                  <LoadingButton
                  disabled={item?.quantity ===quantity || (!item && quantity === 0)}
                  loading={status.includes('pending')}
                  onClick={handleUpdateCart}
                  sx={{height:'55px'}}
                  color="primary"
                  size="large"
                  variant="contained"
                  fullWidth
                  >
                    {item?'به روزرسانی مقدار':'افزودن به سبد خرید'}
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      )
  }


