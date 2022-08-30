export interface Order {
  status: boolean;
  message: string;
  data: {
    meta: {
      page: number;
      pages: number;
      perpage: number;
      total: number;
      sort: any;
      field: any;
    };
    data: [
      {
        key: {
          createAt: string;
          pharmacyName: string;
          pharmacyOrdersId: number;
        };
        ordersDetails: [
          {
            id: number;
            quantity: number;
            unitPrice: number;
            totalPrice: number;
            pharmacyOrdersId: number;
            pharmacyOrders: {
              createdAt: string;
              pharmacy: {
                pharmacyName: string;
              };
              ordersTotalPrice: number;
            };
            drug: {
              id: number;
              drugId: number;
              drugName: string;
              stock: number;
              sellPrice: number;
              drugStatus: number;
            };
          }
        ];
      },
      {
        key: {
          createAt: string;
          pharmacyName: string;
          pharmacyOrdersId: number;
        };
        ordersDetails: [
          {
            id: number;
            quantity: number;
            unitPrice: number;
            totalPrice: number;
            pharmacyOrdersId: number;
            pharmacyOrders: {
              createdAt: string;
              pharmacy: {
                pharmacyName: string;
              };
              ordersTotalPrice: number;
            };
            drug: {
              id: number;
              drugId: number;
              drugName: string;
              stock: number;
              sellPrice: number;
              drugStatus: number;
            };
          }
        ];
      },
      {
        key: {
          createAt: string;
          pharmacyName: string;
          pharmacyOrdersId: number;
        };
        ordersDetails: [
          {
            id: number;
            quantity: number;
            unitPrice: number;
            totalPrice: number;
            pharmacyOrdersId: number;
            pharmacyOrders: {
              createdAt: string;
              pharmacy: {
                pharmacyName: string;
              };
              ordersTotalPrice: number;
            };
            drug: {
              id: number;
              drugId: number;
              drugName: string;
              stock: number;
              sellPrice: number;
              drugStatus: number;
            };
          }
        ];
      }
    ];
  };
}
