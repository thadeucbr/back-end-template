export interface ICreateUserDTO {
  name: string;
  email: string;
  phone: string;
  password: string;
  age: number;
  admin?: boolean;
}

export interface IUpdateUserDTO {
  id: string;
  body: {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    age?: number;
    admin?: boolean;
  };
}
