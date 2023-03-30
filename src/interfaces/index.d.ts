export interface IUser {
  id?: number;
  name: string;
  town: string;
  birthDate: string;
  phone: string;
  email: string;
  status: "Ученик" | "Учитель";
  teachers: string[];
  isVegan: boolean;
  isConcert: boolean;
  isCar: boolean;
  isRegistrationsEmailSent?: boolean;
  isPaymentEmailSent?: boolean;
  comment: string | null;
}
