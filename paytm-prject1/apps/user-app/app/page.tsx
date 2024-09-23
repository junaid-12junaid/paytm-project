import { Button } from "@repo/ui/button"
import {PrismaClient} from "@repo/db/client"

let client=new PrismaClient()

export default function Home() {
  return <div>
    <h1 className="bg-orange-300">Hello</h1>
    <Button children='hello' appName="hello"/>
  </div>
}
