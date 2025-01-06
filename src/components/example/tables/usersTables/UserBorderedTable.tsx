import React from "react";
import Heading from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  Download,
  PanelRightOpen,
  TriangleAlert,
  Pencil,
  Trash,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import CheckboxField from "@/components/ui/checkbox-field";
import Text from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import TableEmptyState from "../utils/TableEmptyState";
import TableSearchInput from "../utils/TableSearchInput";
import TableImportExport from "../utils/TableImportExport";
import TableUserFilter from "../utils/TableUserFilter";
import UsaFlagIcon from "@/app/assets/icons/UsaFlagIcon";
import { borderedTableUsersData } from "../data/tableData";
import TableHeadAction from "../utils/TableHeadAction";

const UserBorderedTable = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">Bordered</Heading>
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="all">
            <TabsList className="bg-transparent rounded-none w-full justify-start px-0 pb-2.5 space-x-1 mb-4 flex overflow-x-auto relative before:absolute before:w-full before:border-b-2 before:bottom-0 before:border-border">
              {["all", "Valid accounts", "Fake accounts"].map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item}
                  className="data-[state=active]:bg-muted relative before:data-[state=active]:content-[''] before:data-[state=active]:absolute before:data-[state=active]:h-0.5 before:data-[state=active]:w-full before:data-[state=active]:bg-foreground/30 before:data-[state=active]:-bottom-2.5 hover:bg-muted capitalize"
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="w-full flex flex-wrap justify-between gap-4 mb-4">
              <TableSearchInput className="w-full md:w-1/2" />
              <div className="flex flex-wrap items-center gap-4 justify-end w-full md:w-auto md:justify-normal">
                <TableImportExport />
                <TableUserFilter />
              </div>
            </div>
            <TabsContent value="all">
              <div className="grid gap-4">
                <Table className="h-[70vh]">
                  <TableHeader>
                    <TableRow className="sticky top-0 bg-muted z-10">
                      <TableHead>
                        <CheckboxField />
                      </TableHead>
                      <TableHead>
                        <TableHeadAction>Name</TableHeadAction>
                      </TableHead>
                      <TableHead>
                        <TableHeadAction>Address</TableHeadAction>
                      </TableHead>
                      <TableHead>
                        <TableHeadAction>Signed up as</TableHeadAction>
                      </TableHead>
                      <TableHead>
                        <TableHeadAction>Email</TableHeadAction>
                      </TableHead>
                      <TableHead>
                        <TableHeadAction>Phone</TableHeadAction>
                      </TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {borderedTableUsersData.map((user, index) => (
                      <TableRow
                        className="whitespace-nowrap *:border-r *:border-b"
                        key={index}
                      >
                        <TableCell>
                          <CheckboxField />
                        </TableCell>
                        <TableCell className="group">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage src={user.image} alt={user.name} />
                                <AvatarFallback className="uppercase">
                                  {user.name.slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <Text variant="sm" className="font-medium">
                                {user.name}
                              </Text>
                            </div>
                            <Sheet>
                              <SheetTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  className="ml-20 lg:invisible lg:group-hover:visible"
                                >
                                  <PanelRightOpen /> Open
                                </Button>
                              </SheetTrigger>
                              <SheetContent className="flex flex-col justify-between gap-4">
                                <SheetHeader>
                                  <div className="flex flex-col items-center">
                                    <Avatar>
                                      <AvatarImage
                                        src={user.image}
                                        alt={user.name}
                                      />
                                      <AvatarFallback className="uppercase">
                                        {user.name.slice(0, 2)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <SheetTitle>{user.name}</SheetTitle>
                                    <SheetDescription className="text-xs">
                                      Contact was created 22 days ago
                                    </SheetDescription>
                                  </div>
                                </SheetHeader>
                                <ScrollArea>
                                  <div className="py-2 border-t grid grid-cols-3 gap-4 items-center">
                                    <div className="col-span-1">
                                      <Text
                                        variant="sm"
                                        className="text-accent-foreground"
                                      >
                                        User ID:
                                      </Text>
                                    </div>
                                    <div className="col-span-2">
                                      <Link
                                        href="/"
                                        className={cn(
                                          buttonVariants({ variant: "link" }),
                                          "text-primary px-0 py-0 h-auto"
                                        )}
                                      >
                                        #96810
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="py-2 border-t grid grid-cols-3 gap-4 items-center">
                                    <div className="col-span-1">
                                      <Text
                                        variant="sm"
                                        className="text-accent-foreground"
                                      >
                                        Email:
                                      </Text>
                                    </div>
                                    <div className="col-span-2">
                                      <Text variant="sm">{user.email}</Text>
                                    </div>
                                  </div>
                                  <div className="py-2 border-t grid grid-cols-3 gap-4 items-center">
                                    <div className="col-span-1">
                                      <Text
                                        variant="sm"
                                        className="text-accent-foreground"
                                      >
                                        Phone:
                                      </Text>
                                    </div>
                                    <div className="col-span-2">
                                      <Text
                                        variant="sm"
                                        className="flex items-center gap-2"
                                      >
                                        <UsaFlagIcon />
                                        {user.phone}
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="py-2 border-t grid grid-cols-3 gap-4 items-center">
                                    <div className="col-span-1">
                                      <Text
                                        variant="sm"
                                        className="text-accent-foreground"
                                      >
                                        Address:
                                      </Text>
                                    </div>
                                    <div className="col-span-2">
                                      <Text variant="sm">{user.address}</Text>
                                    </div>
                                  </div>
                                  <div className="py-2 border-t border-b grid grid-cols-3 gap-4 items-center">
                                    <div className="col-span-1">
                                      <Text
                                        variant="sm"
                                        className="text-accent-foreground"
                                      >
                                        Signed up as:
                                      </Text>
                                    </div>
                                    <div className="col-span-2">
                                      {user.status === "Valid account" ? (
                                        <Badge className="rounded-full py-1.5 bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary shadow-none font-medium">
                                          <Check className="size-4 mr-1" />
                                          {user.status}
                                        </Badge>
                                      ) : (
                                        <Badge className="rounded-full py-1.5 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500 shadow-none font-medium">
                                          <TriangleAlert className="size-4 mr-1" />
                                          {user.status}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </ScrollArea>
                                <div className="grid grid-cols-2 gap-2">
                                  <Button size="sm">
                                    <Pencil />
                                    Edit user
                                  </Button>
                                  <Button size="sm" variant="destructive">
                                    <Trash />
                                    Delete
                                  </Button>
                                </div>
                              </SheetContent>
                            </Sheet>
                          </div>
                        </TableCell>
                        <TableCell>{user.address}</TableCell>
                        <TableCell>
                          {user.status === "Valid account" ? (
                            <Badge className="rounded-full py-1.5 bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary shadow-none font-medium">
                              <Check className="size-4 mr-1" />
                              {user.status}
                            </Badge>
                          ) : (
                            <Badge className="rounded-full py-1.5 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500 shadow-none font-medium">
                              <TriangleAlert className="size-4 mr-1" />
                              {user.status}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                          <Download className="size-5" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex items-center flex-wrap gap-4 justify-between">
                  <div>
                    <Text variant="sm" className="text-muted-foreground">
                      <span className="text-foreground mr-1">6</span>
                      results
                    </Text>
                  </div>

                  <div>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <ChevronLeft />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <ChevronRight />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Valid accounts">
              <TableEmptyState />
            </TabsContent>
            <TabsContent value="Fake accounts">
              <TableEmptyState />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserBorderedTable;
