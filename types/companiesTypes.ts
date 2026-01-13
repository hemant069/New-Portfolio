import { StaticImageData } from "next/image";

export interface companiesTypes {
  name: string;
  joinning_date: string;
  end_date: string;
  role: string;
  location: string;
  tools: StaticImageData[];
  description: string[];
  status: boolean;
}
