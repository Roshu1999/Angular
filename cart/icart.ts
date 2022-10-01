export interface Icart {

  productid: number;
  details: string;
  price: string;
  name: string;
  image: string;
  quantity: string;
  totalprice: string;
  username?: string;
}

/*<!--< table >
  <thead>
  <tr align="center" >
    <th>ProductImage < /th>
    < th > ProductId < /th>
    < th > ProductDetails < /th>
    < th > ProductPrice < /th>
    < th > ProductName < /th>
    < th > ProductQuantity < /th>
    < th > TotalPrice < /th>
    < th > Perform < /th>

    < /tr>
    < /thead>
    < tbody >
    <ng-container * ngFor="let data of cart" >
      <tr align="center" >
        <th><img[src]="data.image" style = "width:200px; height:200px;" > </th>
          < th > {{ data.productid }}</th>
            < th > {{ data.details }}</th>
              < th > {{ data.price }}</th>
                < th > {{ data.name }}</th>
                  < th > {{ data.quantity }}</th>
                    < th > {{ data.totalprice }}</th>
                      < th >
                      <button mat - icon - button color = "warn"(click) = "deleteEmployee(data.productid)" >
                        <mat-icon > delete </mat-icon>
                        < /button>
                        < /th>
                        < /tr>
                        < /ng-container>
                        < /tbody>
                        < /table>
-->*/
