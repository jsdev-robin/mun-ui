import React from "react";
import Heading from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Archive,
  Check,
  EllipsisVertical,
  FilesIcon,
  Pencil,
  Plus,
  Star,
  Trash,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Checkbox from "@/components/ui/checkbox";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const TeamListCard = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">User Profile Teams List View</Heading>
      <Card className="p-10 bg-muted space-y-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-4">
            <div className="grid gap-x-4 gap-y-2 lg:grid-cols-12 lg:gap-y-0">
              <div className="lg:col-span-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-x-1 font-semibold decoration-2 text-accent-foreground transition-all hover:text-primary hover:underline"
                >
                  #Digitalmarketing
                </Link>
                <div className="-mx-0.5 mt-1 sm:-mx-1 lg:mt-2">
                  <span className="text-xs inline-block rounded-md bg-muted sm:m-1 sm:p-2">
                    Marketing
                  </span>
                  <span className="text-xs inline-block rounded-md bg-muted sm:m-1 sm:p-2">
                    Digital
                  </span>
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-sm mt-1 text-muted-foreground">
                  Our group promotes and sells products and services by
                  leveraging online marketing tactics
                </p>
                <div className="text-center flex gap-x-3 mt-2">
                  <h4 className="text-xs uppercase text-muted-foreground">
                    Members:
                  </h4>
                  <div className="flex items-center -space-x-2">
                    <Avatar className="size-7 ring-1 ring-background border border-border">
                      <AvatarImage src="/images/users/01.jpg" alt="@Avatar" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="size-7 ring-1 ring-background border border-border">
                      <AvatarImage src="/images/users/02.jpg" alt="@Avatar" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="size-7 ring-1 ring-background border border-border">
                      <AvatarImage alt="@Avatar" />
                      <AvatarFallback className="text-xs font-semibold">
                        C
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="size-7 ring-1 ring-background border border-border">
                      <AvatarImage src="/images/users/04.jpg" alt="@Avatar" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="size-7 ring-1 ring-background border border-border">
                      <AvatarImage alt="@Avatar" />
                      <AvatarFallback className="text-xs font-semibold">
                        T
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-center justify-end border-t gap-2 border-border pt-3 lg:flex-col lg:border-t-0 lg:pt-0">
                  <div className="lg:ms-auto lg:order-2">
                    <Button>Leave team</Button>
                  </div>
                  <div className="lg:ms-auto lg:order-1">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-7">
                          <EllipsisVertical />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-1" align="end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="xs"
                              className="w-full justify-start text-accent-foreground"
                            >
                              <Pencil />
                              Edit team
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="p-0 gap-0 w-full rounded-lg max-w-[95%] md:max-w-xl">
                            <DialogHeader className="px-5 py-4 border-b">
                              <DialogTitle>Edit team</DialogTitle>
                              <DialogDescription />
                            </DialogHeader>
                            <ScrollArea className="px-4 py-0 max-md:portrait:max-h-[calc(85vh-100px)] max-md:landscape:max-h-[calc(85vh-100px)] md:portrait:max-h-[calc(100vh-200px)] md:landscape:max-h-[calc(100vh-200px)]">
                              <div className="grid gap-6 px-1 my-4">
                                <div className="grid gap-2.5">
                                  <Label htmlFor="title">Title</Label>
                                  <Input
                                    type="text"
                                    id="title"
                                    placeholder="conference"
                                  />
                                </div>
                                <div className="grid gap-2.5">
                                  <Label htmlFor="Iindustry">Industry</Label>
                                  <Input
                                    type="text"
                                    id="industry"
                                    placeholder="Enter name"
                                  />
                                </div>
                                <div className="grid gap-2.5">
                                  <Label htmlFor="description">
                                    Description
                                  </Label>
                                  <Textarea
                                    id="description"
                                    placeholder="Online meeting services group"
                                  />
                                </div>
                                <div className="grid gap-2.5">
                                  <Label htmlFor="members">Members</Label>
                                  <div className="flex items-center flex-1 gap-4">
                                    <Input
                                      type="text"
                                      id="members"
                                      placeholder="Enter name"
                                    />
                                    <Button variant="outline">
                                      <Plus />
                                      Add
                                    </Button>
                                  </div>
                                </div>
                                <div className="grid gap-2.5">
                                  <Label htmlFor="Suggested">
                                    Suggested members
                                  </Label>
                                  <div className="flex items-center gap-2.5">
                                    <Label className="relative block rounded-full cursor-pointer">
                                      <Image
                                        src="/images/users/01.jpg"
                                        alt="avatar"
                                        width={44}
                                        height={44}
                                        className="w-11 h-11 rounded-full"
                                      />
                                      <span className="absolute -right-1 -top-1 rounded-full bg-background">
                                        <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                          <Checkbox className="rounded-full z-10 fill-primary stroke-2" />
                                          <Check className="shrink-0 size-3 absolute z-0" />
                                        </span>
                                      </span>
                                    </Label>
                                    <Label className="relative block rounded-full cursor-pointer">
                                      <Image
                                        src="/images/users/02.jpg"
                                        alt="avatar"
                                        width={44}
                                        height={44}
                                        className="w-11 h-11 rounded-full"
                                      />
                                      <span className="absolute -right-1 -top-1 rounded-full bg-background">
                                        <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                          <Checkbox className="rounded-full z-10 fill-primary stroke-2" />
                                          <Check className="shrink-0 size-3 absolute z-0" />
                                        </span>
                                      </span>
                                    </Label>
                                    <Label className="relative block rounded-full cursor-pointer">
                                      <span className="w-11 h-11 rounded-full bg-muted inline-flex items-center justify-center border border-border">
                                        R
                                      </span>
                                      <span className="absolute -right-1 -top-1 rounded-full bg-background">
                                        <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                          <Checkbox className="rounded-full z-10 fill-primary stroke-2" />
                                          <Check className="shrink-0 size-3 absolute z-0" />
                                        </span>
                                      </span>
                                    </Label>
                                    <Label className="relative block rounded-full cursor-pointer">
                                      <Image
                                        src="/images/users/01.jpg"
                                        alt="avatar"
                                        width={44}
                                        height={44}
                                        className="w-11 h-11 rounded-full"
                                      />
                                      <span className="absolute -right-1 -top-1 rounded-full bg-background">
                                        <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                          <Checkbox className="rounded-full z-10 fill-primary stroke-2" />
                                          <Check className="shrink-0 size-3 absolute z-0" />
                                        </span>
                                      </span>
                                    </Label>
                                    <Label className="relative block rounded-full cursor-pointer">
                                      <span className="w-11 h-11 rounded-full bg-muted inline-flex items-center justify-center border border-border">
                                        O
                                      </span>
                                      <span className="absolute -right-1 -top-1 rounded-full bg-background">
                                        <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                          <Checkbox className="rounded-full z-10 fill-primary stroke-2" />
                                          <Check className="shrink-0 size-3 absolute z-0" />
                                        </span>
                                      </span>
                                    </Label>
                                  </div>
                                </div>
                                <div className="grid gap-2.5">
                                  <Label htmlFor="Cover">Cover</Label>
                                  <div className="flex justify-center rounded-xl border border-border border-dashed p-12">
                                    <div className="text-center">
                                      <FilesIcon className="size-16 mx-auto mb-4 stroke-muted-foreground" />
                                      <div className="flex items-center flex-wrap justify-center text-sm text-muted-foreground">
                                        <span className="mr-1 font-medium text-accent-foreground">
                                          Drop your files here or
                                        </span>
                                        <Label className="text-primary font-semibold decoration-2 cursor-pointer transition-all hover:underline block">
                                          browse
                                        </Label>
                                      </div>
                                      <p className="text-muted-foreground text-sm">
                                        CSV, XLS, DOCX
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ScrollArea>
                            <DialogFooter className="p-4 border-t flex-row gap-2 justify-end">
                              <DialogClose asChild>
                                <Button variant="outline">Close</Button>
                              </DialogClose>
                              <Button>Save and change</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="ghost"
                          size="xs"
                          className="w-full justify-start text-accent-foreground"
                        >
                          <Star />
                          Add to favorites
                        </Button>
                        <Button
                          variant="ghost"
                          size="xs"
                          className="w-full justify-start text-accent-foreground"
                        >
                          <Archive />
                          Archive team
                        </Button>
                        <Separator className="my-1" />
                        <Button
                          variant="ghost"
                          size="xs"
                          className="w-full justify-start text-red-500 hover:text-red-500"
                        >
                          <Trash />
                          Delete team
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default TeamListCard;
