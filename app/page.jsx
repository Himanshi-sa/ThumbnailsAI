import Link from 'next/link'
export default function page(){
    return (<div>
        <h3>Hello world</h3>
        <Link href="/login">go back to login</Link>
        </div>
    );
}