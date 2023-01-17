export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  action?: string;
}

export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface IMovementResponse {
  velocity: number;
  distance: number;
}
