import { Link } from "react-router-dom";
import Gmail_logo from "../../public/gmail_icon.png";
import meet_logo from "../../public/meet_icon.png"
import calender_logo from "../../public/calender_icon.png"
import call_logo from "../../public/call_icon.png"
import whatsapp_logo from "../../public/whatsapp_icon.png"

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Circle,
  CircleCheck,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"

import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen md:ml-8">
      <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-6">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
              <CircleCheck color="#5FD068" />
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={Gmail_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Gmail Integration</h1>
              </CardTitle>
            
          </Card>
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={calender_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Calender Integration</h1>
              </CardTitle>
            
          </Card>

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={whatsapp_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>whatsapp Integration</h1>
              </CardTitle>
            
          </Card>

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={meet_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Gmeet Integration</h1>
              </CardTitle>
            
          </Card>

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-end pb-2 space-y-0">
            <Circle color="#878787"/>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-[50%] h-[100%]">
                    <img src={call_logo} alt="Gmail Logo" />
                </div>
            </div>
            
            </CardContent>
            <CardTitle className="flex items-center justify-center w-full text-sm font-medium">
                <h1>Call Integration</h1>
              </CardTitle>
            
          </Card>
          
            {/* <Card>
            <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">+25% from last week</div>
            </CardContent>
            <CardFooter>
                <Progress value={25} aria-label="25% increase" />
            </CardFooter>
            </Card> */}

          {/* <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card> */}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Important mails</CardTitle>
                <CardDescription>
                    you have 15 unread Important emails
                </CardDescription>
              </div>
              <Button asChild size="sm" className="gap-1 ml-auto">
                <Link href="#">
                  View All
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mail</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Label</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam..example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Olivia Smith</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        olivia..example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Refund
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Noah Williams</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        noah..example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Emma Brown</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        emma..example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right">$450.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam..example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right">$550.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin..email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee..email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen..email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will..email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis..email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}