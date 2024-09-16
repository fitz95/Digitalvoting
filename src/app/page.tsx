import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowUpToLine, CheckCircle, Leaf } from "lucide-react"
import Link from 'next/link'

const perks = [
{
  name: "Instant Delivery",
  Icon: ArrowUpToLine,
  description: "Get the receipt of your order within seconds in your email inbox."
},
{
  name: "Guaranteed Vote Count",
  Icon: CheckCircle,
  description: "We guarantee that your vote will be counted and will be anonymous."
},
{
  name: "For the Planet",
  Icon: Leaf,
  description: "We have pledged 1% of our profits to the environment.",

}

]

export default function Home() {
  return <>
   <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Voting Platform for
        <span className="text-blue-600"> Miss Twitter 237</span>
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Welcome to your Miss Twitter237. We are here to help you vote for your favorite candidate.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href="/products" className={buttonVariants()}>Browse Candidates</Link>
        <Button  variant="ghost" className="mt-4 sm:mt-0">Leading Candidates &rarr;</Button>
      </div>
    </div>

    {/* Candidates*/}
  </MaxWidthWrapper>
  <section className="border border-gray-200 bg-gray-50">
  <MaxWidthWrapper>
      
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Vote with Us?</h2>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Here are some of the perks of voting with us
        </p>
        <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-3">
          {perks.map(({ Icon, name, description }) => (
            <div key={name} className="flex flex-col items-center">
              <div className="h-16 w-16 flex  items-center justify-center rounded-full bg-blue-100 text-blue-900">
                <Icon className="w-12 h-12 " />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
              <p className="mt-2 text-base text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
    <MaxWidthWrapper>
      
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leading Candidates</h2>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Here are the top 3 candidates for this year`'`s Miss Twitter237 
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>Browse Candidates</Link>
          <Button  variant="ghost" className="mt-4 sm:mt-0">View All Candidates &rarr;</Button>
        </div> */}
      </div>
    </MaxWidthWrapper>
  </section>
  </>
}
