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
  dapps: string;
  specific: boolean;
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
      <CardFooter className="mt-auto gap-4">
        <Link
          className="border-2 border-black rounded-lg px-3 py-2 hover:bg-slate-200"
          href={props.homeSite}
          target="_blank"
        >
          Learn More
        </Link>
        {props.specific ? (<Link
          className="border-2 bg-black text-white border-black rounded-lg px-3 py-2 hover:bg-slate-900"
          href={props.dapps}
          target="_blank"
        >
          Check Out More dApps
        </Link>) : (<Link
          className="border-2 bg-black text-white border-black rounded-lg px-3 py-2 hover:bg-slate-900"
          href={`/dapps/${props.name.toLowerCase()}`}
          target="_blank"
        >
          Check Out dApps
        </Link>)
        }
        
      </CardFooter>
    </Card>
  );
}
