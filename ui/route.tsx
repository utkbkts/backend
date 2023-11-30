import clsx from "clsx";
import Link from "next/link";

type Props={
    route:string;
    label:string;
    isActive?:boolean;
    onClick?:()=>void;
    className?:string;
}

const Route = ({route,label,isActive,onClick,className}:Props)=>{
    return (
        <Link href={route} onClick={onClick} className={clsx(isActive && "text-primary rounded-none bg-transparent",className)}>{label}</Link>
    )
}

export default Route