/* rule 페이지 props 타입 */
export interface RoleCardProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string[];
  alignment: "left" | "center" | "right";
}
