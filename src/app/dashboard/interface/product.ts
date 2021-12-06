export interface IProductRes {
    Data: null;
    ErrorCode: number;
    Message: string;
    Status: boolean;
  }

export interface AdminProduct{

    Product_ID: number;
    Product_Name: string;
    Product_Size: number;
    Product_Color: string;
    Product_Price: number;
    map(arg0: (item: any) => any);
  }
