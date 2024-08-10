import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type LayerDetailsCardProps = {
  name: string;
  description: string;
  type: string;
  logo: string;
  homeSite: string;
};

export default function LayerDetailsCard(props: LayerDetailsCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row gap-3 text-center">
            <img src={props.logo} alt={props.name} className="w-7 h-7" />
            {props.name}
          </div>
        </CardTitle>
        <CardDescription>{props.type.toLocaleUpperCase()}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          className="border-2 border-black rounded-lg px-3 py-2 hover:bg-slate-200"
          href={props.homeSite}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
}
